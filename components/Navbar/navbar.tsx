'use client'

import { Container } from 'postcss'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion ,AnimatePresence,} from 'framer-motion'
import { exit } from 'node:process'
import PerspektifText from '../utils/perspektifText'
import { useRouter } from 'next/router'
import MobileNva from './mobileNva'
import RoundedButton from '../utils/buttonanim'
import Contain from '../utils/container'


interface navLinksProps{
  title:string,
  href:string,
}

const navLinks:navLinksProps[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "news", href: "/news" },
  { title: "Careers", href: "/careers" },
 
];


function Navbar() {

  
  const [bgchange,setBgChange] = useState(false)

  const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }


  

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 90) {
        setBgChange(true)
      } else {
        setBgChange(false)
      }
    }

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, []);

  const variants = {
    initial: { 
    backgroundColor: 'transparent'},
    animate: { 
      backgroundColor:'white',
     
     
      transition: {
        duration:0.9,
        ease: 'easeInOut'
      }
    },
  };




  return (
    <motion.div 
    className={bgchange?'transition-all  backdrop-blur-xl bg-white/60 fixed w-full px-5 z-50':'transition-all  bg-transparent fixed w-full px-5 z-50'}
    // initial="initial"
    // animate={bgchange ? "animate" : "initial"}
    // transition={transition}
    // variants={variants}
   >
    <div className=' max-w-7xl  mx-auto py-5 md:py-7 justify-between  flex items-center'>
      <Link href={`/`}>
        <h1 className={bgchange  ?'text-[1.7rem] cursor-pointer font-bold':'text-[1.7rem] text-black cursor-pointer font-bold'}>Techn</h1>
     </Link>
      <div
      className={bgchange ? 'lg:flex hidden text-gray-900 items-center gap-7 text-lg':'lg:flex hidden text-gray-900 items-center gap-7 text-lg'}>
        <Link href={`/about`}>
        <PerspektifText label="about"/>
        </Link>
        <Link href={`/news`}>
        <PerspektifText label="News"/>
        </Link>
        <Link href={`/careers`}>
        <PerspektifText label="careers"/>
        </Link>
    
      </div>

      <div className='hidden md:block'>
      <Link href={`/contact`}>
        <RoundedButton className='bg-black px-5 py-3 rounded-full '> 
          <h1 className='text-white z-10'>Contact</h1>
        </RoundedButton>
      </Link>
      </div>

        <div className='block md:hidden'>
        <MobileNva navLinks={navLinks} bgchange={bgchange}/>
        </div>
    </div>
    </motion.div>
  )
}

export default Navbar

