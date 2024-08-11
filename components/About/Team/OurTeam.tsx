import Contain from '@/components/utils/container'
import React from 'react'
import { service } from './data'
import Image from 'next/image'

export default function OurTeam() {
  return (
    <Contain variant='min-h-screen mt-12'>
    <div className='flex flex-wrap items-center justify-between'>
        <h1 className=''>Our  <span className='font-light'>Amazing  Team</span></h1>   
    </div>
    <div className='flex flex-wrap  justify-between'>
    {service.map((service,index) => (
         <div className='w-[49%]  md:w-[24%]'>
         <div className=' relative mt-12 overflow-hidden rounded-md h-[30vh] md:h-[32rem]'>
         <Image 
                 src={service.image}
                 alt='pameran pt helber'
                 className='absolute object-cover'
                fill
                 />
             
         </div>
         <div>
             <h1 className='text-[12px] md:text-[18px] mt-2 md:mt-5 '>{service.name}</h1>
             <p className='text-[12px] '>{service.position}</p>
         </div>
         </div>
   ) ) }

    
    </div>

</Contain>
  )
}
