import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvShowRecommendations } from "../../services/apiTvShows";

export function useTvShowRecommendations() {
  const { seriesId } = useParams();
  const { data: tvShowRecommendations, isLoading } = useQuery({
    queryFn: () => getTvShowRecommendations({ tvShowId: seriesId }),
    queryKey: [`tvShowRecommendations-${seriesId}`],
  });
  return { tvShowRecommendations, isLoading };
}
