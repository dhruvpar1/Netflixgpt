import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-full h-full text-white   pt-[20%] px-24  bg-gradient-to-r from-black absolute  '>
      
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='w-1/4 pt-6' >{overview}</p>
      <div>
        <button className="text-xl text-black bg-white p-4 px-12 rounded-lg hover:bg-opacity-80 " >Play</button>
        <button className="text-xl m-1  text-white bg-slate-500  p-4 px-12 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle