import Button, { ButtonType } from "components/Elements/Buttonv2/Button";
import {
  JourneyStatus,
  journeyStatusClassName,
} from "pages/JourneyTablev2/JourneyTablev2";
import React, { FC, useState } from "react";
import ApiService from "services/api.service";
import { useAppSelector } from "store/hooks";
import { FlowViewerTab } from "../FlowViewerv2";
import FlowViewerStopModal from "../Modals/FlowViewerStopModal";

interface FlowViewerHeaderProps {
  tabs: Record<FlowViewerTab, React.ReactNode>;
  currentTab: FlowViewerTab;
  setCurrentTab: (tab: FlowViewerTab) => void;
}

const FlowViewerHeader: FC<FlowViewerHeaderProps> = ({
  tabs,
  currentTab,
  setCurrentTab,
}) => {
  const { flowName, flowId, flowStatus } = useAppSelector(
    (state) => state.flowBuilder
  );

  const [isStopModalOpen, setIsStopModalOpen] = useState(false);

  const handleResume = async () => {
    await ApiService.patch({ url: "/journeys/resume/" + flowId });

    window.location.reload();
  };

  const handlePause = async () => {
    await ApiService.patch({ url: "/journeys/pause/" + flowId });

    window.location.reload();
  };

  return (
    <div className="relative h-[140px] bg-white border-b-[1px] border-[#E5E7EB] flex flex-col justify-between">
      <div className="h-full px-5 flex justify-between items-center border-[#E5E7EB] border-y-[1px]">
        <div className="flex items-center gap-[10px]">
          <div className="font-semibold text-[20px] leading-[28px]">
            {flowName}
          </div>
          <div
            className={`px-[10px] py-[2px] font-inter font-semibold text-[12px] leading-5 rounded-[14px] ${journeyStatusClassName[flowStatus]}`}
          >
            {flowStatus}
          </div>
        </div>
        {flowStatus !== JourneyStatus.STOPPED &&
          flowStatus !== JourneyStatus.DELETED && (
            <div className="flex items-center gap-[10px] font-roboto">
              {flowStatus === JourneyStatus.PAUSED ? (
                <Button type={ButtonType.PRIMARY} onClick={handleResume}>
                  Resume
                </Button>
              ) : (
                <Button type={ButtonType.SECONDARY} onClick={handlePause}>
                  Pause
                </Button>
              )}

              <Button
                type={ButtonType.DANGEROUS}
                onClick={() => setIsStopModalOpen(true)}
              >
                Stop
              </Button>
            </div>
          )}
      </div>
      <div className="px-5 flex gap-[32px] font-roboto font-normal text-[14px] leading-[22px]">
        {(Object.keys(tabs) as FlowViewerTab[]).map((tabKey, i) => (
          <div
            key={i}
            className={`py-[12px] select-none cursor-pointer ${
              tabKey === currentTab
                ? "text-[#6366F1] border-b-2 border-[#6366F1]"
                : ""
            }`}
            onClick={() => setCurrentTab(tabKey)}
          >
            {tabKey}
          </div>
        ))}
      </div>
      <FlowViewerStopModal
        isOpen={isStopModalOpen}
        onClose={() => setIsStopModalOpen(false)}
      />
    </div>
  );
};

export default FlowViewerHeader;
