'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import { FaArrowRight } from 'react-icons/fa6';
import { JobData } from '../data/data';
import { EmailLink } from './email';


export default function JObCompany() {
  return (
    <div className='max-w-7xl mx-auto py-12 px-3'>
      <h1 className='text-3xl'>Open Roles</h1>

      <div className='py-16'>
        <div className='hidden md:block'>
        <div className='flex text-gray-500 pb-5'>
            <div className='w-6/12'>Position</div>
            <div className='w-3/12'>Location</div>
            <div className='w-3/12'>Category</div>
        </div>
        </div>

      {JobData.map ((datas,index) => (
          <Dialog key={index}>
          <DialogTrigger asChild className='cursor-pointer py-3' >
            <section>
              <div className='hidden md:block'>
                <div className='flex  border-b-[1px] w-full py-4'>
                  <div className='md:w-6/12 text-3xl '>{datas.position}</div>    
                    <div className='md:w-3/12  mr-3 md:mr-0 text-gray-400'>{datas.location}</div>
                    <div className='md:w-3/12 text-gray-400'>{datas.category}</div>
                  <div>
                </div>
              </div>
              </div>

              <div className='block md:hidden '>
               
               <div className='flex justify-between py-3 border-b-[1px] items-center'>
               <div>
                  <h1 className='text-2xl'>{datas.position}</h1>  
                    <div className='flex'>
                      <p className=' mr-2 '>{datas.location}</p>
                        <span className='text-gray-400'>/</span>
                      <p className='ml-2 text-gray-400'>{datas.category}</p>
                    </div>
               </div>

               
               <FaArrowRight className='text-2xl'/>
               
               </div>


               </div>
          
                
            
            
            </section>
            </DialogTrigger> 
        
          <DialogContent  className=''>
            <DialogHeader>
              <DialogTitle className='text-start'>
              <h1 className='text-2xl pb-1 '>{datas.position}</h1>
              <p className='text-gray-500 font-normal border-b-[1px] pb-3'>{datas.jenis}</p>
              </DialogTitle>
              <DialogDescription className='text-start'>
                <p className='text-gray-300 pt-3'>Overview</p>
               <p className='py-3'>{datas.description}</p>
              </DialogDescription>
             <DialogFooter>
             <EmailLink
                subject={datas.position}
               
              />
            </DialogFooter>
            </DialogHeader>
          </DialogContent>
       
        </Dialog>
      ))}
         

       

     

      </div>
    </div>
  )
}

