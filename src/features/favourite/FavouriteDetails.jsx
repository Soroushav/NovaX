import MovieCard from "../../ui/MovieCard";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { PAGE_SIZE } from "../../utils/constants";
import { useFavouriteList } from "./useFavouriteList";
import SeriesCard from "../../ui/SeriesCard";
function FavouriteDetails() {
  const {
    favourite_movie,
    favourite_series,
    countMovie,
    countSeries,
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
              <MovieCard
                key={movie.id}
                movie={{ ...movie, id: movie.movie_id }}
                index={index}
                removeButton={true}
              />
            ))
        )}
      </div>
      {countMovie / PAGE_SIZE > 1 ? (
        <Pagination count={countMovie} isMovie={true} />
      ) : (
        ""
      )}

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
              <SeriesCard
                key={movie.id}
                movie={{ ...movie, id: movie.movie_id }}
                index={index}
                removeButton={true}
              />
            ))
        )}
      </div>
      {countSeries / PAGE_SIZE > 1 ? (
        <Pagination count={countSeries} isMovie={false} />
      ) : (
        ""
      )}
    </div>
  );
}

export default FavouriteDetails;
