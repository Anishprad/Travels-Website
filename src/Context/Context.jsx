import React, { useState } from 'react'
import { createContext } from "react";
import Packages from '../Components/Items/Packages';

export const shopcontext = createContext()

const getDefaultCart=()=>{
    const cart= {}
    for(let index=0; index<Packages.length; index++){
       cart[index] =0;
    }
        return cart;
}

const Context = ({children}) => {
const [cartItems, setCartItems]= useState(getDefaultCart())
const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    console.log(cartItems)
}
const removeFromCart=(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}
const contextValue ={cartItems,addToCart,removeFromCart}
  return (
   <shopcontext.Provider value={contextValue}>
    {children}
   </shopcontext.Provider>
  )
}

export default Context


