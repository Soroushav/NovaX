import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvShowRecommendations } from "../../services/apiTvShows";

export function useTvShowRecommendations() {
  const { moviesId } = useParams();
  const { data: tvShowRecommendations, isLoading } = useQuery({
    queryFn: () => getTvShowRecommendations({ tvShowId: moviesId }),
    queryKey: [`tvShowRecommendations-${moviesId}`],
  });
  return { tvShowRecommendations, isLoading };
}
