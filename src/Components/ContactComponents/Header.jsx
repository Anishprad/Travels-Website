import React from 'react'
import image1 from "../../Assets/Icons/ContactPictures/image1.png"

const Header = () => {
  return (
    <div className='md:h-96 lg:h-96 xl:h-96 mt-20 md:mt-12 lg:mt-12 xl:mt-12 w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-full mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row gap-8 md:gap-0 lg:gap-0 xl:gap-0 items-center'>
      <div className='flex flex-col gap-8 mx-auto items-center w-1/2'>
        <h1 className='text-blue-800 sm:text-2xl md:text-xl lg:text-2xl font-bold'>LOVE & Travel</h1>
        <p className='text-gray-500 text-sm sm:text-base md:text-base lg:text-lg font-medium'>TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER <br className='hidden md:block lg:block xl:block'/> DON'T MISS THIS OPPORTUNITY FOR YOUR BUSINESS</p>
        </div>
        <img src=
        {image1} className='h-48 sm:h-[340px] md:h-[320px] lg:h-[320px] xl:h-full w-5/6 md:w-1/2 lg:w-1/2 xl:w-1/2' alt="" />  
      
    </div>
  )
}

export default Header
