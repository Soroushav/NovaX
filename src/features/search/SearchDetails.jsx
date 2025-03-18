import { useSearchParams } from "react-router-dom";
import useSearchResultsTvShows from "./useSearchResultsTvShows";
import Spinner from "../../ui/Spinner";
import useSearchResultsMovies from "./useSearchResultsMovies";
import MovieCard from "../../ui/MovieCard";
import SeriesCard from "../../ui/SeriesCard";

function SearchDetails() {
  const [searchParams] = useSearchParams();
  const searchFilter = searchParams.get("search");
  const { resultTvShows, isLoading: isLoadingTvShow } =
    useSearchResultsTvShows();
  const { resultMovies, isLoading: isLoadingMovies } = useSearchResultsMovies();
  if (isLoadingTvShow && !resultTvShows) return <Spinner />;
  if (isLoadingTvShow && !resultTvShows) return <Spinner />;
  return (
    <div className="py-2 px-10 w-full h-full">
      <h1 className=" text-stone-700 text-2xl">
        Resultes based on "{searchFilter}"
      </h1>

      <h2 className="text-stone-800 text-2xl my-4 border-y-2 py-1 border-stone-400 px-3">
        Movies
      </h2>
      {isLoadingTvShow || !resultTvShows ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 ">
          {resultMovies?.map((movie, index) => (
            <MovieCard movie={movie} index={index} />
          ))}
        </div>
      )}
      <h2 className="text-stone-800 text-2xl my-4 border-y-2 py-1 border-stone-400 px-3">
        Series
      </h2>
      {isLoadingMovies || !resultMovies ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 ">
          {resultTvShows.map((movie, index) => (
            <SeriesCard movie={movie} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchDetails;
