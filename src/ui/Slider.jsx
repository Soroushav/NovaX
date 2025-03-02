import { HiBookmark, HiHeart, HiOutlineSquaresPlus } from "react-icons/hi2";
import SliderSlick from "react-slick";

function Slider({ movies }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <>
      <SliderSlick {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="p-2   group">
            <div className="h-60 bg-stone-900 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute flex flex-col items-center justify-center text-3xl gap-2 text-indigo-300 w-full h-full opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="transition duration-300 hover:text-stone-500">
                  <HiBookmark />
                </button>
                <button className="transition duration-300 hover:text-red-500">
                  <HiHeart />
                </button>
                <button className="transition duration-300 hover:text-yellow-500">
                  <HiOutlineSquaresPlus />
                </button>
              </div>
              <img
                src={movie.backdropImage}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center mt-2 text-lg font-semibold">
              {movie.title}
            </p>
          </div>
        ))}
      </SliderSlick>
    </>
  );
}

export default Slider;
