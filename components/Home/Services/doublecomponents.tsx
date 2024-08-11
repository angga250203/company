'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'; 

interface Service {
    image: string;
    title: string;
    description: string;
    kategory:string,
  }
  
  interface DoubleComponentsProps {
    service: Service[];
    reversed?: boolean;
  }
  

export default function DoubleComponents({service, reversed}:DoubleComponentsProps) {

    const firstImage = useRef<HTMLDivElement>(null);
    const secondImage = useRef<HTMLDivElement>(null);
    let requestAnimationFrameId: number | null = null;
    let xPercent = reversed ? 100 : 0;
    let currentXPercent = reversed ? 100 : 0;
    const speed = 0.15;

    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize(); // Check screen size on initial render
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    
    const manageMouseMove = (e : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isLargeScreen) return;

        const { clientX } = e;
        xPercent = (clientX / window.innerWidth) * 100;

        if (!requestAnimationFrameId) {
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    }

    const animate = () => {
        // Add easing to the animation
        const xPercentDelta = xPercent - currentXPercent;
        currentXPercent = currentXPercent + (xPercentDelta * speed);
    
        // Change width of images between 33.33% and 66.66% based on cursor
        const firstImagePercent = 66.66 - (currentXPercent * 0.33);
        const secondImagePercent = 33.33 + (currentXPercent * 0.33);
    
        if (firstImage.current && secondImage.current) {
          firstImage.current.style.width = `${firstImagePercent}%`;
          secondImage.current.style.width = `${secondImagePercent}%`;
        }
    
        if (Math.round(xPercent) === Math.round(currentXPercent)) {
          window.cancelAnimationFrame(requestAnimationFrameId!);
          requestAnimationFrameId = null;
        } else {
          window.requestAnimationFrame(animate);
        }
      };

    return(
      <div onMouseMove={(e) => {manageMouseMove(e)}} className="flex flex-wrap  gap-2 h-[45vw] mt-[10vh]">
  
        <div ref={firstImage} className="w-full min-h-screen md:imageContainer">
          <div className="pb-[65%] relative">
            <Image 
              src={`${service[0].image}`}
              fill={true}
              alt={"image"}
              className='object-cover'
            />
          </div>
          <div className='p-2'>
              <h3 className='text-xl'>{service[0].title}</h3>
              <p className='text-gray-500'>{service[0].kategory}</p>
              
          </div>
        </div>
  
        <div ref={secondImage} className="imageContainer">
          <div className='pb-[65%] relative'>
            <Image 
              src={`${service[1].image}`}
              fill
              alt={"image"}
              className='object-cover'
            />
          </div>
          <div className=' p-2'>
          <h3 className='text-xl'>{service[1].title}</h3>
              <p className='text-gray-500'>{service[1].kategory}</p>
          </div>
        </div>
  
      </div>
    )
}