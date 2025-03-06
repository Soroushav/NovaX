import { HiBookmark, HiHeart, HiOutlineSquaresPlus } from "react-icons/hi2";
import SliderSlick from "react-slick";

function Slider({ movies }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  
  return (
    <>
      {/* Slick Slider Component */}
      <SliderSlick {...settings}>
        {/* Loop through the movies array and render each movie */}
        {movies.map((movie) => (
          <div key={movie.id} className="group">
            {/* Movie Card Container */}
            <div className="h-60 bg-stone-900 rounded-3xl overflow-hidden relative">
              {/* Hover Effect: Dark Overlay with Blur */}
              
              <div className="absolute inset-0 bg-black/30 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Hover Effect: Action Buttons (Bookmark, Like, Add) */}
              <div className="absolute flex flex-col items-center justify-center text-3xl gap-2 text-indigo-300 w-full h-full opacity-0 group-hover:opacity-100 transition duration-300">
                {/* Bookmark Button */}
                <button className="transition duration-300 hover:text-stone-500">
                  <HiBookmark />
                </button>
                {/* Like Button */}
                <button className="transition duration-300 hover:text-red-500">
                  <HiHeart />
                </button>
                {/* Add to List Button */}
                <button className="transition duration-300 hover:text-yellow-500">
                  <HiOutlineSquaresPlus />
                </button>
              </div>

              {/* Movie Image */}
              <img
                src={movie.backdropImage}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Movie Title */}
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
