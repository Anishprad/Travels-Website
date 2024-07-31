import React from 'react'

const Core = () => {
  return (
    <div className='flex flex-col h-4/6 w-4/5 lg:w-5/6 gap-14 py-11 mx-auto mt-10'>
        <h1 className='flex text-2xl font-semibold gap-2 mx-auto'>Company<span className='text-blue-700'>Core Values</span></h1>
      <div className='flex flex-col gap-4 text-sm'>
        <div className='flex flex-col'>
            <h3 className='text-blue-600 font-semibold'>Customer Satisfaction :</h3>
            <p className='text-gray-600'>Putting customers' needs first and striving to exceed their expectations in terms of service, convenience, and overall travel experience.</p>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-blue-600 font-semibold'>Integrity:</h3>
            <p className='text-gray-600'>Upholding honesty, transparency, and ethical behavior in all interactions with customers, suppliers, and partners.</p>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-blue-600 font-semibold'>Customer Satisfaction :</h3>
            <p className='text-gray-600'>Putting customers' needs first and striving to exceed their expectations in terms of service, convenience, and overall travel experience.</p>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-blue-600 font-semibold'>Innovation :</h3>
            <p className='text-gray-600'>Embracing creativity and innovation to constantly improve processes, develop new products, and adapt to changing market trends.</p>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-blue-600 font-semibold'>Customer Responsibility :</h3>
            <p className='text-gray-600'>Taking responsibility for the environmental, social, and economic impacts of travel operations, and working towards sustainable practices and community engagement.</p>
        </div>
        <div className='flex flex-col'>
            <h3 className='text-blue-600 font-semibold'>Teamwork :</h3>
            <p className='text-gray-600'>Fostering a collaborative and supportive work environment where employees are valued, empowered, and encouraged to work together towards common goals.</p>
        </div>
      </div>
    </div>
  )
}

export default Core
