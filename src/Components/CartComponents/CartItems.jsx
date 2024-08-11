import React, { useContext } from 'react'
import { shopcontext } from '../../Context/Context'
import Packages from '../Items/Packages'

const CartItems = () => {
  const {cartItems, addTocart, removeFromCart}= useContext(shopcontext)
    return (
            <div className='flex flex-col gap-8'>
        {Packages.map((item)=>{
            if(cartItems[item.id]>0){
                return(
                    <div className='grid grid-cols-7 justify-items-center gap-4 mx-auto w-4/5 mt-4'>
                        <img src={item.image} className='col-span-2 h-18 w-32 rounded-lg object-cover' alt="" />
                        <p className='col-span-1 text-lg font-medium'>{item.name}</p>
                        <p className='col-span-1 text-lg font-medium'>${item.price}</p>
                        <button className='col-span-1 shadow-lg h-10 w-16 border-4 border-slate-400 text-lg font-medium'>{cartItems[item.id]}</button>
                        <p className='col-span-1 text-lg font-medium'>${cartItems[item.id]*item.price}</p>

                    </div>

)
}
})}
</div>
  )
}

export default CartItems
