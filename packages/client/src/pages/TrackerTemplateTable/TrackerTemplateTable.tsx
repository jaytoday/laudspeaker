import Button, { ButtonType } from "components/Elements/Buttonv2";
import Input from "components/Elements/Inputv2";
import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import searchIconImage from "./svg/search-icon.svg";
import threeDotsIconImage from "./svg/three-dots-icon.svg";
import sortAscChevronsImage from "./svg/sort-asc-chevrons.svg";
import sortDescChevronsImage from "./svg/sort-desc-chevrons.svg";
import sortNoneChevronsImage from "./svg/sort-none-chevrons.svg";
import emptyDataImage from "./svg/empty-data.svg";
import Table from "components/Tablev2";
import Pagination from "components/Pagination";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Menu, Transition } from "@headlessui/react";
import ApiService from "services/api.service";
import Template from "types/Template";
import { toast } from "react-toastify";
import CreateTrackerTemplateModal from "./Modals/CreateTrackerTemplateModal";

interface TrackerRowData {
  id: string | number;
  name: string;
  createdAt: string;
}

enum SortProperty {
  CREATED_AT = "createdAt",
}

enum SortType {
  ASC = "asc",
  DESC = "desc",
}

interface SortOptions {
  sortBy: SortProperty;
  sortType: SortType;
}

const TrackerTemplateTable = () => {
  const navigate = useNavigate();

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isNameSegmentModalOpen, setIsNameSegmentModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState<TrackerRowData[]>([]);
  const [sortOptions, setSortOptions] = useState<SortOptions>({
    sortBy: SortProperty.CREATED_AT,
    sortType: SortType.DESC,
  });
  const [
    isCreateTrackerTemplateModalOpen,
    setIsCreateTrackerTemplateModalOpen,
  ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  const ITEMS_PER_PAGE = 5;

  const loadData = async () => {
    setIsLoading(true);
    try {
      const {
        data: { data, totalPages },
      } = await ApiService.get<{ data: Template[]; totalPages: number }>({
        url: `/templates?take=${ITEMS_PER_PAGE}&skip=${
          (currentPage - 1) * ITEMS_PER_PAGE
        }&search=${search}&orderBy=${sortOptions.sortBy}&orderType=${
          sortOptions.sortType
        }&type=custom_component`,
      });

      setRows(
        data.map((template) => ({
          id: template.id,
          name: template.name,
          createdAt: template.createdAt,
        }))
      );
      setPagesCount(totalPages);
      setIsLoaded(true);
    } catch (e) {
      toast.error("Failed to load data");
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    loadData();
  }, [currentPage, search, sortOptions]);

  useEffect(() => {
    setSearch("");
  }, [showSearch]);

  const handleDuplicateTrackerTemplate = async (name: string) => {
    await ApiService.post({ url: `/templates/${name}/duplicate` });
    await loadData();
  };

  const handleDeleteTrackerTemplate = async (id: string | number) => {
    await ApiService.delete({ url: `/templates/${id}` });
    await loadData();
  };

  return (
    <div className="p-5 flex flex-col gap-5 font-inter font-normal text-[14px] text-[#111827] leading-[22px]">
      <div className="flex justify-between items-center">
        <div className="text-[20px] font-semibold leading-[28px]">
          Onboarding Components
        </div>

        <Button
          type={ButtonType.PRIMARY}
          onClick={() => setIsCreateTrackerTemplateModalOpen(true)}
        >
          Create component template
        </Button>
      </div>
      <div className="p-5 bg-white rounded-lg flex flex-col gap-5">
        {rows.length === 0 && search === "" && isLoaded ? (
          <div className="w-full h-[300px] flex items-center justify-center select-none">
            <div className="flex flex-col items-center gap-5">
              <img src={emptyDataImage} />

              <div className="font-inter text-[16px] font-semibold leading-[24px] text-[#4B5563]">
                Create a component template
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-end items-center">
              {showSearch ? (
                <div className="flex gap-[10px] items-center">
                  <Input
                    value={search}
                    onChange={setSearch}
                    placeholder="Search all component templates"
                    showClearButton
                  />

                  <Button
                    type={ButtonType.LINK}
                    onClick={() => setShowSearch(false)}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <button onClick={() => setShowSearch(true)}>
                  <img src={searchIconImage} />
                </button>
              )}
            </div>

            <Table
              isLoading={isLoading}
              headings={[
                <div className="px-5 py-[10px] select-none">Template name</div>,
                <div
                  className="px-5 py-[10px] select-none flex gap-[2px] items-center cursor-pointer"
                  onClick={() => {
                    if (sortOptions.sortBy !== SortProperty.CREATED_AT) {
                      setSortOptions({
                        sortBy: SortProperty.CREATED_AT,
                        sortType: SortType.DESC,
                      });

                      return;
                    }

                    if (sortOptions.sortType === SortType.ASC) {
                      setSortOptions({
                        sortBy: SortProperty.CREATED_AT,
                        sortType: SortType.DESC,
                      });

                      return;
                    }

                    setSortOptions({
                      sortBy: SortProperty.CREATED_AT,
                      sortType: SortType.ASC,
                    });
                  }}
                >
                  <div>Created</div>
                  <div>
                    <img
                      src={
                        sortOptions.sortBy === SortProperty.CREATED_AT
                          ? sortOptions.sortType === SortType.ASC
                            ? sortAscChevronsImage
                            : sortDescChevronsImage
                          : sortNoneChevronsImage
                      }
                    />
                  </div>
                </div>,
                ,
                <div className="px-5 py-[10px] select-none"></div>,
              ]}
              rows={rows.map((row) => [
                <button
                  className="text-[#6366F1]"
                  onClick={() => navigate(`/tracker-template/${row.name}`)}
                >
                  {row.name}
                </button>,

                <div>
                  {format(new Date(row.createdAt), "MM/dd/yyyy HH:mm")}
                </div>,
                <Menu as="div" className="relative">
                  <Menu.Button>
                    <button className="px-[5px] py-[11px] rounded">
                      <img src={threeDotsIconImage} />
                    </button>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-[120] right-0 origin-top-right w-[200px] py-[4px] rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`block w-full text-left py-[5px] px-[12px] ${
                              active ? "bg-[#F3F4F6]" : ""
                            }`}
                            onClick={() =>
                              handleDuplicateTrackerTemplate(row.name)
                            }
                          >
                            Duplicate
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`block w-full text-left py-[5px] px-[12px] text-[#F43F5E] ${
                              active ? "bg-[#F3F4F6]" : ""
                            }`}
                            onClick={() => handleDeleteTrackerTemplate(row.id)}
                          >
                            Delete
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>,
              ])}
            />
          </>
        )}

        {pagesCount > 1 && (
          <div className="flex justify-center items-center">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={pagesCount}
            />
          </div>
        )}
      </div>

      <CreateTrackerTemplateModal
        isOpen={isCreateTrackerTemplateModalOpen}
        onClose={() => setIsCreateTrackerTemplateModalOpen(false)}
      />
    </div>
  );
};

export default TrackerTemplateTable;
