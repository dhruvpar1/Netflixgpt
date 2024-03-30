import {  useSelector } from "react-redux";
import useMovieTrailer from "../../Hooks/useMovieTrailer";
const Videobg = ({ movieId }) => {
  const trailerVideo=useSelector((store)=>store.movie?.trailerVideo)
  useMovieTrailer(movieId);
  return (
      // src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
    // <div  className="w-screen iframe box-border  flex overflow-hidden">

      <div className="h-1/3 sm:h-screen w-screen">

      <iframe className="h-[416px] md:h-[calc(100%-0px)] w-full pt-[118px] md:pt-[70px]"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    </div>
//  </div>

  );
};

export default Videobg;
