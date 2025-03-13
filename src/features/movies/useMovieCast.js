import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { getMovieCast } from "../../services/apiMovies";

export function useMovieCast() {
    const {moviesId} = useParams();
    const {data: moviesCast, isLoading} = useQuery({
        queryFn: () => getMovieCast({movieId: moviesId}),
        queryKey: [`MovieCast-${moviesId}`]
    })
    return {moviesCast, isLoading}
}
