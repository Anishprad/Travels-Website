import React from 'react'
import GalleryLeft from './GalleryLeft'
import GalleryRight from './GalleryRight'

const Gallery = () => {
  return (
    <div className='flex gap-4 mt-20 mx-auto px-8 w-full'>
  <GalleryLeft/>
  <GalleryRight/>      
    </div>
  )
}

export default Gallery
