import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark, faCross } from '@fortawesome/free-solid-svg-icons'


const Details = (props) => {
    // Props
    const { product } = props;

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex w-full items-center'>
                <h2 className='text-lg w-2/5 font-medium'>Destination</h2>
                <p className='text-base w-3/5 font-medium'>{product.name}</p>
            </div>
            <div className='flex w-full items-center'>
                <h2 className='text-lg w-2/5 font-medium'>Departure</h2>
                <p className='text-base w-3/5'>{product.location}</p>
            </div>
            <div className='flex w-full items-center'>
                <h2 className='text-lg w-2/5 font-medium'>Return Time</h2>
                <p className='text-base w-3/5'>Approximately 7.30AM</p>
            </div>
            <div className='flex w-full items-center'>
                <h2 className='text-lg w-2/5 font-medium'>Dress Code</h2>
                <p className='text-base w-3/5'>Casual, comfortable and light</p>
            </div>
            <div className='flex w-full items-center'>
                <h2 className='text-lg w-2/5 font-medium'>Included</h2>
                <span className='grid grid-cols-2 grid-rows-2 w-3/5 gap-8'>
                    <p><FontAwesomeIcon icon={faCircleCheck} className='mr-2' /> 5 Star Accomodation</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} className='mr-2' />Airport Transfer</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} className='mr-2' />Breakfast</p>
                    <p><FontAwesomeIcon icon={faCircleCheck} className='mr-2' />Personal Guide</p>
                </span>
            </div>
            <div className='flex w-full items-center'>
                <h2 className='text-lg w-2/5 font-medium'>Not Included</h2>
                <span className='grid grid-cols-2 gap-32'>
                    <p><FontAwesomeIcon icon={faCircleXmark} className='mr-2' /> Gallery Ticket</p>
                    <p><FontAwesomeIcon icon={faCircleXmark} className='mr-2' /> Lunch</p>
                </span>
            </div>
        </div>
    )
}
export default Details
