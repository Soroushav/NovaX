import { HiBookmark, HiHeart, HiListBullet } from "react-icons/hi2";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useMoviesDetails } from "./useMovieDetails";
import { useFavouriteListAddItem } from "../favourite/useFavouriteListAddItem";

function MoviesDetailBox() {
  const moveBack = useMoveBack();
  const { moviesDetails, isLoading } = useMoviesDetails();
  const { insertFavourite, isLoading: isInsertingToFavourite } =
    useFavouriteListAddItem();
  if (isLoading || !moviesDetails) return <Spinner />;
  const {
    id,
    backdrop_path,
    title,
    release_date,
    genres,
    tagline,
    overview,
    homepage,
    production_companies,
    origin_country,
    poster_path,
  } = moviesDetails;

  function handleAddtoFavourite(e) {
    e.preventDefault();
    const item = {
      movie_id: id,
      title,
      backdrop_path,
      poster_path,
      overview,
    };
    insertFavourite({ added_item: item, isMovie: true });
  }
  return (
    <div className="w-full h-[600px] relative flex items-center justify-start gap-10 px-20">
      <button
        className="absolute top-2 left-4 z-30 text-stone-100 text-xl bg-stone-700/50 px-5 py-1 rounded-md"
        onClick={moveBack}
      >
        &larr; Back
      </button>
      {/* Main Image */}
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt={title}
        className="w-full h-full object-cover absolute inset-0 z-0"
      />
      {/* Background Blur */}
      <div className="absolute inset-0 bg-indigo-500/30 backdrop-blur-xl"></div>

      {/* Movie Card */}
      <div className="w-[310px] h-3/4 rounded-2xl overflow-hidden relative z-10 flex-shrink-0">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Streaming Info */}
        <div
          className="bg-indigo-400 h-1/6 w-full absolute bottom-0"
          onClick={() => window.open(homepage, "_blank")}
        >
          <div className="flex gap-2 items-center justify-center top-1/2 relative -translate-y-1/2 cursor-pointer">
            <div className="w-14 h-7">
              <img
                src={`https://image.tmdb.org/t/p/original${production_companies[0].logo_path}`}
                alt={`${production_companies[0].name}`}
                className="h-full w-full"
              />
            </div>
            <div>
              <p className="text-stone-200/70 font-bold">Official Website</p>
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
              {release_date.split("-")[0]}
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
          <Button shape="circle" onClick={handleAddtoFavourite}>
            <HiHeart />
          </Button>
          <Button shape="circle">
            <HiBookmark />
          </Button>
        </div>
        {/* Creators */}
        {origin_country && (
          <div className="mt-3 text-stone-100 ">
            <p>Countries:</p>
            <p className="font-semibold">
              |{" "}
              {origin_country.map((country, index) => (
                <span key={index}>{country} | </span>
              ))}
            </p>
          </div>
        )}
        {tagline && (
          <div className="mt-10 font-semibold text-indigo-600 bg-stone-100/60 rounded-lg w-[400px] px-2 py-1">
            <p>{tagline}</p>
          </div>
        )}
        {/* Description */}
        {overview && (
          <div className="mt-2 text-stone-100 max-w-[700px]">
            <p className="text-2xl font-semibold">Description</p>
            <p className="text-md text-stone-200">{overview}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoviesDetailBox;
