import { useState } from "react";

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
  const [updateActiveList, setUpdateActiveList] = useState(updatedTv[0]);
  const { title, seasons, ratings, backdropImage } = updateActiveList;
  return (
    <div className="max-w-[1200px] mx-auto">
    <p className="text-3xl mb-4 ml-2 text-stone-600 ">Updated Tv-Shows</p>
      <div className="relative bg-red-200 h-[31rem] max-w-[1200px] rounded-3xl overflow-hidden mx-auto">
        <img
          src={backdropImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute top-10 left-14 bg-stone-300/50 px-4 py-2 rounded-2xl flex gap-2 z-10 backdrop-blur-xl text-stone-50">
          <span>10xp / episode</span>
        </div>
        <div className="absolute z-10 top-56 left-14 text-stone-50 space-y-2">
          <h2 className="text-5xl font-bold">{title}</h2>
          <p>{seasons} seasons</p>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <img src="imdb-icon.png" alt="" className="h-8" />
              <p>{ratings.imdb}/10</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="rt-icon.png" alt="" className="h-8" />
              <p>{ratings.rottenTomatoes}%</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 left-14 flex gap-3">
          <button className=" bg-indigo-200 px-6 py-3 rounded-2xl text-indigo-950 font-semibold hover:bg-indigo-300 transition duration-300 shadow-md shadow-indigo-900/65">
            Watch
          </button>
          <button className=" backdrop-blur-md bg-gray-200/75 px-6 text-2xl py-3 rounded-2xl text-gray-950 font-semibold hover:bg-gray-300 transition duration-300 shadow-md shadow-gray-900/65">
            +
          </button>
        </div>

        <div className="absolute h-20 w-[40%] bottom-20 right-14 flex items-center justify-end gap-2">
          <div
            className="relative bg-green-200 w-[25%] h-[90%] rounded-xl cursor-pointer overflow-hidden"
            onClick={() => setUpdateActiveList(updatedTv[1])}
          >
            <img
              src="movie2-backdrop.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div
            className="relative bg-green-200 w-[25%] h-[90%] rounded-xl cursor-pointer overflow-hidden"
            onClick={() => setUpdateActiveList(updatedTv[2])}
          >
            <img
              src="movie3-backdrop.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div
            className="relative bg-green-200 w-[25%] h-[90%] rounded-xl cursor-pointer overflow-hidden border-stone-50 border-[2px] shadow-md shadow-stone-50/35"
            onClick={() => setUpdateActiveList(updatedTv[0])}
          >
            <img
              src="movie-backdrop.jpg"
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
