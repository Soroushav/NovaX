import { useNavigate } from "react-router-dom";
import { useFavouriteRemoveItem } from "../features/favourite/useFavouriteListRemoveItem";

function SeriesCard({ movie, index, removeButton }) {
  const navigate = useNavigate();
  const { removeFavourite, isLoading } = useFavouriteRemoveItem();
  return (
    <div
      key={index}
      className="bg-stone-50/10 border-2 border-stone-300 rounded-md h-40 flex overflow-hidden shadow-xl hover:bg-stone-50/40 cursor-pointer relative"
      onClick={() => navigate(`/series/${movie.id}`)}
    >
      {isLoading ? (
        <div className="w-full h-full absolute top-0 left-0 backdrop-blur-lg"></div>
      ) : (
        ""
      )}
      {removeButton ? (
        <button
          className="z-20 w-5 h-5 bg-indigo-600 text-stone-200 rounded-full absolute right-0 flex justify-center items-center p-1"
          onClick={(e) => {
            e.stopPropagation();
            removeFavourite({ remove_item_id: movie.id, isMovie: false });
          }}
        >
          X
        </button>
      ) : (
        ""
      )}
      <div className="w-1/4 h-full flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-5 py-4">
        <h3 className="text-stone-700 font-semibold text-xl">{movie.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <img src="imdb-icon.png" alt="" className="h-6" />
          <p className="text-stone-700">{movie.vote_average.toFixed(1)}/10</p>
        </div>
        <p className="line-clamp-3 text-stone-700">{movie.overview}</p>
      </div>
    </div>
  );
}

export default SeriesCard;
