import Section1 from '@/components/contact/section1/section1'
import Section2 from '@/components/contact/section2/section2'
import Section3 from '@/components/contact/section3/section3'
import Navbar from '@/components/Navbar/navbar'
import React from 'react'

export default function Page() {
  return (
    <div className='bg-black'>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        
    </div>
  )
}
