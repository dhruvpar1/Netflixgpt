import {  useSelector } from "react-redux";
import useMovieTrailer from "../../Hooks/useMovieTrailer";
const Videobg = ({ movieId }) => {
  const trailerVideo=useSelector((store)=>store.movie?.trailerVideo)
  useMovieTrailer(movieId);
  return (
    <div className="w-screen ">
      <iframe
       className="w-screen h-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+'?&autoplay=1&mute=1'}
        allow="acceleromenter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-play"
       
      ></iframe>
    </div>
  );
};

export default Videobg;