import React from 'react'
import sliuder from "../../Assets/Icons/Others/sliuder.png"

const Header = () => {
  return (
    <div className="flex justify-center gap-2 md:gap-8 lg:gap-8 h-80 w-full mt-16 px-4 md:px-0 lg:px-0 md:w-5/6 lg:w-5/6 mx-auto md:mt-14 lg:mt-16">
      <div className="flex flex-col gap-4 w-2/4 md:w-2/4 lg:w-2/4">
        <h3 className="text-blue-700 font-semibold md:text-base lg:text-lg">
          Explore the world with us, one adventure at a time.
        </h3>
        <h1 className="font-bold hidden lg:block md:text-xl lg:text-2xl">
          The perfect vacation come true with our Travel Agency
        </h1>
        <p className="text-sm lg:text-base text-gray-500">
          We are a team of experienced travel experts who specialize in
          planning and organizing unforgettable travel experiences for our
          clients with a wide range of travel services, including flight
          bookings, hotel reservations and more. A travel agency is a business
          that specializes in booking travel arrangements for individuals or
          groups. These arrangements can include flights, accommodations,
          transportation, tours, and other activities. Travel agencies
          typically act as intermediaries between travelers and travel
          suppliers, such as airlines, hotels, cruise lines, and tour
          operators.
        </p>
      </div>
      <div className='sm:w-2/4 flex flex-col gap-4 md:w-2/4 lg:w-2/4'>
        <h1 className="font-bold block lg:hidden md:text-xl lg:text-2xl">
          The perfect vacation come true with our Travel Agency
        </h1>
        <img src={sliuder} className="h-60 lg:h-72" alt="" />
      </div>
    </div>
  )
}

export default Header
