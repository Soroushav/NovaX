import { useNavigate, useSearchParams } from "react-router-dom";
import useSearchResultsTvShows from "./useSearchResultsTvShows";
import Spinner from "../../ui/Spinner";
import useSearchResultsMovies from "./useSearchResultsMovies";

function SearchDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchFilter = searchParams.get("search");
  const { resultTvShows, isLoading: isLoadingTvShow } =
    useSearchResultsTvShows();
  const { resultMovies, isLoading: isLoadingMovies } = useSearchResultsMovies();
  if(isLoadingTvShow && !resultTvShows) return <Spinner/>
  if(isLoadingTvShow && !resultTvShows) return <Spinner/>
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
          {resultMovies.map((movie, index) => (
            <div
              key={index}
              className="bg-stone-50/10 border-2 border-stone-300 rounded-md h-40 flex overflow-hidden shadow-xl cursor-pointer hover:bg-stone-50/40"
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              <div className="w-1/4 h-full flex-shrink-0">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-stone-700 font-semibold text-xl">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <img src="imdb-icon.png" alt="" className="h-6" />
                  <p className="text-stone-700">
                    {movie.vote_average.toFixed(1)}/10
                  </p>
                </div>
                <p className="line-clamp-3 text-stone-700">{movie.overview}</p>
              </div>
            </div>
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
            <div
              key={index}
              className="bg-stone-50/10 border-2 border-stone-300 rounded-md h-40 flex overflow-hidden shadow-xl hover:bg-stone-50/40 cursor-pointer"
              onClick={() => navigate(`/series/${movie.id}`)}
            >
              <div className="w-1/4 h-full flex-shrink-0">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-stone-700 font-semibold text-xl">
                  {movie.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <img src="imdb-icon.png" alt="" className="h-6" />
                  <p className="text-stone-700">
                    {movie.vote_average.toFixed(1)}/10
                  </p>
                </div>
                <p className="line-clamp-3 text-stone-700">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchDetails;
