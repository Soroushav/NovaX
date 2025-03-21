import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getFavourite({ user_id, pageMovie, pageSeries }) {
  let queryMovie = supabase
    .from("favourite")
    .select("*", { count: "exact" })
    .eq("user_id", user_id)
    .eq("isMovie", true);

  let querySeries = supabase
    .from("favourite")
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
    data: favourite_movie,
    count: countMovie,
    error: errorMovie,
  } = await queryMovie;
  const {
    data: favourite_series,
    count: countSeries,
    error: errorSeries,
  } = await querySeries;

  if (errorMovie || errorSeries) {
    console.error(errorMovie || errorSeries);
    throw new Error("There has been an error getting favourite movies!");
  }

  return {
    favourite_movie,
    favourite_series,
    countMovie,
    countSeries,
  };
}

export async function insertFavourite({ user_id, added_item, isMovie }) {
  const { data, error } = await supabase
    .from("favourite")
    .insert([{ ...added_item, isMovie, user_id }])
    .select();

  if (error) {
    console.error("Error inserting favourite:", error);
    throw new Error("There has been an error adding favourite movies!");
  }

  return data;
}

export async function removeFavourite({ user_id, remove_item_id, isMovie }) {
  const { data, error } = await supabase
    .from("favourite")
    .delete()
    .eq("user_id", user_id)
    .eq("movie_id", remove_item_id)
    .eq("isMovie", isMovie);

  if (error) {
    console.error("Error deleting from favourite:", error);
    throw new Error("There has been an error deleting favourite movies!");
  }

  return data;
}
