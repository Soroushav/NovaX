import MoviesDetailBox from "./MoviesDetailBox";
import MoviesCast from "./MoviesCast";
import MoviesReviews from "./MoviesReviews";
import MoviesRecommendations from "./MoviesRecommendations";

function MoviesDetail() {
  return (
    <div className="relative">
      <MoviesDetailBox />
      <MoviesCast />
      <MoviesReviews />
      <MoviesRecommendations />
    </div>
  );
}

export default MoviesDetail;
