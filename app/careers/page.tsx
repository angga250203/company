import BottomVidiocarres from '@/components/Careers/botomvidio/bottomvidio'
import Hero from '@/components/Careers/Hero/hero'
import ImageSlider from '@/components/Careers/ImageSliders/ImageSlider'
import JObCompany from '@/components/Careers/Job/jobcompany'
import StudentOpertuniti from '@/components/Careers/studentOpertunity/studentOpertunity'
import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/navbar'
import React from 'react'

export default function Careers() {
  return (
    <>
     
      <Hero/>
      <ImageSlider/>
      <JObCompany/>
      <StudentOpertuniti/>
      <BottomVidiocarres/>
      <Footer/>
    </>
  )
}
