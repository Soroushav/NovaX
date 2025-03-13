import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvShowsDetails } from "../../services/apiTvShows";

export function useTvShowDetails() {
  const { seriesId } = useParams();
  const { data: tvShowDetails, isLoading } = useQuery({
    queryFn: () => getTvShowsDetails({ tvShowId: seriesId }),
    queryKey: [`tvShow-[${seriesId}]`],
  });
  return { tvShowDetails, isLoading };
}
