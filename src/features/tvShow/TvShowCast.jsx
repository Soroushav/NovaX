import CastSlider from "../../ui/CastSlider";
import Spinner from "../../ui/Spinner";
import { useTvShowCast } from "./useTvShowCast";

function TvShowCast() {
  const { tvShowCast, isLoading: isLoadingCast } = useTvShowCast();
  if (isLoadingCast || !tvShowCast) return <Spinner />;
  return (
    <div>
      {/* Series Cast */}
      <h2 className="text-stone-600 text-3xl ml-10 mt-5 font-semibold mb-4">
        Series Cast
      </h2>
      <div className="w-full overflow-hidden px-8">
        <CastSlider cast={tvShowCast} />
      </div>
    </div>
  );
}

export default TvShowCast;
