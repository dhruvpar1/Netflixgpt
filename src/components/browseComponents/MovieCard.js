import React from 'react'
import { Img_CDN_URL } from '../../utils/const'
const MovieCard = ({posterPath}) => {
   
  return (
    <div className='w-48 p-2' >
        
        <img src={Img_CDN_URL+posterPath}  alt=" could not get poster" />
    </div>
  )
}

export default MovieCard