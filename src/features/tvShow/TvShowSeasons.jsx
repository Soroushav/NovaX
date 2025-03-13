import { HiStar } from "react-icons/hi";
import Spinner from "../../ui/Spinner";
import { useTvShowDetails } from "./useTvShowDetails";

function TvShowSeasons() {
  const { tvShowDetails, isLoading } = useTvShowDetails();
  if (isLoading || !tvShowDetails) return <Spinner />;
  const {
    seasons,
  } = tvShowDetails;
  return (
    <>
      {/* Seasons */}
      <h2 className="text-stone-600 text-3xl ml-10 mt-5 font-semibold mb-4 border-t border-stone-300 pt-6">
        Seasons
      </h2>
      <div className="flex flex-col gap-3 px-11 border-b pb-6 border-stone-300">
        {seasons
          .filter((season) => season.name.toLowerCase() !== "specials")
          .map((season) => (
            <div
              className="rounded-xl border shadow-stone-300/50 shadow-lg border-stone-300 h-52 overflow-hidden flex gap-5"
              key={season.id}
            >
              <div className="h-full w-[120px] flex-shrink-0">
                <img
                  src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                  alt={`season${season.seasonNumber} Poster`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="py-5">
                <h2 className="text-stone-700 font-medium text-2xl">
                  Season {`${season.season_number}`}
                </h2>
                <div className="flex items-center gap-2 font-medium">
                  <div className="flex items-center bg-indigo-600 w-16 p-1 rounded-lg">
                    <HiStar className="text-yellow-400" />
                    <p className="text-stone-100">{season.vote_average}%</p>
                  </div>
                  <p className="text-stone-700">
                    {season.air_date?.split("-")[0]} • {season.episode_count}{" "}
                    Episodes
                  </p>
                </div>
                {/* <p className="mt-4 text-stone-500">{season.detail}</p> */}

                <p className="mt-4 max-w-[80%] text-stone-800 line-clamp-4">
                  {season.overview}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default TvShowSeasons;
