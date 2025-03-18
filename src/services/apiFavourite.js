import supabase from "./supabase";

export async function getFavourite({ user_id }) {
  const { data: favourite, error } = await supabase
    .from("favourite")
    .select("*")
    .eq("user_id", user_id);
  if (error) {
    console.error(error);
    throw new Error("There has been an error getting favourite movies!");
  }
  return favourite;
}

export async function insertFavourite({ user_id, added_item, isMovie }) {
    console.log({...added_item, isMovie})
  const { data, error } = await supabase
    .from("favourite")
    .insert([
        {...added_item, isMovie, user_id},
      ])
    .select();

  if (error) {
    console.error("Error inserting favourite:", error);
    throw new Error("There has been an error adding favourite movies!");
  }

  return data;
}
