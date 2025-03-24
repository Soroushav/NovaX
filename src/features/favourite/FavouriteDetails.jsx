import Spinner from "../../ui/Spinner";
import { useFavouriteList } from "./useFavouriteList";
import Collections from "../../ui/Collections";
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
    <Collections
      movie_list={favourite_movie}
      series_list={favourite_series}
      countMovie={countMovie}
      countSeries={countSeries}
      collection={"favourite"}
    />
  );
}

export default FavouriteDetails;
