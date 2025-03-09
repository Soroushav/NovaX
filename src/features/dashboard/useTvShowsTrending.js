import { useQuery } from "@tanstack/react-query";
import { getTvShows } from "../../services/apiTvShows";

export function useTv() {
  const { data: tvShows, isLoading } = useQuery({
    queryFn: () => getTvShows(),
    queryKey: ["tvShows"],
  });
  return { tvShows, isLoading };
}
