import React from 'react'
import ToursProduct from '../Items/ToursProduct'
import Items3 from '../Items/Items3'

const Team = () => {
  return (
    <div className="flex flex-col w-4/5 lg:w-5/6 mx-auto gap-24 my-10">
      <h1 className="font-semibold gap-1 text-2xl mx-auto">
        Our <span className="text-blue-700">Team Members</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 md:mx-auto justify-items-stretch gap-24 md:gap-16 lg:gap-12">
        {ToursProduct.map((item) => {
          return (
            <Items3 products={item} key={item.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Team
