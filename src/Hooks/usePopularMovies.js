import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { API_OPTION } from "../utils/const";
import { addPopularMovies } from "../utils/MovieSlice";
const usePopularMovies = () => {

 const dispatch=useDispatch();
 const popularMovies =useSelector((store)=>store.movie.popularMovies)
 const getPopularMovies= async()=>{
    const  data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTION);
    const json = await data.json();
  
    dispatch(addPopularMovies(json.results))

 }  
 useEffect(()=>{
   if(!popularMovies)
   getPopularMovies()},[]);
};

export default usePopularMovies ;