import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/const";
import { addUpcoming } from "../utils/MovieSlice";
const useUpcomingMovies = () => {
 const dispatch=useDispatch();
 const getUpcomingMovies= async()=>{
    const  data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION);
    const json = await data.json();
 
    dispatch(addUpcoming(json.results))

 }  
 useEffect(()=>{getUpcomingMovies()},[]);
};

export default useUpcomingMovies ;