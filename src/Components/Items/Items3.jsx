import React from 'react'

const Items3 = ({products}) => {
  return (
    <div className='flex flex-col items-center justify-center sm:p-0 md:p-2 lg:p-10 relative rounded-xl border h-40 sm:mx-auto md:h-40 lg:h-48 sm:w-4/5 md:w-52 lg:w-60 xl:w-[260px] shadow-md gap-1 text-lg md:text-sm lg:text-sm'>
        <h1 className='text-blue-500 font-medium '>{products.name}</h1>
        <p className='text-gray-500'>{products.post}</p>
        <p className='text-gray-500'>{products.email}</p>
        <p className='text-gray-500'>{products.contact}</p>
        <img src={products.image} className='h-16 w-16 absolute -top-12 md:left-16 lg:left-[86px] border-4 border-white' alt="" />
    </div>
  )
}

export default Items3
