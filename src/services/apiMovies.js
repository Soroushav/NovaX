const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2FmZjdiMDkyZjEyNTc5MDE3ODk2YzFhNWQxMWE0MCIsIm5iZiI6MTc0MDgyMTA5NC42OTUwMDAyLCJzdWIiOiI2N2MyZDI2NmMyZTYzMzc1NWI2ZGQ4OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aNsRv1gY77RK6DDLVSF-AY0vpwPseo_ZNVzeaLZXa-o",
};

export async function getMovies() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?air_date.gte=2025-03-07&include_adult=true&include_null_first_air_dates=false&language=en-US&sort_by=vote_average.desc&vote_average.gte=8&vote_count.gte=2000";

  const options = {
    method: "GET",
    headers: headers,
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
export async function getMoviesTrending() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
  const options = {
    method: "GET",
    headers: headers,
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results.slice(0, 12);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
}

export async function getMoviesDetails({ movieId }) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const options = {
    method: "GET",
    headers: headers,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}

export async function getMovieCast({ movieId }) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const options = {
    method: "GET",
    headers: headers,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.cast.slice(0, 15);
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    return null;
  }
}

export async function getMovieReviews({ movieId }) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const options = {
    method: "GET",
    headers: headers,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    return null;
  }
}

export async function getMovieRecommendations({ movieId }) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: headers,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie recommendations:", error);
    return null;
  }
}
export async function getSearchMovies({ query }) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: headers,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const sortedMovies = data.results
      .sort((a, b) => b.vote_count - a.vote_count)
      .slice(0, 7)
      .sort((a, b) => b.vote_average - a.vote_average);
    return sortedMovies;
  } catch (error) {
    console.error("Error fetching results:", error);
    return null;
  }
}
