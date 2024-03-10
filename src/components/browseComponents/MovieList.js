import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title, movies}) => {
  if(!movies)
  return;
  console.log(movies[0])
  return (
      <div className='p-5 '>
        <h1 className='text-3xl'>{title}</h1>
    <div className='flex overflow-x-scroll '>
      
      <div className='flex '>
        {movies.map(movies =><MovieCard key={movies.id} posterPath={movies.poster_path} />)}
        
      </div>
      </div>
    </div>
  )
}

export default MovieList