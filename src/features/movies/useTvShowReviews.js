import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvShowReviews } from "../../services/apiTvShows";

export function useTvShowReviews() {
  const { moviesId } = useParams();
  const { data: tvShowReviews, isLoading } = useQuery({
    queryFn: () => getTvShowReviews({ tvShowId: moviesId }),
    queryKey: [`tvShowRevies-${moviesId}`],
  });
  return { tvShowReviews, isLoading };
}
