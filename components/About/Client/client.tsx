'use client'

import React, { useState } from 'react'
import { relasi } from './data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { IoCloseOutline } from 'react-icons/io5';

export default function Client() {
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
      setClickedIndex(prevIndex => prevIndex === index ? null : index);
    };
  return (
    <div className='max-w-7xl border-t-2 py-5  px-3  mx-auto min-h-screen'>

    <h1 className='py-6'>Our clients</h1>
    <div className='flex flex-wrap justify-between'>

    {relasi.map ((relas,index) => (
        <div   key={index} 
        onClick={() => handleCardClick(index)}  className='w-full lg:w-[33%] overflow-hidden h-[45vh] relative bg-gray-300 rounded-lg mt-3'>
        <div className=" ">
            <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
             <motion.div 
               initial={{ y: 0 }}
               animate={{ y: clickedIndex === index  ? -140 : 0 ,scale:clickedIndex === index? 0.70:1 }}
            //    rubah clicked index
                 //clickedCards[index]
               transition={{ duration:0.4,stiffness:100}}
             className='w-[9rem] h-[1.7rem] '>
                 <Image src={relas.src} alt='logo-partner' fill />
             </motion.div>
             </div>
            <div className='relative'>
                <motion.div 
                 initial={{ y: 100,opacity:0 }}
                 animate={{ y: clickedIndex === index ? 0 : 150 ,opacity:clickedIndex === index? 1:0 }}
                 transition={{ duration:0.5}}
                className=' flex items-center h-[45vh]'>
                     <p className='absolute px-5 text-sm'>{relas.descripsi}</p>
                 </motion.div>
            </div>

            <motion.div
            initial={{ rotate:0 }}
            animate={{ rotate: clickedIndex === index ? 45 : 0 , }}
            transition={{ duration:0.4}}
            className='absolute bottom-7 right-7'>
                <IoCloseOutline className='bg-black w-8 h-8 p-1 font-bold rounded-full text-white rotate-45' />
            </motion.div>
        </div>
  
    </div>
    ))}
        

      
        </div>
   </div>
  )
}
