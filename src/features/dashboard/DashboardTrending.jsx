import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../../ui/Slider";

const updatedTrending = [
  {
    id: 1,
    title: "Severance",
    backdropImage: "movie-backdrop.jpg",
    seasons: "2",
    ratings: {
      imdb: 8.7,
      rottenTomatoes: 97,
    },
  },
  {
    id: 2,
    title: "Cobra Kai",
    backdropImage: "movie2-backdrop.jpg",
    seasons: "6",
    ratings: {
      imdb: 8.4,
      rottenTomatoes: 94,
    },
  },
  {
    id: 3,
    title: "The White Lotus",
    backdropImage: "movie3-backdrop.jpg",
    seasons: "3",
    ratings: {
      imdb: 8.0,
      rottenTomatoes: 93,
    },
  },
  {
    id: 4,
    title: "Anora",
    backdropImage: "movie4-backdrop.jpg",
    seasons: 2,
    ratings: {
      imdb: 7.7,
      rottenTomatoes: 93,
    },
  },
  {
    id: 5,
    title: "Mickey 17",
    backdropImage: "movie5-backdrop.jpg",
    seasons: 2,
    ratings: {
      imdb: 7.4,
      rottenTomatoes: 88,
    },
  },
  {
    id: 6,
    title: "Solo Leveling",
    backdropImage: "movie6-backdrop.jpg",
    seasons: "2",
    ratings: {
      imdb: 8.4,
      rottenTomatoes: 100,
    },
  },
];

function DashboardTrending() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <p className="text-3xl mb-4 ml-2 mt-6 text-stone-600">Trending</p>
      <Slider movies={updatedTrending}/>
    </div>
  );
}

export default DashboardTrending;
