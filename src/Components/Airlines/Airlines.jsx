import React from 'react'
import Buddha from "../../Assets/Icons/Airlines/Buddha.png"
import Nepal from "../../Assets/Icons/Airlines/Nepal.png"
import India from "../../Assets/Icons/Airlines/India.png"
import Yeti from "../../Assets/Icons/Airlines/Yeti.png"

const Airlines = () => {
  return (
    <div className='flex flex-wrap w-5/6 sm:w-full mx-auto gap-2 px-2 sm:px-0 h-24 md:h-28 md:gap-4 lg:h-28 lg:gap-2 xl:h-32  justify-center items-center mt-10 mb-32 md:mb-0 lg:mb-0 xl:mb-0 md:items-center'>
    <img src={Yeti} className='w-24 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-full' alt="" />
    <img src={Buddha} className='w-24 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-full' alt="" />
    <img src={India} className='w-24 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-full' alt="" />
    <img src={Yeti} className='w-24 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-full' alt="" />
    <img src={Nepal} className='w-24 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-full' alt="" />
    <img src={India} className='w-24 sm:w-24 md:w-32 lg:w-36 xl:w-40 h-full' alt="" />
    </div>
  )
}
 
export default Airlines
