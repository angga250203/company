'use client'

import RoundedButton from '@/components/utils/buttonanim';
import PerspektifText from '@/components/utils/perspektifText';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Article {
  title: string;
  image1: string;
  id:number;

}

interface CardProps {
  article: Article;
}



const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <div className='w-full md:w-4/12 mt-16 px-2' key={article.id}>
        <div className='w-full h-[50vh] overflow-hidden rounded-lg relative'>
            <Image src={article.image1} alt={article.title} fill/>
        </div>
        <article className='mt-3 flex flex-col justify-between '>
            <h1 className='text-2xl font-light'>{article.title}</h1>
            <div className='flex'>
            <Link href={`blog/${article.id}`}>
             <p className='text-gray-500 mt-3 under2'>show more</p>
              
            </Link>
           </div>
        </article>
    </div>
  )
}

export default Card
