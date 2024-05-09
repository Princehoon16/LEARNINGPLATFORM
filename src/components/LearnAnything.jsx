import React from 'react'
import LearingImage from '../assets/LearingImage.jpg'

const LearnAnything = () => {
  return (
    <div id='learn-anything' className='bg-stone-500 md:h-screen sm:h-auto md:flex   md:justify-center pb-3'>
        <div className='md:w-1/3 md:text-left md:pl-10 md:pt-0 sm:w-full sm:text-center sm:pl-0 sm:pt-6' >
        <h1 className=' sm:text-center sm:justify-center  py-6 text-black text-2xl md:text-5xl sm:text-3xl  '>Learn Anything</h1>
        <div className="flex flex-wrap justify-center sm:justify-start">
          <div className="bg-black w-32 h-32 m-4 sm:w-48 sm:h-48 ">
                <h2 className='text-white md:p-7 sm:py-4 sm-text-xl'>you can learn here something really Intresting related to your courses.so , you can try here.</h2>
          </div>
          <div className="bg-black w-32 h-32 m-4 sm:w-48 sm:h-48 ">
               <h2 className='text-white md:p-8'>you Can get the certificate realted to your course . you can get your certificate here.</h2>
          </div>
          {/* <div className="bg-black w-32 h-20 m-4 sm:w-48 sm:h-48 "></div> */}
         
        </div>
        </div>
        
       
        <img className = " sm:h-2/6   sm:rounded-full sm:mt-9 md:mt-14 md:ml-7 md:h-5/6  " src={LearingImage} alt="LearnImage" />
      
    </div>
  )
}

export default LearnAnything
