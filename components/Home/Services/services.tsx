'use client'

import React from 'react'
import DoubleComponents from './doublecomponents'
import { service } from '../data/data'
import Image from 'next/image'
import RoundedButton from '@/components/utils/buttonanim'

export default function Services() {
  return (
    <div className='max-w-7xl md:mx-auto   mx-3 py-12  my-12 min-h-screen'>
      <div className='flex  flex-wrap mx-2 md:mx-5 items-center justify-between'>
        <div className='w-full md:w-1/2 px-3 md:px-12'>
            <h1 className='text-2xl  uppercase font-semibold  py-5 md:py-12 '>Services</h1>
        </div>
        <div className='w-full md:w-1/2 px-3 md:px-12 '>
            <p className='text-md text-gray-500   py-5  md:py-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sit adipisci! Odio esse nesciunt alias. Fugit nulla nam impedit cupiditate? </p>
        </div>
      </div>

        <div className='flex flex-wrap   mt-20'>

          {service.map((servis,index) => {
            return(
              <div className='w-full md:w-1/2  overflow-hidden rounded-2xl h-[80vh] relative mt-12 px-2 mx-2 md:mx-0  pb-12 '>

                <div className='absolute bottom-24 left-24'></div>
                <div className='w-full h-full  '>
                  <Image src={servis.image} className='object-cover px-1 r' fill alt=''/>
                </div>
     
              <div>
               
                
              </div>
            </div>
            )
          })}
           


            
        </div>
    </div>
  )
}
