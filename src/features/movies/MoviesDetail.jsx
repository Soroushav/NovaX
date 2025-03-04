import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import { HiBookmark, HiHeart } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";
const updatedTrending = [
  {
    id: 1,
    title: "Severance",
    backdropImage: "/movie-backdrop.jpg",
    seasons: "2",
    ratings: {
      imdb: 8.7,
      rottenTomatoes: 97,
    },
  },
  {
    id: 2,
    title: "Cobra Kai",
    backdropImage: "/movie2-backdrop.jpg",
    seasons: "6",
    ratings: {
      imdb: 8.4,
      rottenTomatoes: 94,
    },
  },
  {
    id: 3,
    title: "The White Lotus",
    backdropImage: "/movie3-backdrop.jpg",
    seasons: "3",
    ratings: {
      imdb: 8.0,
      rottenTomatoes: 93,
    },
  },
  {
    id: 4,
    title: "Anora",
    backdropImage: "/movie4-backdrop.jpg",
    seasons: 2,
    ratings: {
      imdb: 7.7,
      rottenTomatoes: 93,
    },
  },
  {
    id: 5,
    title: "Mickey 17",
    backdropImage: "/movie5-backdrop.jpg",
    seasons: 2,
    ratings: {
      imdb: 7.4,
      rottenTomatoes: 88,
    },
  },
  {
    id: 6,
    title: "Solo Leveling",
    backdropImage: "/movie6-backdrop.jpg",
    seasons: "2",
    ratings: {
      imdb: 8.4,
      rottenTomatoes: 100,
    },
  },
];
function MoviesDetail() {
  const { moviesId } = useParams();
  const { id, title, backdropImage, seasons, ratings } = updatedTrending.find(
    (t) => t.id === Number(moviesId)
  );
  return (
    <div className="relative">
      <div className="w-full bg-red-300 h-[600px] relative flex items-center justify-start gap-10 px-20">
        {/* Main Image */}
        <img
          src={backdropImage}
          alt={title}
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        {/* Background Blur */}
        <div className="absolute inset-0 bg-indigo-500/30 backdrop-blur-xl"></div>

        {/* Movie Card */}
        <div className="w-[310px] h-3/4 rounded-2xl overflow-hidden relative z-10 flex-shrink-0">
          <img
            src={backdropImage}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Streaming Info */}
          <div className="bg-indigo-400 h-1/6 w-full absolute bottom-0">
            <div className="flex gap-2 items-center justify-center top-1/2 relative -translate-y-1/2 cursor-pointer">
              <div className="w-10 h-10">
                <img src="/apple-logo.png" alt="" className="h-full w-full" />
              </div>
              <div>
                <p className="text-stone-800 font-bold">Now Streaming</p>
                <p className="text-stone-200 font-bold">Watch now</p>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Details */}
        <div className="relative z-10 flex flex-col justify-start h-2/3 mt-2">
          {/* Movie Title */}
          <div className="font-semibold text-4xl text-stone-100">
            <h1>
              {title}{" "}
              <span className="font-normal text-3xl text-stone-300">
                (2022)
              </span>
            </h1>
          </div>
          {/* Movie information */}
          <div>
            <p className="text-stone-200 drop-shadow-[0_1.2px_1.2px]">
              Drama, Mystery, Sci-Fi & Fantasy
            </p>
          </div>
          {/* Movie actions */}
          <div className="mt-4 flex gap-2">
            <Button shape="circle">
              <HiListBullet />
            </Button>
            <Button shape="circle">
              <HiHeart />
            </Button>
            <Button shape="circle">
              <HiBookmark />
            </Button>
          </div>
          {/* Creators */}
          <div className="mt-3 text-stone-100 ">
            <p>Creator:</p>
            <p className="font-semibold">Dan Erickson</p>
          </div>
          {/* Description */}
          <div className="mt-10 text-stone-100 max-w-[700px]">
            <p className="text-2xl font-semibold">Description</p>
            <p className="text-md text-stone-200">
              Mark leads a team of office workers whose memories have been
              surgically divided between their work and personal lives. When a
              mysterious colleague appears outside of work, it begins a journey
              to discover the truth about their jobs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;
