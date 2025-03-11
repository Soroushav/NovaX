import { useEffect, useState } from "react";
import { useTvShowsUpdated } from "./useTvShowsUpdated";
import Spinner from "../../ui/Spinner";

const updatedTv = [
  {
    id: 1,
    title: "Severance",
    backdropImage: "movie-backdrop.jpg",
    seasons: "2",
    ratings: {
      imdb: 8.7,
      rottenTomatoes: 97,
    },
  },
  {
    id: 2,
    title: "Cobra Kai",
    backdropImage: "movie2-backdrop.jpg",
    seasons: "6",
    ratings: {
      imdb: 8.4,
      rottenTomatoes: 94,
    },
  },
  {
    id: 3,
    title: "The White Lotus",
    backdropImage: "movie3-backdrop.jpg",
    seasons: "3",
    ratings: {
      imdb: 8.0,
      rottenTomatoes: 93,
    },
  },
];
function DashboardLatestTvShow() {
  const { tvShows, isLoading } = useTvShowsUpdated();
  const [activeTvShow, setActiveTvShow] = useState(null);

  useEffect(() => {
    if (tvShows && tvShows.length > 0) {
      setActiveTvShow(tvShows[1]); // Set first TV show as active
    }
  }, [tvShows]); // Runs when tvShows updates

  // Ensure we don't access properties of `null` before data loads
  if (isLoading || !activeTvShow) {
    return <Spinner />;
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Section Title */}
      <p className="text-3xl mb-4 ml-2 text-stone-600 ">Updated Tv-Shows</p>

      {/* Main TV Show Card */}
      <div className="relative bg-red-200 h-[31rem] max-w-[1200px] rounded-3xl overflow-hidden mx-auto">
        {/* Background Image */}
        <img
          src={`https://image.tmdb.org/t/p/original${activeTvShow.backdrop_path}`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Episode XP Badge */}
        <div className="absolute top-10 left-14 bg-stone-300/50 px-4 py-2 rounded-2xl flex gap-2 z-10 backdrop-blur-xl text-stone-50">
          <span>10xp / episode</span>
        </div>

        {/* TV Show Details (Title, Seasons, Ratings) */}
        <div className="absolute z-10 top-48 left-14 text-stone-50 space-y-2">
          {/* TV Show Title */}
          <h2 className="text-5xl bg-stone-700/70 rounded-lg p-3 font-bold">
            {activeTvShow.name}
          </h2>
          {/* Genres */}
          {/* <p>{seasons} seasons</p> */}

          {/* Ratings Section */}
          <div className="flex gap-3">
            {/* IMDb Rating */}
            <div className="flex items-center gap-2">
              <img src="imdb-icon.png" alt="" className="h-8" />
              <p className="shadow text-st">{activeTvShow.vote_average}/10</p>
            </div>
            {/* Rotten Tomatoes Rating */}
            <div className="flex items-center gap-2">
              <img src="rt-icon.png" alt="" className="h-8" />
              <p>{activeTvShow.vote_average * 10}%</p>
            </div>
          </div>
        </div>

        {/* Action Buttons (Watch & Add to List) */}
        <div className="absolute bottom-20 left-14 flex gap-3">
          {/* Watch Button */}
          <button className="bg-indigo-200 px-6 py-3 rounded-2xl text-indigo-950 font-semibold hover:bg-indigo-300 transition duration-300 shadow-md shadow-indigo-900/65">
            Watch
          </button>
          {/* Add Button (+) */}
          <button className="backdrop-blur-md bg-gray-200/75 px-6 text-2xl py-3 rounded-2xl text-gray-950 font-semibold hover:bg-gray-300 transition duration-300 shadow-md shadow-gray-900/65">
            +
          </button>
        </div>

        {/* Thumbnail Navigation (Smaller preview images to switch TV shows) */}
        <div className="absolute h-20 w-[40%] bottom-20 right-14 flex items-center justify-end gap-2">
          {/* Thumbnail 1 */}
          <div
            className={`relative bg-green-200 w-[25%] h-[90%] rounded-xl cursor-pointer overflow-hidden 
              ${tvShows[1] === activeTvShow ? "border-stone-50 border-[2px] shadow-md shadow-stone-50/35" : ""}`}
            onClick={() => setActiveTvShow(tvShows[1])}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${tvShows[1].backdrop_path}`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail 2 */}
          <div
            className={`relative bg-green-200 w-[25%] h-[90%] rounded-xl cursor-pointer overflow-hidden 
              ${tvShows[2] === activeTvShow ? "border-stone-50 border-[2px] shadow-md shadow-stone-50/35" : ""}`}
            onClick={() => setActiveTvShow(tvShows[2])}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${tvShows[2].backdrop_path}`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Thumbnail 3 */}
          <div
            className={`relative bg-green-200 w-[25%] h-[90%] rounded-xl cursor-pointer overflow-hidden 
              ${tvShows[3] === activeTvShow ? "border-stone-50 border-[2px] shadow-md shadow-stone-50/35" : ""}`}
            onClick={() => setActiveTvShow(tvShows[3])}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${tvShows[3].backdrop_path}`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Active Thumbnail (Selected show) */}
          <div
            className={`relative bg-green-200 w-[25%] h-[90%] rounded-xl cursor-pointer overflow-hidden 
              ${tvShows[4] === activeTvShow ? "border-stone-50 border-[2px] shadow-md shadow-stone-50/35" : ""}`}
            onClick={() => setActiveTvShow(tvShows[7])}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${tvShows[7].backdrop_path}`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLatestTvShow;
