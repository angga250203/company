'use client'

import React from 'react'
import DoubleComponents from './doublecomponents'
import { service } from '../data/data'
import Image from 'next/image'
import RoundedButton from '@/components/utils/buttonanim'

export default function Services() {
  return (
    <div className='max-w-7xl md:mx-auto  md:border-black mx-3 py-12 border-gray-500 border-x-[1px] md:border-x-2 my-12 min-h-screen'>
      <div className='flex border-gray-500 border-b-[1px]  md:border-b-2 md:border-black flex-wrap mx-2 md:mx-5 items-center justify-between'>
        <div className='w-full md:w-1/2 px-3 md:px-12 md:border-r-2 border-black'>
            <h1 className='text-2xl  uppercase font-semibold  py-5 md:py-12 '>Services</h1>
        </div>
        <div className='w-full md:w-1/2 px-3 md:px-12 '>
            <p className='text-md text-gray-500   py-5  md:py-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sit adipisci! Odio esse nesciunt alias. Fugit nulla nam impedit cupiditate? </p>
        </div>
      </div>

        <div className='flex flex-wrap   mt-20'>

          {service.map((servis,index) => {
            return(
              <div className='w-full md:w-1/2 mt-12 px-2 mx-2 md:mx-0 border-gray-500 border-b-[1px] pb-12  md:px-12'>
              <div className='flex flex-wrap items-center justify-between'>
                <h1 className='text-2xl font-bold text-white bg-black px-2 py-1 '>{servis.title}</h1>
                <p className='w-full pt-2 uppercase'>{servis.kategory}</p>
              </div>
              <div className='border-gray-500 border-y-[1px]  md:border-y-2 md:border-black my-12'>
                <div className='w-full h-[50vh] md:h-[40vh] my-5 relative'>
                  <Image src={servis.image} className='object-cover' fill alt=''/>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-600'>{servis.description}</p>
                <div className='flex pt-4'>
                  <RoundedButton className='bg-black text-white px-5 py-2 rounded-md  flex
                  '>
                    <p className='z-10'>Show Detail</p>
                  </RoundedButton>
                </div>
              </div>
            </div>
            )
          })}
           


            
        </div>
    </div>
  )
}
