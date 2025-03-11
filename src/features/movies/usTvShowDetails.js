import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTvShowsDetails } from "../../services/apiTvShows";

export function useTvShowDetails() {
  const { moviesId } = useParams();
  const { data: tvShowDetails, isLoading } = useQuery({
    queryFn: () => getTvShowsDetails({ tvShowId: moviesId }),
    queryKey: [`tvShow-[${moviesId}]`],
  });
  return { tvShowDetails, isLoading };
}
