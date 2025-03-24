import Collections from "../../ui/Collections";
import Spinner from "../../ui/Spinner";
import { useWatchlist } from "./useWatchlist";

function WatchlistDetails() {
  const {
    watchlist_movie,
    watchlist_series,
    countMovie,
    countSeries,
    isLoading,
  } = useWatchlist();
  if (isLoading) return <Spinner />;
  return (
    <Collections
      movie_list={watchlist_movie}
      series_list={watchlist_series}
      countMovie={countMovie}
      countSeries={countSeries}
      collection={"watchlist"}
    />
  );
}

export default WatchlistDetails;
