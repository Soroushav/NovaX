import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { useSearchParams } from "react-router-dom";
import { getWatchlist } from "../../services/apiWatchlist";

export function useWatchlist() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const pageMovie = Number(searchParams.get("movie_page")) || 1;
  const pageSeries = Number(searchParams.get("series_page")) || 1;
  const { user } = useUser();
  const {
    data: { watchlist_movie, watchlist_series, countMovie, countSeries } = {},
    isLoading,
  } = useQuery({
    queryFn: () => getWatchlist({ user_id: user.id, pageMovie, pageSeries }),
    queryKey: [
      `watchlist-movie`,
      `${pageMovie}`,
      `watchlist-series`,
      `${pageSeries}`,
    ],
  });
  const PAGE_MOVIE_COUNT = Math.ceil(countMovie / pageMovie);
  const PAGE_SERIES_COUNT = Math.ceil(countSeries / pageSeries);
  if (pageMovie < PAGE_MOVIE_COUNT) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getWatchlist({
          user_id: user.id,
          pageMovie: pageMovie + 1,
          pageSeries,
        }),
      queryKey: [
        `watchlist-movie`,
        `${pageMovie + 1}`,
        `watchlist-series`,
        `${pageSeries}`,
      ],
    });
  }
  if (pageMovie > 1) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getWatchlist({
          user_id: user.id,
          pageMovie: pageMovie - 1,
          pageSeries,
        }),
      queryKey: [
        `watchlist-movie`,
        `${pageMovie - 1}`,
        `watchlist-series`,
        `${pageSeries}`,
      ],
    });
  }
  if (pageSeries < PAGE_SERIES_COUNT) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getWatchlist({
          user_id: user.id,
          pageMovie,
          pageSeries: pageSeries + 1,
        }),
      queryKey: [
        `watchlist-movie`,
        `${pageMovie}`,
        `watchlist-series`,
        `${pageSeries + 1}`,
      ],
    });
  }
  if (pageSeries > 1) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getWatchlist({
          user_id: user.id,
          pageMovie,
          pageSeries: pageSeries - 1,
        }),
      queryKey: [
        `watchlist-movie`,
        `${pageMovie}`,
        `watchlist-series`,
        `${pageSeries - 1}`,
      ],
    });
  }
  return {
    watchlist_movie,
    watchlist_series,
    countMovie,
    countSeries,
    isLoading,
  };
}
