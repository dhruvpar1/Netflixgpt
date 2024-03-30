import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { API_OPTION } from "../utils/const";
import { addTopRated } from "../utils/MovieSlice";
const useTopRated = () => {
 const dispatch=useDispatch();
 const topRated =useSelector((store)=>store.movie.topRated)
 const getTopRated= async()=>{
    const  data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION);
    const json = await data.json();
  
    dispatch(addTopRated(json.results))

 }  
 useEffect(()=>{
   if(!topRated)
   getTopRated()},[]);
};

export default useTopRated ;