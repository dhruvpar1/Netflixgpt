import {  useSelector } from "react-redux";
import useMovieTrailer from "../../Hooks/useMovieTrailer";
const Videobg = ({ movieId }) => {
  const trailerVideo=useSelector((store)=>store.movie?.trailerVideo)
  useMovieTrailer(movieId);
  return (
    <div  className="w-screen iframe box-border  flex overflow-hidden">
    <iframe
      className="h-full w-full"
      src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      
      
    ></iframe>
 </div>

  );
};

export default Videobg;
