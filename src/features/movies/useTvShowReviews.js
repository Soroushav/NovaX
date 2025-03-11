import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvShowReviews } from "../../services/apiTvShows";

export function useTvShowReviews() {
  const { moviesId } = useParams();
  const { data: tvShowRevies, isLoading } = useQuery({
    queryFn: () => getTvShowReviews({ tvShowId: moviesId }),
    queryKey: [`tvShowRevies-${moviesId}`],
  });
  return { tvShowRevies, isLoading };
}
