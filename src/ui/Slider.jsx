import { HiBookmark, HiHeart, HiOutlineSquaresPlus } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import SliderSlick from "react-slick";
import { useFavouriteListAddItem } from "../features/favourite/useFavouriteListAddItem";
import { useWatchlistAddItem } from "../features/watchlist/useWatchlistAddItem";

function Slider({ movies, slides, type }) {
  const { insertFavourite, isLoading: isLoadingFavourite } =
    useFavouriteListAddItem();

  const { insertWatchlist, isLoading: isLoadingWatchlist } =
    useWatchlistAddItem();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
  };
  const navigate = useNavigate();
  const urlClick = type === "movie" ? "movies" : "series";
  return (
    <>
      {/* Slick Slider Component */}
      <SliderSlick {...settings}>
        {/* Loop through the movies array and render each movie */}
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/${urlClick}/${movie.id}`)}
          >
            {/* Movie Card Container */}
            <div className="h-60 bg-stone-900 rounded-3xl overflow-hidden relative mx-2">
              {/* Hover Effect: Dark Overlay with Blur */}

              <div className="absolute inset-0 bg-black/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Hover Effect: Action Buttons (Bookmark, Like, Add) */}
              <div className="absolute flex flex-col items-center justify-center text-3xl gap-2 text-indigo-300 w-full h-full opacity-0 group-hover:opacity-100 transition duration-300">
                {/* Bookmark Button */}
                <button className="transition duration-300 hover:text-stone-500">
                  <HiBookmark />
                </button>
                {/* Like Button */}
                <button
                  className="transition duration-300 hover:text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    insertFavourite({
                      added_item: {
                        movie_id: movie.id,
                        title: movie.title,
                        backdrop_path: movie.backdrop_path,
                        poster_path: movie.poster_path,
                        overview: movie.overview,
                        vote_average: movie.vote_average,
                      },
                      isMovie: type === "movie",
                    });
                  }}
                >
                  <HiHeart />
                </button>
                {/* Add to List Button */}
                <button
                  className="transition duration-300 hover:text-yellow-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    insertWatchlist({
                      added_item: {
                        movie_id: movie.id,
                        title: movie.title,
                        backdrop_path: movie.backdrop_path,
                        poster_path: movie.poster_path,
                        overview: movie.overview,
                        vote_average: movie.vote_average,
                      },
                      isMovie: type === "movie",
                    });
                  }}
                >
                  <HiOutlineSquaresPlus />
                </button>
              </div>

              {/* Movie Image */}
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Movie Title */}
            <p className="text-center mt-2 text-lg font-semibold">
              {movie.title || movie.name}
            </p>
          </div>
        ))}
      </SliderSlick>
    </>
  );
}

export default Slider;
