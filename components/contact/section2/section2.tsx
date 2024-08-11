import React from 'react'

export default function Section2() {
  return (
    <div className=' '>
      
      <section className='max-w-7xl mx-auto py-20 flex flex-wrap px-5'>
        <div className='w-full md:w-1/2'>
            <h1 className='text-white text-3xl'>Or send us a message</h1>
        </div>
        <div className='w-full md:w-1/2'>
            <input type="text"  placeholder='Name' className='w-full h-10 px-5 rounded-lg bg-gray-700'/>

            <input type="text"  placeholder='Email' className='w-full mt-5 h-10 px-5 rounded-lg bg-gray-700'/>

            <input type="text"  placeholder='Name' className='w-full mt-5 h-32 px-5 rounded-lg bg-gray-700'/>

            <button className='w-full py-4 bg-gray-700 mt-5 rounded-lg text-white'>submit</button>
        </div>
        </section>


        <div className='border-t-[1px]  border-gray-800'>
            <div className='max-w-7xl py-12 mx-auto flex flex-wrap'>

                <div className='w-3/12 text-white '>
                    <h1 className='text-xl'>New Bussines</h1>
                    <p className='mt-3'>Tommy Jacobson</p>
                    <p className='text-sm mt-1'>TommyJacobson.co.id</p>
                </div>

                <div className='w-3/12 text-white '>
                    <h1 className='text-xl'>Publicity</h1>
                    <p className='mt-3'>Monica Lambert</p>
                    <p className='text-sm mt-1'>MonicaLambert.co.id</p>
                </div>

                <div className='w-3/12 text-white '>
                    <h1 className='text-xl'>Accounts</h1>
                    <p className='mt-3'>Olivia Bennett</p>
                    <p className='text-sm mt-1'>OliviaBennett.co.id</p>
                </div>

                <div className='w-3/12 text-white '>
                    <h1 className='text-xl'>Careers/Jobs</h1>
                    <p className='mt-3'>Marcus Nguyen</p>
                    <p className='text-sm mt-1'>MarcusNguyen.co.id</p>
                </div>

            </div>
        </div>

    </div>
  )
}
