import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom";
import { getSearchTvShows } from "../../services/apiTvShows";

function useSearchResultsTvShows() {
    const [searchParams] = useSearchParams();
      const searchFilter = searchParams.get("search");
    const {data: resultTvShows, isLoading} = useQuery({
        queryFn: () => getSearchTvShows({query: searchFilter}),
        queryKey: [`series-${searchFilter}`]
    })
    return {resultTvShows, isLoading}
}

export default useSearchResultsTvShows
