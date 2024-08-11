import React from 'react'

export default function BottomVidiocarres() {
  return (
    <section className=' rounded-xl mt-24 mb-3  overflow-hidden h-[85vh] w-full relative'>
      <div className="absolute px-1 md:px-4 inset-0 z-0">
        <video className="w-full h-full object-cover" loop muted autoPlay>
          <source src="https://cdn.videy.co/uejaOiLU.mp4" type="video/mp4" />
        </video>
      </div>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 md:text-center'>
        <p className='text-gray-300 text-md'>The company
        </p>
        <h1 className='text-white text-2xl md:text-3xl'>What we do</h1>
        <button className='px-5 py-2 bg-blue-500 hover:bg-white hover:text-black transition-all text-white rounded-full mt-5'>
          About Us
        </button>
      </div>
    </section>
  )
}
