import Progress from "components/Progress";
import { EdgeData } from "pages/FlowBuilderv2/Edges/EdgeData";
import FilterReview from "pages/FlowBuilderv2/FilterReview/FilterReview";
import FlowEditor, { NodeType } from "pages/FlowBuilderv2/FlowEditor";
import { NodeData, Stats } from "pages/FlowBuilderv2/Nodes/NodeData";
import { JourneyStatus } from "pages/JourneyTablev2/JourneyTablev2";
import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { applyNodeChanges, Edge, Node, NodeChange } from "reactflow";
import {
  JourneyType,
  loadVisualLayout,
  QueryStatementType,
  QueryType,
  SegmentsSettings,
  SegmentsSettingsType,
  selectNode,
  setFlowId,
  setFlowName,
  setFlowStatus,
  setIsViewMode,
  setJourneyType,
  setNodes,
  setSegmentsSettings,
} from "reducers/flow-builder.reducer";
import ApiService from "services/api.service";
import { useAppDispatch, useAppSelector } from "store/hooks";
import FlowViewerHeader from "./Header/FlowViewerHeader";
import FlowViewerSidePanel from "./SidePanel/FlowViewerSidePanel";

export enum FlowViewerTab {
  JOURNEY = "Journey",
  CUSTOMER_SEGMENT = "Customer segment",
}

const nodesToLoadCustomerCount: NodeType[] = [
  NodeType.WAIT_UNTIL,
  NodeType.TIME_DELAY,
  NodeType.TIME_WINDOW,
];

