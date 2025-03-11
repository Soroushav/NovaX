import { useQuery } from "@tanstack/react-query";
import { getTvShowsTrending } from "../../services/apiTvShows";

export function useTvShowsTrending() {
  const { data: tvShowsTrending, isLoading } = useQuery({
    queryFn: () => getTvShowsTrending(),
    queryKey: ["tvShows-Trending"],
  });
  return { tvShowsTrending, isLoading };
}
