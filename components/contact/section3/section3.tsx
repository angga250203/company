import Image from 'next/image'
import React from 'react'

export default function Section3() {
  return (
    <section className='max-w-7xl mx-auto py-32 px-5 flex flex-wrap justify-between '>
        <div className='w-full md:w-4/12 h-[60vh] rounded-lg overflow-hidden relative'>
            <Image src='https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='object-cover' alt='kantor' fill/>
        </div>
        <div className='w-full md:w-[65%] h-[60vh] rounded-lg overflow-hidden relative'>
            <Image src='https://framerusercontent.com/images/Zlz1h2PsNKVA4gGWdMoxcZIYI.png' alt='kantor' fill className='object-cover'/>
        </div>

    </section>
  )
}
