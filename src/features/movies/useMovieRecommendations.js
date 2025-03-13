import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMovieRecommendations } from "../../services/apiMovies";

export function useMovieRecommendations() {
  const { moviesId } = useParams();
  const { data: movieRecommendations, isLoading } = useQuery({
    queryFn: () => getMovieRecommendations({ movieId: moviesId }),
    queryKey: [`movieRecommendations-${moviesId}`],
  });
  return { movieRecommendations, isLoading };
}
