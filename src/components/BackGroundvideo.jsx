import React from 'react'
import learningvideo  from '../assets/learningvideo.mp4'


const BackGroundvideo = () => {
    
  return (
    <div className='video'>
      <video src={learningvideo} autoPlay loop muted />
      <div className="overlay"></div>
      <div className='content'>
        <h1 className=' text-6xl md:text-9xl sm:text-4xl  opacity-10'>Welcome</h1>
        <p className='text-2xl md:text-5xl sm:text-3xl py-4'>To the Study World .</p>
      </div>
    </div>
  )
}

export default BackGroundvideo
