import React from 'react'

const CartHeader = () => {
  return (
    <>
    <div className='grid grid-cols-7 justify-items-center mx-auto gap-4 mt-24 w-4/5 text-lg font-medium'>
        <p className="col-span-2 text-center">Products</p>
        <p className="col-span-1 text-center">Title</p>
        <p className="col-span-1 text-center">Price</p>
        <p className="col-span-1 text-center">Quantity</p>
        <p className="col-span-1 text-center">Total</p>
        <p className="col-span-1 text-center">Add/Remove</p>
    </div>
    <hr className='w-4/5 mx-auto mt-2 h-1 bg-slate-700'/>
    </>
  )
}

export default CartHeader