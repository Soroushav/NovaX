import MovieCard from "../../ui/MovieCard";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { useFavouriteList } from "./useFavouriteList";

function FavouriteDetails() {
  const {
    favourite: {
      favourite_movie,
      favourite_series,
      countMovie,
      countSeries,
    } = {},
    isLoading,
  } = useFavouriteList();
  if (isLoading) return <Spinner />;
  return (
    <div>
      <h2 className="px-20 my-5 text-stone-700 text-3xl">Favourite Movies</h2>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 px-20">
        {favourite_movie.length === 0 ? (
          <div>There is no movie to show here. add some to favourites</div>
        ) : (
          favourite_movie
            ?.filter((movie) => movie.isMovie === true)
            .map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))
        )}
      </div>
      <Pagination count={countMovie} isMovie={true} />

      <h2 className="px-20 mb-5 text-stone-700 text-3xl mt-7">
        Favourite Series
      </h2>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 px-20">
        {favourite_movie.length === 0 ? (
          <div>There is no series to show here. add some to favourites</div>
        ) : (
          favourite_series
            ?.filter((movie) => movie.isMovie !== true)
            .map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))
        )}
      </div>
      <Pagination count={countSeries} isMovie={false} />
    </div>
  );
}

export default FavouriteDetails;
