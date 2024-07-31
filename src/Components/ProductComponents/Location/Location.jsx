import React from 'react'
import LocationLeft from './LocationLeft'
import LocationRight from './LocationRight'

const Location = () => {
  return (
    <div className='flex mt-20 px-8 mx-auto gap-4 w-full '>
      <LocationLeft/>
      <LocationRight/>
    </div>
  )
}

export default Location
