const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2FmZjdiMDkyZjEyNTc5MDE3ODk2YzFhNWQxMWE0MCIsIm5iZiI6MTc0MDgyMTA5NC42OTUwMDAyLCJzdWIiOiI2N2MyZDI2NmMyZTYzMzc1NWI2ZGQ4OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aNsRv1gY77RK6DDLVSF-AY0vpwPseo_ZNVzeaLZXa-o",
};

export async function getTvShows() {
  const url =
    "https://api.themoviedb.org/3/discover/tv?air_date.gte=2025-03-07&include_adult=true&include_null_first_air_dates=false&language=en-US&sort_by=vote_average.desc&vote_average.gte=8&vote_count.gte=2000";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2FmZjdiMDkyZjEyNTc5MDE3ODk2YzFhNWQxMWE0MCIsIm5iZiI6MTc0MDgyMTA5NC42OTUwMDAyLCJzdWIiOiI2N2MyZDI2NmMyZTYzMzc1NWI2ZGQ4OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aNsRv1gY77RK6DDLVSF-AY0vpwPseo_ZNVzeaLZXa-o",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data.results);
    return data.results; // ✅ Correctly returning the data
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null; // Handle errors gracefully
  }
}
