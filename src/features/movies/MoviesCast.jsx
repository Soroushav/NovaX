import CastSlider from "../../ui/CastSlider";
import Spinner from "../../ui/Spinner";
import { useMovieCast } from "./useMovieCast";

function MoviesCast() {
  const { moviesCast, isLoading: isLoadingCast } = useMovieCast();
  if (isLoadingCast || !moviesCast) return <Spinner />;
  return (
    <div>
      {/* Series Cast */}
      <h2 className="text-stone-600 text-3xl ml-10 mt-5 font-semibold mb-4">
        Movie Cast
      </h2>
      <div className="w-full overflow-hidden px-8">
        <CastSlider cast={moviesCast} />
      </div>
    </div>
  );
}

export default MoviesCast;
