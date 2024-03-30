import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { API_OPTION } from "../utils/const";
import { addNowPlayingMovies } from "../utils/MovieSlice";
const useNowPlayingMovies = () => {
 const dispatch=useDispatch();
 const nowPlayingMovies =useSelector((store)=>store.movie.nowPlayingMovies)
 const getNowPlayingMovies= async()=>{
    const  data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION);
    const json = await data.json();
   
    dispatch(addNowPlayingMovies(json.results))

 }
 useEffect(()=> {
   if(!nowPlayingMovies)
   getNowPlayingMovies()},[]);
};

export default useNowPlayingMovies;