'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { DataImage } from '../data/data';



export default function ImageSlider() {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;
  
    useEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start:0,
         
          onUpdate: e => direction = e.direction * -1
        },
        x: "-500px",
      })
      requestAnimationFrame(animation);
    }, [])
  
   const animation = () => {
  
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(ref1.current, {xPercent: xPercent})
    gsap.set(ref2.current, {xPercent: xPercent})
     
      xPercent += 0.1 * direction;
      requestAnimationFrame(animation);
   }
  
  return (
    <div className='py-24  mt-20 md:mt-36 overflow-hidden'>
     

    <div ref={slider} className='flex w-full gap-2 pr-12 '>

    <div ref={ref1} className='flex justify-center gap-2  -mt-12 items-center   '>

    {DataImage.map((datas,index) => {
        return(
         <div key={index}
        className={`${datas.variant}  shadow-xl mx-5 relative pt-5  rounded-2xl lg:rounded-3xl`}>
       <Image src={datas.src} fill alt={datas.alt} className='object-cover'/>
      </div>
        )
    })}
      
      
    
    </div>

    <div ref={ref2} className='flex gap-2 justify-center -mt-12 items-center   '>
     
    

    {DataImage.map((datas,index) => {
        return(
         <div key={index}
        className={`${datas.variant}  shadow-xl mx-5 relative pt-5  rounded-2xl lg:rounded-3xl`}>
       <Image src={datas.src} fill alt={datas.alt} className='object-cover'/>
      </div>
        )
    })}

      
    
    </div>

   
    
    </div>
  </div>
  )
}
