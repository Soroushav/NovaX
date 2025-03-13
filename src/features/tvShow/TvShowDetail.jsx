import TvShowReviews from "./TvShowReviews";
import TvShowCast from "./TvShowCast";
import TvShowDetailBox from "./TvShowDetailBox";
import TvShowRecommendations from "./TvShowRecommendations";
import TvShowSeasons from "./TvShowSeasons";

function TvShowDetail() {
  return (
    <div className="relative">
      <TvShowDetailBox />
      <TvShowCast />
      <TvShowSeasons />
      <TvShowReviews />
      <TvShowRecommendations />
    </div>
  );
}

export default TvShowDetail;
