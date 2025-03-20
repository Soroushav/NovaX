import { useQuery } from "@tanstack/react-query";
import { getFavourite } from "../../services/apiFavourite";
import { useUser } from "../authentication/useUser";
import { useSearchParams } from "react-router-dom";

export function useFavouriteList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageMovie = Number(searchParams.get("movie_page")) || 1;
  const pageSeries = Number(searchParams.get("series_page")) || 1;
  const { user } = useUser();
  const { data: favourite, isLoading } = useQuery({
    queryFn: () => getFavourite({ user_id: user.id, pageMovie, pageSeries }),
    queryKey: [
      `favourite-movie`,
      `${pageMovie}`,
      `favourite-series`,
      `${pageSeries}`,
    ],
  });
  return { favourite, isLoading };
}
