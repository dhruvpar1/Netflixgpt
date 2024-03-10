import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/const";
import { addPopularMovies } from "../utils/MovieSlice";
const usePopularMovies = () => {
 const dispatch=useDispatch();
 const getPopularMovies= async()=>{
    const  data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTION);
    const json = await data.json();
    // console.log(json)
    dispatch(addPopularMovies(json.results))

 }  
 useEffect(()=>{getPopularMovies()},[]);
};

export default usePopularMovies ;