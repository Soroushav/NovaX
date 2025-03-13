import { HiStar } from "react-icons/hi2";
import Spinner from "../../ui/Spinner";
import { useTvShowReviews } from "./useTvShowReviews";

function MoviesReviews() {
  const { tvShowReviews, isLoading: isLoadingReviews } = useTvShowReviews();
  if (isLoadingReviews || !tvShowReviews) return <Spinner />;

  return (
    <>
      {/* Review */}
      <h2 className="text-stone-600 text-3xl ml-10 mt-5 font-semibold mb-4  pt-6">
        Review
      </h2>
      <div className="flex flex-col gap-3 px-11 border-b pb-6 border-stone-300">
        {tvShowReviews.length === 0 ? (
          <p className="text-stone-600 text-xl">
            There is no Reviews on this Tv Show
          </p>
        ) : (
          <div className="rounded-xl border shadow-stone-300/50 shadow-lg border-stone-300 h-60 overflow-hidden flex gap-5">
            <div className="ml-4 mt-4 flex flex-col gap-3">
              {/* Heading */}
              <div className="flex items-center gap-2">
                {/* Image */}
                <div>
                  <img
                    src={
                      tvShowReviews[0]?.author_details.avatar_path
                        ? `https://image.tmdb.org/t/p/original${tvShowReviews[0].author_details.avatar_path}`
                        : "/default-user.jpg"
                    }
                    alt={tvShowReviews[0]?.author}
                    className="h-14 w-14 rounded-full"
                  />
                </div>
                {/* Review Information */}
                <div className="flex flex-col gap-1">
                  {/* Name */}
                  <p className="text-lg text-stone-800">
                    A review by :{" "}
                    <span className="font-semibold text-stone-600">
                      {tvShowReviews[0]?.author}
                    </span>
                  </p>
                  {/* Rating and Date */}
                  <div className="flex gap-2 items-center">
                    <div className="flex items-center bg-indigo-600 w-16 p-1 rounded-lg">
                      <HiStar className="text-yellow-400" />
                      <p className="text-stone-100">
                        {tvShowReviews[0]?.author_details.rating * 10}%
                      </p>
                    </div>
                    <p className="text-stone-600 ">
                      Written by{" "}
                      <span className="font-medium text-stone-800">
                        {tvShowReviews[0]?.author}
                      </span>{" "}
                      on{" "}
                      <span>{tvShowReviews[0]?.updated_at.slice(0, 10)}</span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="w-[95%] px-2 text-stone-800 text-lg line-clamp-5">
                {tvShowReviews[0]?.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MoviesReviews;
