import { PAGE_SIZE } from "../utils/constants";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import SeriesCard from "./SeriesCard";

function Collections({ movie_list, series_list, countMovie, countSeries, collection }) {
  return (
    <div>
      <h2 className="px-20 my-5 text-stone-700 text-3xl">Movies</h2>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 px-20">
        {movie_list.length === 0 ? (
          <div>There is no movie to show here. add some to the list</div>
        ) : (
          movie_list
            ?.filter((movie) => movie.isMovie === true)
            .map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={{ ...movie, id: movie.movie_id }}
                index={index}
                removeButton={true}
                collection={collection}
              />
            ))
        )}
      </div>
      {countMovie / PAGE_SIZE > 1 ? (
        <Pagination count={countMovie} isMovie={true} />
      ) : (
        ""
      )}

      <h2 className="px-20 mb-5 text-stone-700 text-3xl mt-7">Series</h2>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 px-20">
        {series_list.length === 0 ? (
          <div>There is no series to show here. add some to the list</div>
        ) : (
          series_list
            ?.filter((movie) => movie.isMovie !== true)
            .map((movie, index) => (
              <SeriesCard
                key={movie.id}
                movie={{ ...movie, id: movie.movie_id }}
                index={index}
                removeButton={true}
                collection={collection}
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

export default Collections;
