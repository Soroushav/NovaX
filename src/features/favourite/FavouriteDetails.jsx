import Spinner from "../../ui/Spinner";
import { useFavouriteList } from "./useFavouriteList";

function FavouriteDetails() {
  const { favourite, isLoading } = useFavouriteList();
  if (isLoading) return <Spinner />;
  const favouriteList = favourite[0].favourite_list.favourite;

  if (favouriteList.length === 0) return <div>There is nothing to show</div>;

    
  return <div>Your favorite list is here bitch</div>;
}

export default FavouriteDetails;
