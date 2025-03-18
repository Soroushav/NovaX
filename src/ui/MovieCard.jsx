import { useNavigate } from "react-router-dom";

function MovieCard({movie, index}) {
  const navigate = useNavigate();
    return (
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
        <h3 className="text-stone-700 font-semibold text-xl">{movie.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <img src="imdb-icon.png" alt="" className="h-6" />
          <p className="text-stone-700">{movie.vote_average.toFixed(1)}/10</p>
        </div>
        <p className="line-clamp-3 text-stone-700">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