const FlowViewerv2 = () => {
  const { id } = useParams();
  const { state: locationState } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState(FlowViewerTab.JOURNEY);

  const dispatch = useAppDispatch();

  const {
    journeyType,
    segments: segmentsSettings,
    nodes,
  } = useAppSelector((state) => state.flowBuilder);

  useEffect(() => {
    if (locationState?.stepId && nodes.length > 0) {
      const searchedNode = nodes.find(
        (el) => el.data.stepId === locationState?.stepId
      );

      if (!searchedNode) return;
      dispatch(
        setNodes(
          nodes.map((node) => ({
            ...node,
            selected: node.data.stepId === locationState.stepId ? true : false,
          }))
        )
      );
      locationState.stepId = null;
    }
  }, [nodes]);

  const tabs: Record<FlowViewerTab, ReactNode> = {
    [FlowViewerTab.JOURNEY]: (
      <div className="w-full h-full flex">
        <FlowEditor isViewMode={true} className="bg-[#F9FAFB]" />
        <FlowViewerSidePanel />
      </div>
    ),
    [FlowViewerTab.CUSTOMER_SEGMENT]: (
      <div className="w-full m-5 bg-white overflow-y-scroll">
        {/* <div className="bg-white p-5 flex flex-col gap-[10px]">
          <div className="font-inter font-semibold text-[20px] leading-[28px]">
            Journey type
          </div>
          <div className="font-inter font-normal text-[14px] leading-[22px] flex items-center gap-[10px]">
            <span>This Journey is a</span>
            <span className="px-2 py-[10px] bg-[#F3F4F6] border border-[#E5E7EB] font-semibold">
              {journeyType === JourneyType.DYNAMIC
                ? "Dynamic"
                : journeyType === JourneyType.STATIC
                ? "Static"
                : "Unspecified"}{" "}
              journey
            </span>
            <span>When new customers meet conditions will be enrolled.</span>
          </div>
        </div> */}
        <div className="bg-white p-5 flex flex-col gap-[10px]">
          <div className="font-inter font-semibold text-[20px] leading-[28px]">
            Condition
          </div>
          <div className="font-inter font-normal text-[14px] leading-[22px]">
            {segmentsSettings.type === SegmentsSettingsType.ALL_CUSTOMERS ? (
              <>
                <span className="font-bold">All customers</span> will enter this
                journey
              </>
            ) : (
              <>
                Customers will enter this journey when they meets the following
                conditions:
              </>
            )}
          </div>
          {segmentsSettings.type === SegmentsSettingsType.CONDITIONAL && (
            <FilterReview settingsQuery={segmentsSettings.query} />
          )}
        </div>
      </div>
    ),
  };

  const loadJourney = async () => {
    setIsLoading(true);
    try {
      const { data } = await ApiService.get<{
        name: string;
        nodes: Node<NodeData>[];
        edges: Edge<EdgeData>[];
        segments: SegmentsSettings;
        isDynamic: boolean;
        isActive?: boolean;
        isPaused?: boolean;
        isStopped?: boolean;
        isDeleted?: boolean;
      }>({
        url: "/journeys/" + id,
      });

      dispatch(setFlowName(data.name));
      if (
        data.nodes.length !== 0 &&
        data.nodes.some((node) => node.type === NodeType.START)
      ) {
        const stepIdsToLoadCustomerCount: string[] = [];

        const updatedNodesWithStats = await Promise.all(
          data.nodes.map(async (node) => {
            if (
              nodesToLoadCustomerCount.includes(node.type as NodeType) &&
              node.data.stepId
            ) {
              stepIdsToLoadCustomerCount.push(node.data.stepId);
            }

            if (
              !node.data.stepId ||
              (node.type !== NodeType.MESSAGE && node.type !== NodeType.TRACKER)
            )
              return { ...node };

            try {
              const { data: stats } = await ApiService.get<Stats>({
                url: "/steps/stats/" + node.data.stepId,
              });

              return { ...node, data: { ...node.data, stats } };
            } catch (e) {
              return { ...node };
            }
          })
        );

        try {
          const { data: bulkCustomersCount } = await ApiService.post<number[]>({
            url: "/customers/count/bulk",
            options: {
              stepIds: stepIdsToLoadCustomerCount,
            },
          });

          for (let i = 0; i < stepIdsToLoadCustomerCount.length; i++) {
            const node = updatedNodesWithStats.find(
              (n) => n.data.stepId === stepIdsToLoadCustomerCount[i]
            );
            if (!node) continue;

            node.data.customersCount = bulkCustomersCount[i];
          }
        } catch (e) {
          console.error("Failed to load customer count", e);
        }

        dispatch(
          loadVisualLayout({
            nodes: updatedNodesWithStats,
            edges: data.edges,
          })
        );
      }

      const firstMessageNode = data.nodes.find(
        (node) => node.type === NodeType.MESSAGE
      );

      if (firstMessageNode) {
        dispatch(selectNode(firstMessageNode.id));
      }

      dispatch(setSegmentsSettings(data.segments));
      dispatch(
        setJourneyType(
          data.isDynamic ? JourneyType.DYNAMIC : JourneyType.STATIC
        )
      );
      dispatch(setFlowId(id));

      let status: JourneyStatus = JourneyStatus.DRAFT;

      if (data.isActive) status = JourneyStatus.ACTIVE;
      if (data.isPaused) status = JourneyStatus.PAUSED;
      if (data.isStopped) status = JourneyStatus.STOPPED;
      if (data.isDeleted) status = JourneyStatus.DELETED;

      dispatch(setFlowStatus(status));
    } finally {
      setIsLoading(false);
      dispatch(setIsViewMode(true));
    }
  };

  useEffect(() => {
    loadJourney();
  }, []);

  return (
    <div className="relative w-full h-full text-[#111827] font-inter font-normal text-[14px] leading-[22px]">
      {isLoading && (
        <div className="w-full h-full absolute top-0 left-0 bg-[#111827] bg-opacity-20 z-[99]">
          <Progress />
        </div>
      )}
      <FlowViewerHeader
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="relative flex w-full h-full max-h-[calc(100%-140px)]">
        {tabs[currentTab]}
      </div>
    </div>
  );
};

export default FlowViewerv2;
