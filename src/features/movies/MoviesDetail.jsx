import { useParams } from "react-router-dom";
import Button from "../../ui/Button";
import { HiBookmark, HiHeart, HiStar } from "react-icons/hi";
import { HiListBullet } from "react-icons/hi2";
import CastSlider from "../../ui/CastSlider";
import { useTvShowDetails } from "./usTvShowDetails";
import Spinner from "../../ui/Spinner";
import { useTvShowCast } from "./useTvShowCast";
import { useTvShowReviews } from "./useTvShowReviews";

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
const cast = [
  {
    id: 1,
    fullName: "John Turturro",
    movieName: "Irving Bailiff",
    numEpisodes: 10,
    backdropImage: "/cast.png",
  },
  {
    id: 2,
    fullName: "John Turturro",
    movieName: "Irving Bailiff",
    numEpisodes: 10,
    backdropImage: "/cast.png",
  },
  {
    id: 3,
    fullName: "John Turturro",
    movieName: "Irving Bailiff",
    numEpisodes: 10,
    backdropImage: "/cast.png",
  },
  {
    id: 4,
    fullName: "John Turturro",
    movieName: "Irving Bailiff",
    numEpisodes: 10,
    backdropImage: "/cast.png",
  },
  {
    id: 5,
    fullName: "John Turturro",
    movieName: "Irving Bailiff",
    numEpisodes: 10,
    backdropImage: "/cast.png",
  },
  {
    id: 6,
    fullName: "John Turturro",
    movieName: "Irving Bailiff",
    numEpisodes: 10,
    backdropImage: "/cast.png",
  },
  {
    id: 7,
    fullName: "John Turturro",
    movieName: "Irving Bailiff",
    numEpisodes: 10,
    backdropImage: "/cast.png",
  },
];
const seasonsNumber = [
  {
    id: 1,
    seasonNumber: 1,
    year: 2022,
    episodes: 9,
    rating: 84,
    poster: "/movie-poster-season1.jpg",
    detail: "Season 1 of Severance premiered on February 17, 2022.",
    overview:
      'At Lumon Industries, employees undergo "severance," a procedure dividing their work and personal memories. Mark, a grieving team leader, begins to uncover the dark secrets of the company, forcing him and his coworkers to confront questions of identity, free will, and corporate control.',
  },
  {
    id: 2,
    seasonNumber: 2,
    year: 2025,
    episodes: 10,
    rating: 81,
    poster: "/movie-poster-season2.jpg",
    detail: "Season 2 of Severance premiered on January 16, 2025.",
    overview:
      "In season two, Mark and his friends learn the dire consequences of trifling with the severance barrier, leading them further down a path of woe.",
  },
];
const review = {
  id: 1,
  img: "/review-1.jpg",
  rating: 90,
  name: "Cortney",
  date: "April 26, 2022",
  text: "Give it time! This show is a slow burn and I have to admit, it almost lost me a couple of episodes in. I was feeling like there was too much back story and at the same time we knew nothing. Wow, was I wrong.It is an original idea that keeps you guessing. The mood, the tone, the writing, the cast, everything is just perfect. I seriously can't wait for Season 2!",
};
function MoviesDetail() {
  const { tvShowDetails, isLoading } = useTvShowDetails();
  const { tvShowCast, isLoading: isLoadingCast } = useTvShowCast();
  const { tvShowReviews, isLoading: isLoadingReviews } = useTvShowReviews();
  if (isLoading && isLoadingCast && isLoadingReviews) return <Spinner />;
  console.log(tvShowCast)
  const {
    id,
    created_by,
    backdrop_path,
    name,
    first_air_date,
    genres,
    seasons,
    tagline,
    overview,
    number_of_seasons,
    networks,
    vote_average,
    homepage,
    in_production,
  } = tvShowDetails;

  // const { id, title, backdropImage, seasons, ratings } = updatedTrending.find(
  //   (t) => t.id === Number(moviesId)
  // );
  return (
    <div className="relative">
      <div className="w-full bg-red-300 h-[600px] relative flex items-center justify-start gap-10 px-20">
        {/* Main Image */}
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={name}
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        {/* Background Blur */}
        <div className="absolute inset-0 bg-indigo-500/30 backdrop-blur-xl"></div>

        {/* Movie Card */}
        <div className="w-[310px] h-3/4 rounded-2xl overflow-hidden relative z-10 flex-shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={name}
            className="w-full h-full object-cover"
          />

          {/* Streaming Info */}
          <div className="bg-indigo-400 h-1/6 w-full absolute bottom-0">
            <div className="flex gap-2 items-center justify-center top-1/2 relative -translate-y-1/2 cursor-pointer">
              <div className="w-14 h-7">
                <img
                  src={`https://image.tmdb.org/t/p/original${networks[0].logo_path}`}
                  alt={`${networks[0].name}`}
                  className="h-full w-full"
                />
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
              {name}{" "}
              <span className="font-normal text-3xl text-stone-300">
                {first_air_date.split("-")[0]}
              </span>
            </h1>
          </div>
          {/* Movie information */}
          <div>
            <p className="text-stone-200 drop-shadow-[0_1.2px_1.2px]">
              {genres.map((genre) => (
                <span key={genre.id}>{genre.name}, </span>
              ))}
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
            <p className="font-semibold">
              |{" "}
              {created_by.map((creator) => (
                <span>{creator.name} | </span>
              ))}
            </p>
          </div>
          <div className="mt-10 font-semibold text-indigo-600 bg-stone-100/60 rounded-lg w-[400px] px-2 py-1">
            <p>{tagline}</p>
          </div>
          {/* Description */}
          <div className="mt-2 text-stone-100 max-w-[700px]">
            <p className="text-2xl font-semibold">Description</p>
            <p className="text-md text-stone-200">{overview}</p>
          </div>
        </div>
      </div>

      {/* Series Cast */}
      <div>
        <h2 className="text-stone-600 text-3xl ml-10 mt-5 font-semibold mb-4">
          Series Cast
        </h2>
        <div className="w-full overflow-hidden px-8">
          <CastSlider cast={tvShowCast} />
        </div>
      </div>

      {/* Seasons */}
      <h2 className="text-stone-600 text-3xl ml-10 mt-5 font-semibold mb-4 border-t border-stone-300 pt-6">
        Seasons
      </h2>
      <div className="flex flex-col gap-3 px-11 border-b pb-6 border-stone-300">
        {seasons
          .filter((season) => season.name.toLowerCase() !== "specials")
          .map((season) => (
            <div className="rounded-xl border shadow-stone-300/50 shadow-lg border-stone-300 h-52 overflow-hidden flex gap-5">
              <div className="h-full w-[120px] flex-shrink-0">
                <img
                  src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
                  alt={`season${season.seasonNumber} Poster`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="py-5">
                <h2 className="text-stone-700 font-medium text-2xl">
                  Season {`${season.season_number}`}
                </h2>
                <div className="flex items-center gap-2 font-medium">
                  <div className="flex items-center bg-indigo-600 w-16 p-1 rounded-lg">
                    <HiStar className="text-yellow-400" />
                    <p className="text-stone-100">{season.vote_average}%</p>
                  </div>
                  <p className="text-stone-700">
                    {season.air_date.split("-")[0]} • {season.episode_count}{" "}
                    Episodes
                  </p>
                </div>
                {/* <p className="mt-4 text-stone-500">{season.detail}</p> */}
                <p className="mt-4 max-w-[80%] text-stone-800">
                  {season.overview}
                </p>
              </div>
            </div>
          ))}
      </div>
      {/* Review */}
      <h2 className="text-stone-600 text-3xl ml-10 mt-5 font-semibold mb-4  pt-6">
        Review
      </h2>
      <div className="flex flex-col gap-3 px-11 border-b pb-6 border-stone-300">
        <div className="rounded-xl border shadow-stone-300/50 shadow-lg border-stone-300 h-60 overflow-hidden flex gap-5">
          <div className="ml-4 mt-4 flex flex-col gap-3">
            {/* Heading */}
            <div className="flex items-center gap-2">
              {/* Image */}
              <div>
                <img
                  src={review.img}
                  alt="review img"
                  className="h-14 w-14 rounded-full"
                />
              </div>
              {/* Review Information */}
              <div className="flex flex-col gap-1">
                {/* Name */}
                <p className="text-lg text-stone-800">
                  A review by :{" "}
                  <span className="font-semibold text-stone-600">
                    {review.name}
                  </span>
                </p>
                {/* Rating and Date */}
                <div className="flex gap-2 items-center">
                  <div className="flex items-center bg-indigo-600 w-16 p-1 rounded-lg">
                    <HiStar className="text-yellow-400" />
                    <p className="text-stone-100">{review.rating}%</p>
                  </div>
                  <p className="text-stone-600 ">
                    Written by{" "}
                    <span className="font-medium text-stone-800">
                      {review.name}
                    </span>{" "}
                    on <span>{review.date}</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="w-[95%] px-2 text-stone-800 text-lg">{review.text}</p>
          </div>
        </div>
      </div>
      {/* Recommendations */}
      <h2 className="text-stone-600 text-3xl ml-10 mt-5 font-semibold mb-4  pt-6">
        Recommendations
      </h2>
      <div className="h-80 px-10 overflow-hidden">
        <ul className="h-full flex items-center gap-4 overflow-x-auto">
          <li className="cursor-pointer h-4/5 w-[400px] flex-shrink-0 flex flex-col rounded-md overflow-hidden">
            <div>
              <img
                src="/tv1-backdrop.jpg"
                alt=""
                className="w-full h-5/6 object-cover"
              />
              <p className="text-center mt-1 text-stone-700 text-lg font-semibold">
                Ted Lasso
              </p>
            </div>
          </li>
          <li className="cursor-pointer h-4/5 w-[400px] flex-shrink-0 flex flex-col rounded-md overflow-hidden">
            <div>
              <img
                src="/tv2-backdrop.jpg"
                alt=""
                className="w-full h-5/6 object-cover"
              />
              <p className="text-center mt-1 text-stone-700 text-lg font-semibold">
                Shrinking
              </p>
            </div>
          </li>
          <li className="cursor-pointer h-4/5 w-[400px] flex-shrink-0 flex flex-col rounded-md overflow-hidden">
            <div>
              <img
                src="/tv3-backdrop.jpg"
                alt=""
                className="w-full h-5/6 object-cover"
              />
              <p className="text-center mt-1 text-stone-700 text-lg font-semibold">
                Silo
              </p>
            </div>
          </li>
          <li className="cursor-pointer h-4/5 w-[400px] flex-shrink-0 flex flex-col rounded-md overflow-hidden">
            <div>
              <img
                src="/tv4-backdrop.jpg"
                alt=""
                className="w-full h-5/6 object-cover"
              />
              <p className="text-center mt-1 text-stone-700 text-lg font-semibold">
                The Bear
              </p>
            </div>
          </li>
          <li className="cursor-pointer h-4/5 w-[400px] flex-shrink-0 flex flex-col rounded-md overflow-hidden">
            <div>
              <img
                src="/tv5-backdrop.jpg"
                alt=""
                className="w-full h-5/6 object-cover"
              />
              <p className="text-center mt-1 text-stone-700 text-lg font-semibold">
                BEEF
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MoviesDetail;
