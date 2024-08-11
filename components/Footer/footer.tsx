import React from 'react'




function Footer() {
  return ( 
   <section className='bg-black h-[86vh] relative'>
      <div className='flex flex-wrap py-28 px-5 md:px-12'>
          <div className='w-full md:w-5/12 '> 
            <p className='text-gray-300'>Contact</p>
          </div>
          <div className='w-full md:w-7/12'>
              <h1 className='text-white text-3xl'>Let’s start a conversation</h1>
              <p className='text-gray-400 mt-2 text-sm'>Join us for a chat to talk about your business</p>
              <button className='px-5 py-2 bg-blue-500 hover:bg-white hover:text-black transition-all text-white rounded-full mt-5'>
                Get in touch
              </button>
          </div>
      </div>

      <div className=' border-t-[1px] border-gray-700'>
        <div className='flex flex-wrap px-5 md:px-12 py-5 '>
        <div className='w-full md:w-5/12 '>
          <h1 className='text-white text-2xl font-bold'>Techn</h1>
        </div>
        <div className='w-full md:w-7/12 mt-16 md:mt-0 flex gap-20'>
            <div>
              <h1 className='text-gray-400'>Sitemap</h1>
              <p className='text-white py-1 mt-4 text-sm'>Home</p>
              <p className='text-white py-1 text-sm'>About</p>
              <p className='text-white py-1 text-sm'>News</p>
              <p className='text-white py-1 text-sm'>Product</p>
            </div>


            <div>
            <h1 className='text-gray-400'>Follow</h1>
              <p className='text-white py-1 mt-4 text-sm'>Instagram</p>
              <p className='text-white py-1 text-sm'>Twitter/X</p>
              <p className='text-white py-1 text-sm'>Linkedin</p>
            </div>
        </div>

      </div>
      </div>

      <div className=' px-5 md:x-12 absolute w-full bottom-5'>
        <div className='flex justify-between'>
        <div className='md:w-5/12 flex '>
        <p className='text-gray-500 text-[12px]'>Copyright ©2024 Techn</p>
        </div>

        <div className='md:w-7/12'>
          <p className='text-gray-500 text-[12px]'>Made by angga</p>
        </div>
        </div>
      </div>
   </section>
  )
}

export default Footer