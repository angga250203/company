'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import {motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6';
import { BsArrowRightCircle } from "react-icons/bs";
import Cards from './cards';
import Card from './cards';
import path from 'path';
import fs from 'fs';

function NewsSummer() {
    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json'); // Mengambil file JSON dari direktori publik
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData.slice(0, 3)); // Asumsi bahwa struktur data adalah { blog: [...] }
    };

    fetchData();
  }, []);


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

        <Card articles={data}/>

      
      </div>
    </div>
  );
}


export default NewsSummer;