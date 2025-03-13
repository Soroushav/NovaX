import { useQuery } from "@tanstack/react-query";
import { getMoviesTrending } from "../../services/apiMovies";

export function useMoviesTrending() {
  const { data: moviesTrending, isLoading } = useQuery({
    queryFn: () => getMoviesTrending(),
    queryKey: ["movies-Trending"],
  });
  return { moviesTrending, isLoading };
}
