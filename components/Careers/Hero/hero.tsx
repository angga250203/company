import React from 'react'

export default function Hero() {
  return (
    <section>
        <div className='relative w-full h-[80vh]'>
        <video className="w-full h-full object-cover" loop muted autoPlay>
          <source src="https://videos.pexels.com/video-files/3249674/3249674-sd_640_360_25fps.mp4" type="video/mp4" />
        </video>
        </div>
        <div className='max-w-7xl mx-auto text-[1.7rem] px-3 md:text-[2.5rem] font-light leading-tight py-6'>
          <h1 className=''>We are a global team of experts, </h1>
          <h2 className='text-gray-500'>Here to stay, here to make impact.</h2>
        </div>
    </section>
  )
}
