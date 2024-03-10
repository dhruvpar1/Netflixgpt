import React from 'react'
import VideoTitle from './VideoTitle'

import Videobg from './Videobg'
import { useSelector } from 'react-redux'
const MainContainer = () => {

    const Movies= useSelector((store)=>store.movie?.nowPlayingMovies);
    // console.log(Movies)
    if(!Movies)
    return ;
    const mainMovies=Movies[0]
    // console.log(mainMovies)
    const {original_title,overview,id}=mainMovies

     
  return (
    <div>
        <VideoTitle  title={original_title} overview={overview}/>
        <Videobg  movieId={id} />
    </div>
  )
}

export default MainContainer