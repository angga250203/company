'use client'

import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Index() {
  return (
    <div className=''>
    <div className='h-screen -z-10 relative overflow-hidden bg-blue-300'>
  
      <video className="w-full h-full object-cover" loop muted autoPlay>
        <source src="https://cdn.videy.co/042aTQf5.mp4" type="video/mp4" />
      </video>
    <div className='absolute bottom-28'>
    <h1 className=' px-3 md:px-12 text-[2rem] md:text-[3rem] text-shadow-judul text-white mt-[9rem]'>We partner with founders <br/> who
    are ready to make a change</h1>
    <p className='text-gray-300 flex gap-1 items-center text-sm px-3 md:px-16'>More about us <MdKeyboardArrowDown className='text-2xl'/></p>
    </div>
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
