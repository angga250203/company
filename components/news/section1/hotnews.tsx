import Image from 'next/image'
import React from 'react'

export default function Hotnews() {
  return (
    <div className='min-h-screen max-w-7xl px-3 mx-auto py-24'>
        <div className='md:h-[30vh] py-24 md:flex  items-center justify-between'>
            <h1 className='text-[2rem] md:text-[2.5rem]'>From the Newsroom</h1>
            <p className='text-sm'>A home for inspiring stories on <br className='md:hidden'/> business and technology.</p>
        </div>

        <div className='w-full  h-[90vh] relative overflow-hidden rounded-xl'>
            <div className='absolute z-10 bottom-16 left-2 md:left-8'>
                <h1 className='text-white text-[1.7rem] font-light'>Lorem ipsum dolor sit amet consectetur</h1>
                <p className='max-w-md text-white text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid placeat quam necessitatibus aspernatur </p>
                <p className='text-gray-300 text-xs mt-5'>7 min read</p>
            </div>

            <Image src='https://images.unsplash.com/photo-1719937206098-236a481a2b6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D' className='object-cover' fill alt=''/>
        </div>
    </div>
  )
}
