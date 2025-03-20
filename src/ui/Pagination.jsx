import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
function Pagination({ count, isMovie }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageMovie = searchParams.get("movie_page") || 1;
  const pageSeries = searchParams.get("series_page") || 1;
  const numPages = Math.ceil(count / PAGE_SIZE);

  function handleNext() {
    const newPage = isMovie
      ? Number(pageMovie) === numPages
        ? numPages
        : Number(pageMovie) + 1
      : Number(pageSeries) === numPages
      ? numPages
      : Number(pageSeries) + 1;
    searchParams.set(`${isMovie ? "movie_page" : "series_page"}`, newPage);
    setSearchParams(searchParams);
  }
  function handlePrev() {
    const newPage = isMovie
      ? Number(pageMovie) === 1
        ? 1
        : Number(pageMovie) - 1
      : Number(pageSeries) === 1
      ? 1
      : Number(pageSeries) - 1;
    searchParams.set(`${isMovie ? "movie_page" : "series_page"}`, newPage);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <div
        onClick={handlePrev}
        className="flex items-center text-stone-700 text-lg px-4 border border-stone-200 border-3 rounded-md cursor-pointer hover:bg-indigo-200 hover:text-stone-700 transition duration-300"
      >
        <HiChevronLeft />
        <span>Previous</span>
      </div>
      <div className="flex items-center gap-1">
        <p className="bg-indigo-100 px-2 rounded-full text-stone-700">
          {(isMovie ? pageMovie - 1 : pageSeries - 1) * PAGE_SIZE + 1}
        </p>
        <span> / </span>
        <p className="px-2  text-stone-700">{count}</p>
      </div>
      <div
        onClick={handleNext}
        className="flex items-center text-stone-700 text-lg px-4 border border-stone-200 border-3 rounded-md cursor-pointer hover:bg-indigo-200 hover:text-stone-700 transition duration-300"
      >
        <span>Next</span>
        <HiChevronRight />
      </div>
    </div>
  );
}

export default Pagination;
