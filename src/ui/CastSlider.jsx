import SliderSlick from "react-slick";
function CastSlider({ cast }) {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 1,
  };

  return (
    <>
      {/* Slick Slider Component */}
      <SliderSlick {...settings} className="gap-x-1">
        {/* Loop through the movies array and render each movie */}
        {cast?.map((actor) => (
          <div key={actor.id} className="p-2 group">
            {/* Cast Card Container */}
            <div className="h-80 w-44 rounded-lg overflow-hidden relative border border-stone-800-50 shadow-md cursor-pointer group">
            
              {/* Cast Image */}
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full h-1/3 bg-stone-100 text-stone-900 flex flex-col justify-center items-center">
                <p className="text-lg font-medium">{actor.name}</p>
                <p>{actor.roles[0].character}</p>
                <p className="text-stone-500">{actor.total_episode_count} Episodes</p>
              </div>
            </div>
          </div>
        ))}
      </SliderSlick>
    </>
  );
}

export default CastSlider;
