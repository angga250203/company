'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6';


function Hero() {

  const anim = {
    initial: {
     scale:1
    },
    open: {scale:3,  transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {scale:1}

}

 // Menu Title Slide Up
 const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
}

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div className='relative  h-screen  '>
        <div className='flex  h-[78vh] items-end '>
          <div className=' px-3 md:px-12  '>
            <div className='overflow-hidden'>
             <motion.h1
             variants={titleSlideUp}
             initial="initial"
             animate="animate"
             transition={transition}
             className='text-[2.5rem] md:text-[3.2rem] leading-[1.2] text-shadow-judul   text-white'>Pushing Boundaries,<br/> Creating the Future</motion.h1></div>
             <p className='text-gray-200 mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/>Deleniti quaerat fugiat nisi sequi sapiente ut?</p>

       <div className=''>
         <button onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' mt-5  bg-white  items-center shadow-xl gap-7 rounded-full flex justify-start text-black px-6 py-[20px]'>
            <span className='relative'>Join <span className='font-semibold'>Now</span></span>
            <motion.div variants={anim} animate={isHover ? "open" : "closed"}
              className='bg-black text-white flex justify-center items-center w-5 h-5 rounded-full' >
                {isHover? ( <FaArrowRight className='rotate-[-30deg] px-[5px] py-[5px]  '/>):
                ( <FaArrowRight className='rotate-[-30deg]  opacity-0 '/>)}
            </motion.div>
        
        </button>
      </div>
      </div>
        </div>

       

        <div className='w-full h-screen absolute top-0 -z-10 flex '>
        <video className="w-full h-full object-cover" loop muted autoPlay>
          <source src="https://videos.pexels.com/video-files/5155617/5155617-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
        </div>
        <style jsx>{`
        .text-shadow-judul {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
        .text-shadow-p {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </div>
  )
}

export default Hero