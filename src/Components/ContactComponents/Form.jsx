import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div className='h-3/5 w-full px-8 md:w-5/6 lg:w-5/6 xl:w-5/6 flex flex-col gap-8 mx-auto lg:p-0 xl:p-11 mt-12 md:mt-0 lg:mt-0 xl:mt-0'>
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-2xl md:text-2xl lg:text-3xl text-blue-600 font-semibold'>Have questions about Travel?</h1>
            <p className='text-lg text-gray-500'>Connect with us</p>
        </div>
      <form action="submit/form" method='post'>
        <div className='flex flex-col md:grid lg:grid xl:grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2 xl:grid-rows-2 md:gap-x-20 lg:gap-x-20 gap-8 mx-auto w-full'>
        <div className='flex flex-col mx-auto gap-2'>
            <label htmlFor="firstName" className='text-base md:text-sm lg:text-sm xl:text-sm'>First Name</label>
            <input type="text" id='firstName' name='firstName' className='h-16 md:h-12 lg:h-12 xl:h-12 w-80 sm:w-[450px] md:w-72 lg:w-96 p-4 border rounded-lg text-sm' placeholder='Enter your first name'/>
        </div>
        <div className='flex flex-col mx-auto gap-2'>
            <label htmlFor="lastName" className='text-sm'>Last Name</label>
            <input type="text" id='lastName' name='lastName' className='h-16 md:h-12 lg:h-12 xl:h-12 w-80 sm:w-[450px] md:w-72 lg:w-96 p-4 border rounded-lg text-sm' placeholder='Enter your last name'/>
        </div>
        <div className='flex flex-col mx-auto gap-2'>
            <label htmlFor="email" className='text-sm'>Email</label>
            <input type="email" id='email' name='email' className='h-16 md:h-12 lg:h-12 xl:h-12 w-80 sm:w-[450px] md:w-72 lg:w-96 p-4 border rounded-lg text-sm' placeholder='Enter your email'/>
        </div>
        <div className='flex flex-col mx-auto gap-2'>
            <label htmlFor="contact" className='text-sm'>Contact</label>
            <input type="number" id='contact' name='contact' className='h-16 md:h-12 lg:h-12 xl:h-12 w-80 sm:w-[450px] md:w-72 lg:w-96 p-4 border rounded-lg text-sm' placeholder='Enter your contact number'/>
        </div>
        <div className='flex flex-col gap-2 col-span-4 sm:w-[450px] md:w-full lg:w-full xl:w-full sm:mx-auto md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2'>
            <label htmlFor="message" className='text-sm'>Message</label>
            <textarea name="message" id="message" className='text-sm border h-32 md:h-32 lg:h-32 xl:h-32 rounded-lg p-2' placeholder='write your message'></textarea>
        </div>
      <div class="flex md:justify-end lg:justify-end xl:justify-end md:col-span-2 lg:col-span-2 xl:col-span-2">
       <Link to="/submission"> <button type='submit' class="bg-blue-700 text-white px-8 py-2 rounded">Submit</button></Link>
    </div>
        </div>
      </form>
    </div>
  )
}

export default Form 