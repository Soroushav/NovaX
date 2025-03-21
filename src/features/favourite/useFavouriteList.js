import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getFavourite } from "../../services/apiFavourite";
import { useUser } from "../authentication/useUser";
import { useSearchParams } from "react-router-dom";

export function useFavouriteList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const pageMovie = Number(searchParams.get("movie_page")) || 1;
  const pageSeries = Number(searchParams.get("series_page")) || 1;
  const { user } = useUser();
  const {
    data: { favourite_movie, favourite_series, countMovie, countSeries } = {},
    isLoading,
  } = useQuery({
    queryFn: () => getFavourite({ user_id: user.id, pageMovie, pageSeries }),
    queryKey: [
      `favourite-movie`,
      `${pageMovie}`,
      `favourite-series`,
      `${pageSeries}`,
    ],
  });
  const PAGE_MOVIE_COUNT = Math.ceil(countMovie / pageMovie);
  const PAGE_SERIES_COUNT = Math.ceil(countSeries / pageSeries);
  if (pageMovie < PAGE_MOVIE_COUNT) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getFavourite({
          user_id: user.id,
          pageMovie: pageMovie + 1,
          pageSeries,
        }),
      queryKey: [
        `favourite-movie`,
        `${pageMovie + 1}`,
        `favourite-series`,
        `${pageSeries}`,
      ],
    });
  }
  if (pageMovie > 1) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getFavourite({
          user_id: user.id,
          pageMovie: pageMovie - 1,
          pageSeries,
        }),
      queryKey: [
        `favourite-movie`,
        `${pageMovie - 1}`,
        `favourite-series`,
        `${pageSeries}`,
      ],
    });
  }
  if (pageSeries < PAGE_SERIES_COUNT) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getFavourite({
          user_id: user.id,
          pageMovie,
          pageSeries: pageSeries + 1,
        }),
      queryKey: [
        `favourite-movie`,
        `${pageMovie}`,
        `favourite-series`,
        `${pageSeries + 1}`,
      ],
    });
  }
  if (pageSeries > 1) {
    queryClient.prefetchQuery({
      queryFn: () =>
        getFavourite({
          user_id: user.id,
          pageMovie,
          pageSeries: pageSeries - 1,
        }),
      queryKey: [
        `favourite-movie`,
        `${pageMovie}`,
        `favourite-series`,
        `${pageSeries - 1}`,
      ],
    });
  }
  return {
    favourite_movie,
    favourite_series,
    countMovie,
    countSeries,
    isLoading,
  };
}
