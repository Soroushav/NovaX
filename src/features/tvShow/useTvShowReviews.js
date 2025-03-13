import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvShowReviews } from "../../services/apiTvShows";

export function useTvShowReviews() {
  const { seriesId } = useParams();
  const { data: tvShowReviews, isLoading } = useQuery({
    queryFn: () => getTvShowReviews({ tvShowId: seriesId }),
    queryKey: [`tvShowReviews-${seriesId}`],
  });
  return { tvShowReviews, isLoading };
}
