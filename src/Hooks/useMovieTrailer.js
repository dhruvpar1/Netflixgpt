import  { useEffect } from "react";
import { API_OPTION } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";
const useMovieTrailer =async (movieId)=> {
  const dispatch = useDispatch();
  
  const getMovieTrailer = async () => {
    console.log('dhruv')
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', 
      API_OPTION
    );
    const json = await data.json();
    console.log(json);
    const filterData=json.results.filter((video)=> video.type==="Trailer")
    const trailer =filterData.length?filterData[0]:json.results[0];
    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
}
export default useMovieTrailer