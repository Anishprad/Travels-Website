import React, { useContext } from 'react'
import "./InformationComponent.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons'
import Details from './Details'
import InformationGallery from './InformationGallery'
import { shopcontext } from '../../../Context/Context'

const InformationLeft = ({ product }) => {
    const {addToCart} = useContext(shopcontext)
    return (
        <div className='flex flex-col w-4/5 gap-8'>
            <div className='flex justify-between'>
            <div className='flex flex-col gap-4'>
                <span className='flex items-center space-x-8'>
                    <h1 className='text-2xl font-semibold'>{product.name}</h1>
                    <p className='text-lg font-medium color'>${product.price} <span className='text-black'>/ person</span></p>
                </span>
                <span className='flex space-x-8'><img src={product.rating} className='color' alt="" />
                    <p className='text-base'>(1 Review)</p>
                </span>
            </div>
            <button className='h-12 w-40 text-xl font-medium rounded-lg bg-blue-500 text-white' onClick={()=>{addToCart(product.id)}}>Add To Cart</button> 
            </div>
            <p className='text-lg text-slate-700'>
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
            </p>
            <div className='flex space-x-4'>
                <button className='bgcolor text-white text-lg h-12 w-28'>
                    <FontAwesomeIcon icon={faCalendar} className='mx-2' /> 1
                </button>
                <button className='bgcolor text-white text-lg h-12 w-36'>
                    <FontAwesomeIcon icon={faPerson} className='mx-1' /> 13+ Age
                </button>
            </div>
            <Details product={product} />
            <InformationGallery product={product} />
        </div>
    )
}

export default InformationLeft