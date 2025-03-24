import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getWatchlist({ user_id, pageMovie, pageSeries }) {
  let queryMovie = supabase
    .from("watchlist")
    .select("*", { count: "exact" })
    .eq("user_id", user_id)
    .eq("isMovie", true);

  let querySeries = supabase
    .from("watchlist")
    .select("*", { count: "exact" })
    .eq("user_id", user_id)
    .eq("isMovie", false);

  if (pageMovie) {
    const fromMovie = (pageMovie - 1) * PAGE_SIZE;
    const toMovie = fromMovie + (PAGE_SIZE - 1);
    queryMovie = queryMovie.range(fromMovie, toMovie);
  }

  if (pageSeries) {
    const from = (pageSeries - 1) * PAGE_SIZE;
    const to = from + (PAGE_SIZE - 1);
    querySeries = querySeries.range(from, to);
  }

  const {
    data: watchlist_movie,
    count: countMovie,
    error: errorMovie,
  } = await queryMovie;
  const {
    data: watchlist_series,
    count: countSeries,
    error: errorSeries,
  } = await querySeries;

  if (errorMovie || errorSeries) {
    console.error(errorMovie || errorSeries);
    throw new Error("There has been an error getting watchlist!");
  }

  return {
    watchlist_movie,
    watchlist_series,
    countMovie,
    countSeries,
  };
}

export async function insertWatchlist({ user_id, added_item, isMovie }) {
  const { data, error } = await supabase
    .from("watchlist")
    .insert([{ ...added_item, isMovie, user_id }])
    .select();

  if (error) {
    console.error("Error inserting to watchlist:", error);
    throw new Error("There has been an error adding watchlist!");
  }

  return data;
}

export async function removeWatchlist({ user_id, remove_item_id, isMovie }) {
  const { data, error } = await supabase
    .from("watchlist")
    .delete()
    .eq("user_id", user_id)
    .eq("movie_id", remove_item_id)
    .eq("isMovie", isMovie);

  if (error) {
    console.error("Error deleting from watchlist:", error);
    throw new Error("There has been an error deleting watchlist movie!");
  }

  return data;
}
