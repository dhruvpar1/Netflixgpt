import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import MovieSlider from './MovieSlider'
const SeconContainer = () => {
  const movies=useSelector((store)=>store.movie)
  return (
    <div className="bg-black ">
    <div className=" box-border mx-auto -mt-28 relative z-20 ">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"popular movies"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRated} />
      <MovieList title={"Upcoming"} movies={movies.upcoming} />
   
    </div>
  </div>

  )
}

export default SeconContainer