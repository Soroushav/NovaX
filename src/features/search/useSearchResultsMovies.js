import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../../services/apiMovies";

function useSearchResultsMovies() {
    const [searchParams] = useSearchParams();
      const searchFilter = searchParams.get("search");
    const {data: resultMovies, isLoading} = useQuery({
        queryFn: () => getSearchMovies({query: searchFilter}),
        queryKey: [`movies-${searchFilter}`]
    })
    return {resultMovies, isLoading}
}

export default useSearchResultsMovies
