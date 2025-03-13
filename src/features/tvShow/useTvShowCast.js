import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getTvShowCast } from "../../services/apiTvShows";

export function useTvShowCast() {
    const {seriesId} = useParams();
    const {data: tvShowCast, isLoading} = useQuery({
        queryFn: () => getTvShowCast({tvShowId: seriesId}),
        queryKey: [`tvShowCast-${seriesId}`]
    })
    return {tvShowCast, isLoading}
}
