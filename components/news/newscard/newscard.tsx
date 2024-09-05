'use client'

import React, { useEffect, useState } from 'react'
import Card from './card'
import { newsData } from '../data/data'
import Image from 'next/image'
import Link from 'next/link'

interface Article {
  title: string;
  image1: string;
  id:number;

}

interface NewsProps {
  articles: Article[];
}


export default function Newscard() {
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json'); // Mengambil file JSON dari direktori publik
      const jsonData = await response.json();
      setData(jsonData); // Mengambil 3 artikel terbaru
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <p>Loading...</p>; 
  }

  const [latestArticle, ...restArticles] = data;
  return (
    <div className='max-w-7xl mx-auto'>

      <Link href={`blog/${latestArticle.id}`}>
       <div className=' py-24 '>
        <div className='md:h-[30vh] py-24 md:flex  items-center justify-between'>
            <h1 className='text-[2rem] md:text-[2.5rem]'>From the Newsroom</h1>
            <p className='text-sm'>A home for inspiring stories on <br className='md:hidden'/> business and technology.</p>
        </div>

        <div className='w-full  h-[90vh] relative overflow-hidden rounded-xl'>
            <div className='absolute z-10 bottom-16 left-2 md:left-8'>
                <h1 className='text-white text-[1.7rem] font-light'>{latestArticle.title}</h1>
                <p className='max-w-md text-white text-sm mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid placeat quam necessitatibus aspernatur </p>
                <p className='text-gray-300 text-xs mt-5'>7 min read</p>
            </div>

            <Image src={latestArticle.image1} className='object-cover hover:scale-125 transition-all ease-in-out duration-1000' fill alt=''/>
        </div>
    </div>
    </Link>
    
    <div className='flex  pt-12 -pb-32 flex-wrap '>
      {restArticles.map((article,index) => {
        return(
          <Card article={article} key={index}/>
          
        )
      })}
       
    </div>
    </div>
  )
}
