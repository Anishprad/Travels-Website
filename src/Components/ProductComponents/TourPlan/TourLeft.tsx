import React from 'react'
import TourLeftProduct from './TourLeftProduct'

const TourLeft = () => {
    const TourPackage = [
        {
            id: 1,
            number: 1,
            name: "Day 1: Departure",
        },
        {
            id: 2,
            number: 2,
            name: "Day 2: Visiting Amsterdam, Prague and Vienna",
        },
        {
            id: 3,
            number: 3,
            name: "Day 3: Rest",
        },
        {
            id: 4,
            number: 4,
            name: "Day 4: Historical Tour",
        },
        {
            id: 5,
            number: 5,
            name: "Day 5: Return",
        },
    ]
    return (
        <div className='flex flex-col gap-12 w-4/5'>
            <h1 className='text-2xl font-semibold'>Tour Plan</h1>
            <div className='flex flex-col gap-10'>
                {TourPackage.map((item, index) => {
                    return (
                        <TourLeftProduct key={index} sn={item.number}  name={
                            item.name}/>
                    )
                })}
            </div>

        </div>
    )
}

export default TourLeft