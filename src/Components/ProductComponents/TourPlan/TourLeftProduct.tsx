import React from "react";

type TourLeftProductSchema = {
    sn: number;
    name: string;
}

const TourLeftProduct = (props: TourLeftProductSchema) => {
    // Props
    const { sn, name } = props;

    return (
        <div className='flex gap-8 w-full relative'>
            <h1 className='text-2xl text-white font-semibold bgcolor h-12 w-32 text-center pt-3'>{sn}</h1>
            <div className='border-2 border-blue h-80 absolute top-12 left-6 border-dashed'></div>
            <div className='flex flex-col gap-8'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <p className='text-base text-slate-600'>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
                <ol className='flex flex-col gap-2 text-slate-600'>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                    <li>5 Star Accomodation</li>
                    <li>Breakfast</li>
                </ol>
            </div>
        </div>

    )
}

export default TourLeftProduct