import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMoviesDetails } from "../../services/apiMovies";

export function useMoviesDetails() {
  const { moviesId } = useParams();
  const { data: moviesDetails, isLoading } = useQuery({
    queryFn: () => getMoviesDetails({ movieId: moviesId }),
    queryKey: [`movie-${moviesId}`],
  });
  return { moviesDetails, isLoading };
}
