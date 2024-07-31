import React from 'react'
import InformationLeft from './InformationLeft'
import InformationRight from './InformationRight'

const InformationComponent = ({ product }) => {

  return (
    <div className='flex w-full justify-between gap-4 px-8 mx-auto mt-20'>
      <InformationLeft product={product} />
      <InformationRight />
    </div>
  )
}

export default InformationComponent
