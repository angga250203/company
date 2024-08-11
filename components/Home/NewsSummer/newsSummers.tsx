import React, { useState } from 'react';
import Image from 'next/image';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import {motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6';
import { BsArrowRightCircle } from "react-icons/bs";
import Cards from './cards';


function NewsSummer() {

  return (
    <div className='mt-24 mb-20 relative'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-wrap mb-5 justify-between'>
          <article >
            <h2 className='text-[3rem] font-thin  mb-2'>Our <span className='font-normal'>News Artikel</span></h2>
            <p className='max-w-xl mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ex voluptatibus voluptas, dolorem quaerat temporibus cumque quae sunt facilis reiciendis.</p>
          </article>

          <button className='flex items-center gap-2'>More Article <BsArrowRightCircle className='text-xl'/></button>
        </div>

        <Cards/>

      
      </div>
    </div>
  );
}

export default NewsSummer;
