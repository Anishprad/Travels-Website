import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

const b = 5;

const PublicLayout = () => {
  return (
  <>
   <Navbar/>
   <Outlet/>
   <Footer />
  </>
  )
}

export default PublicLayout
export {b}
