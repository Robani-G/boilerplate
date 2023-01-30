import React from 'react'
import AppButton from '../atoms/AppButton'

function Section() {
  return (
    <div className='sm:flex max-w-screen sm:items-center  sm:justify-center mx-2 '>
        <div className=' Sm:w-1/2 space-y-3'>
            <h1 className='text-5xl'>Company Name</h1>
            <p className='text-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius molestiae animi quam vel ad, reprehenderit quia odit praesentium vero deleniti sunt esse. Ullam, facilis explicabo. Harum delectus illo expedita possimus!</p>
            <div  className=' flex gap-4'>
                <AppButton title="Get started"/>
                <AppButton title="Contact us"/>

                
            </div>
        </div>
        <div className='sm:w-1/2 bg-slate-600'>
    <img src="img.png" className='h-3/4 w-full' alt="image icon" />
        </div>
        
    </div>
  )
}

export default Section