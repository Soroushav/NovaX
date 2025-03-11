import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getTvShowCast } from "../../services/apiTvShows";

export function useTvShowCast() {
    const {moviesId} = useParams();
    const {data: tvShowCast, isLoading} = useQuery({
        queryFn: () => getTvShowCast({tvShowId: moviesId}),
        queryKey: [`tvShowCast-${moviesId}`]
    })
    return {tvShowCast, isLoading}
}
