import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useMovieRecommendations } from "./useMovieRecommendations";

function MoviesRecommendations() {
  const { movieRecommendations, isLoading: isLoadingRecoms } =
  useMovieRecommendations();
  const navigate = useNavigate();
console.log(movieRecommendations)
  if (isLoadingRecoms || !movieRecommendations) return <Spinner />;
  const recommendations = movieRecommendations.slice(0, 7);
  return (
    <>
      {/* Recommendations */}
      <h2 className="text-stone-600 text-3xl ml-10 mt-5 font-semibold mb-4  pt-6">
        Recommendations
      </h2>
      <div className="h-80 px-10 overflow-hidden">
        <ul className="h-full flex items-center gap-4 overflow-x-auto">
          {recommendations.map((movie) => (
            <li
              className="cursor-pointer h-4/5 w-[400px] flex-shrink-0 flex flex-col rounded-md overflow-hidden"
              onClick={() => navigate(`/movies/${movie.id}`)}
              key={movie.id}
            >
              <div className="h-5/6">
                <img
                  src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`: `https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.name}
                  className="w-full h-full object-cover"
                />
                <p className="text-center mt-1 text-stone-700 text-lg font-semibold">
                  {movie.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MoviesRecommendations;
