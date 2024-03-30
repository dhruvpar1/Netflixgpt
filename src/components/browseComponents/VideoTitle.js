import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-full  text-white pt-[20%]   bg-gradient-to-r from-black absolute px-10 sm:px-24 h-1/2 sm:h-full'>
      
      <h1 className='text-sm mt-36 sm:text-6xl font-bold'>{title}</h1>
      <p className='text-sm hidden sm:w-1/4 pt-6' >{overview}</p>
      <div>
        <button className="text-sm p-10  sm:text-xl text-black bg-white p-4 rounded-lg hover:bg-opacity-80 " >Play</button>
        <button className="text-sm p-10 m-2 sm:text-white bg-slate-500  p-4 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle