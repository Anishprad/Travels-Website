import Packages from '../Components/Items/Packages'
import { useParams } from 'react-router-dom'
import headerPic from "../Assets/Icons/MainVideo/header.gif"
import Information from '../Components/ProductComponents/Information'

const Product = () => {
  const { productId } = useParams()
  const product = Packages.find((e) => e.id === Number(productId))
  return (
    <div className='flex flex-col mb-20'>
      <div className='mt-16 relative flex flex-col items-center justify-center'>
        <img src={headerPic} className='w-full rounded-lg shadow-xl object-cover h-[350px]' alt="" />
        <span className='flex flex-col shadow-lg absolute items-center rounded-xl'>
          <h2 className='text-3xl  text-white font-mono'>Amazing Tour</h2>
          <h1 className='text-3xl text-white font-mono'>{product.location}</h1>
        </span>
      </div>
      <div className='mt-2'>
        <Information product={product} />
      </div>
    </div>
  )
}

export default Product
