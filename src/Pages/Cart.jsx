import React, { useContext } from 'react'
import { shopcontext } from '../Context/Context'
import Packages from '../Components/Items/Packages'
import CartHeader from '../Components/CartComponents/CartHeader'
import CartItems from '../Components/CartComponents/CartItems'

const Cart = () => {
  return(
    <>
    <CartHeader/>
    <CartItems/>
    </>
  )
}
export default Cart