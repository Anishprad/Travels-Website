import React from 'react'
import * as anyName from "../../../Assets/Icons/Others"

const GalleryLeft = () => {
  return (
    <div className='w-4/5 flex flex-col gap-7 mx-auto'>
        <h1 className='text-2xl font-semibold'>Gallery</h1>
        <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto soluta laboriosam, autem quod impedit laborum neque quo rerum dolor velit?</p>
        <img src={anyName.patan} alt="" />
    </div>
  )
}

export default GalleryLeft