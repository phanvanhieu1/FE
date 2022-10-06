import { Fragment, useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

interface PaginationProps {
  /**
   * Current page number
   */
  current: number;
  /**
   * Number of data items per page
   */
  pageSize: number;
  /**
   * Total number of data items
   */
  total: number;
  /**
   * On change page handler
   */
  onChange: (page: number) => void;
  /**
   * The class name of the container of the pagination
   */
  className?: string;

  // On change limit handler
  onLimitChange?: (limit: string) => void;
}

export const limitOpts = [
  { value: "6", label: "6 / page" },
  { value: "12", label: "12 / page" },
  { value: "24", label: "24 / page" },
  { value: "30", label: "30 / page" },
];

const Pagination = ({
  total,
  current = 1,
  pageSize,
  onChange,
  className,
  onLimitChange,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(current);
  const [currentLimit, setCurrentLimit] = useState(pageSize.toString());
  const totalPage = Math.ceil(total / pageSize);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
    onChange && onChange(page);
  };

  const prevPage = () => {
    currentPage !== 1 && onChangePage(currentPage - 1);
  };

  const nextPage = () => {
    currentPage !== totalPage &&
      totalPage !== 0 &&
      onChangePage(currentPage + 1);
  };

  let startPage = currentPage - 2;
  let endPage = currentPage + 2;

  if (startPage <= 0) {
    endPage -= startPage - 1;
    startPage = 1;
  }

  if (endPage > totalPage) {
    endPage = totalPage;
  }

  useEffect(() => {
    setCurrentPage(current);
    setCurrentLimit(String(pageSize));
  }, [current, pageSize]);

  return (
    <div
      className={`rounded-lg mt-5 w-full bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 ${
        className ? className : ""
      }`}
    >
      <div className=" flex-1 flex justify-between sm:hidden">
        <button
          onClick={prevPage}
          className=" relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="pg-paginate-next-btn ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="pg-paginate-current-page font-medium">
              {total === 0 ? 0 : (currentPage - 1) * pageSize + 1}
            </span>{" "}
            to{" "}
            <span className="pg-paginate-total-page font-medium">
              {Math.min(currentPage * pageSize, total)}
            </span>{" "}
            of{" "}
            <span className="pg-paginate-total-records font-medium">
              {total}
            </span>{" "}
            results
          </p>
        </div>

        <div className="flex items-center gap-2">
          <nav
            className="pg-paginate-pc relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={prevPage}
              className="pg-paginate-prev-btn relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <GrFormPrevious />
            </button>
            {startPage > 1 && (
              <Fragment>
                <Page
                  current={currentPage}
                  page={1}
                  onChangePage={onChangePage}
                />
                {startPage > 2 && <PageBreak />}
              </Fragment>
            )}
            {Array.from({ length: endPage - startPage + 1 }).map(
              (item, idx) => (
                <Page
                  key={idx}
                  page={idx + startPage}
                  current={currentPage}
                  onChangePage={onChangePage}
                />
              )
            )}
            {endPage < totalPage && (
              <Fragment>
                {endPage < totalPage - 1 && <PageBreak />}
                <Page
                  current={currentPage}
                  page={totalPage}
                  onChangePage={onChangePage}
                />
              </Fragment>
            )}
            <button
              onClick={nextPage}
              className="pg-paginate-next-btn relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <GrFormNext />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

const Page = ({
  current,
  page,
  onChangePage,
}: {
  current: number;
  page: number;
  onChangePage: (page: number) => void;
}) => {
  return current === page ? (
    <button
      aria-current="page"
      className={`pg-page-item pg-page-item-${page} z-10 bg-green-50 border-green-500 text-primaryColor relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
    >
      {page}
    </button>
  ) : (
    <button
      onClick={() => onChangePage(page)}
      className={`pg-page-item pg-page-item-${page} bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
    >
      {page}
    </button>
  );
};

const PageBreak = () => (
  <span className="pg-paginate-page-break relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
    ...
  </span>
);

export default Pagination;
