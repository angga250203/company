import React from 'react'

export default function Section1() {
  return (
    <div className='border-b-[1px] border-gray-500 py-[14rem]'>
        <div className='max-w-7xl mx-auto px-5'>
            <h1 className='text-white text-[2.5rem]'>If you’re interested in any form<br/>
                of collaboration, drop a line at
            </h1>
            <p className='text-gray-400 text-[2rem] cursor-pointer mt-5'>Techn.support@gmail.com</p>
        </div>
        <div>
             <div className='px-5 mt-16'>
                <video className="w-full rounded-lg  h-full object-cover" loop muted autoPlay>
                    <source src="/contact.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
  )
}
