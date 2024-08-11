'use client'

import RoundedButton from '@/components/utils/buttonanim'
import Image from 'next/image'
import React from 'react'

export default function StudentOpertuniti() {
  return (
    <div className='max-w-7xl mx-auto px-5  flex flex-wrap '>
        <div className='w-ful md:w-6/12 py-12 md:h-[80vh] flex md:items-center '>
        <div>
         <h1 className='text-3xl'>Student<br/>
         <span className='text-gray-400'>Opportunities</span></h1>
         <p className='max-w-md mt-5'>We’re always on the lookout for great, smart, talented, and fun people.  Within our intimate team, we cherish the diverse backgrounds, cultures and perspectives that each individual brings. Our team members represent a tapestry of experiences, talents and skills that enriches our collective creativity.</p>

        <div className='flex'>
        <RoundedButton className='px-5 py-4 mt-5 bg-black rounded-full text-white'>
         <h1 className='z-10'>Send Your Portofolio</h1>
         </RoundedButton>
         </div>
        </div>
        </div>
        <div className='w-full md:w-6/12  relative h-[50vh] rounded-md overflow-hidden md:h-[80vh]'>
            <Image src="https://plus.unsplash.com/premium_photo-1679936310188-ca4e05d36bac?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='hr' className='object-cover' fill />
        </div>
    </div>
  )
}
