import React from 'react'

const InformationGallery = ({ product }) => {
    return (

        <div className='flex flex-col gap-8 mt-10'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold'> From Our Gallery</h1>
                < p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Amet neque non eius porro harum quidem dicta quibusdam nulla, ut dolore</p >
            </div>
            <img src={product.image} className='shadow-md rounded-md w-[600px] h-[400px]' alt="" />
        </div >
    )
}



export default InformationGallery