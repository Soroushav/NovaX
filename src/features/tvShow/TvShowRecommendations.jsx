import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useTvShowRecommendations } from "./useTvShowRecommendations";

function TvShowRecommendations() {
  const { tvShowRecommendations, isLoading: isLoadingRecoms } =
  useTvShowRecommendations();
  const navigate = useNavigate();

  if (isLoadingRecoms || !tvShowRecommendations) return <Spinner />;
  const recommendations = tvShowRecommendations.slice(0, 7);
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
              onClick={() => navigate(`/series/${movie.id}`)}
              key={movie.id}
            >
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.name}
                  className="w-full h-5/6 object-cover"
                />
                <p className="text-center mt-1 text-stone-700 text-lg font-semibold">
                  {movie.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TvShowRecommendations;
