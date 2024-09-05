'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'

interface Article {
  title: string;
  image1: string;
  id:number;

}

interface NewsProps {
  articles: Article[];
}

const Card: React.FC<NewsProps> = ({ articles }) => {
  const anim = {
    initial: { scale: 1 },
    open: { scale: 3, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
    closed: { scale: 1 }
  };

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Tambahkan pengecekan sebelum memetakan articles
  if (!articles || articles.length === 0) {
    return <p>No articles available</p>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
      {articles.map((article, index) => (
        <div key={index} className='mb-5'>
          <div className='relative h-[50vh] mb-2'>
            <Image src={article.image1} alt={''} layout='fill' objectFit='cover' className='rounded-lg' />
          </div>
          <h1 className='font-light text-2xl mt-2 mb-5'>{article.title}</h1>
          <Link href={`blog/${article.id}`}>
          <button
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className='mt-5 border-black border-2 items-center shadow-lg gap-7 rounded-full flex justify-start text-black px-4 py-[14px]'
          >
            <span className='relative'>Read <span className='font-semibold'>Article</span></span>
            <motion.div
              variants={anim}
              animate={hoverIndex === index ? 'open' : 'closed'}
              className='bg-black text-white flex justify-center items-center w-[15px] h-[15px] rounded-full'
            >
              <FaArrowRight className={`${hoverIndex === index ? 'opacity-100 p-[5px]' : 'opacity-0'}`} />
            </motion.div>
          </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;


