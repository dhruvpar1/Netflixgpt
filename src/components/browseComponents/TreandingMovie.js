import React from 'react'
import MovieCard from './MovieCard'

const TreandingMovie = (props) => {
  console.log(props.posterPath, "posterPath");
  return (
    <div className="trending-card relative flex justify-start">
    <div className="text-[200px] trending-number w-auto h-full flex justify-start items-center absolute left-0">{props.index}</div>
    <div className='w-32 ml-16 relative z-100'>
      <MovieCard key={props.index} posterPath={props.posterPath} />
    </div>
  </div>
  )
}

export default TreandingMovie