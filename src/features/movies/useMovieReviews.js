import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../services/apiMovies";

export function useMovieReviews() {
  const { moviesId } = useParams();
  const { data: movieReviews, isLoading } = useQuery({
    queryFn: () => getMovieReviews({ movieId: moviesId }),
    queryKey: [`movieReviews-${moviesId}`],
  });
  return { movieReviews, isLoading };
}
