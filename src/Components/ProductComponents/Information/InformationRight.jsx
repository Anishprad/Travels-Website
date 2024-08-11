import React from 'react'
import ProductForm from '../ProductForm'

const InformationRight = () => {
    
    return (
        <div className='bodyColor flex flex-col w-1/5 h-full gap-4 px-4 py-8 text-white'>
            <h1 className='text-lg font-semibold'>Book This Tour</h1>
            <p>Arrange your trip in advance - book this tour now!</p>
            <ProductForm />
        </div>
    )
}

export default InformationRight