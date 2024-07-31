import React from 'react'
import image1 from "../../Assets/Icons/Others/Image-1.png"
import videoBg from "../../Assets/Icons/MainVideo/videoBg.mp4"

const Explore = () => {
  return (
    <div className='flex flex-col relative bg-slate-200 mb-20 mt-12'>
      <div className='flex flex-col justify-center items-center'>
      <video src={videoBg} className='object-cover w-full h-[190px] sm:h-[200px] md:h-[242px] lg:h-[410px] ' alt="" autoPlay loop muted />
      <h1 className='text-white font-mono absolute items-center text-4xl'>Welcome to Travel</h1>
      </div>
    <div className='flex justify-around text-base bg-white absolute top-44 left-24 sm:top-44 sm:left-32 md:top-56 md:left-40 lg:top-96 xl:top-96 lg:left-72 opacity-100 rounded-2xl items-center w-3/5 sm:h-8 md:h-10 lg:h-12 shadow-md'>
      <input type="text" placeholder='Find your destination' className='w-4/5 px-4'/>
      <button className=' border px-4 py-1 text-white bg-blue-800 rounded-lg active:bg-green-500'>Search</button>
    </div>
    </div>
  )
}

export default Explore
