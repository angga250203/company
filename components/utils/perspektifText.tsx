import React, { useState } from 'react'

interface TextProps {
    label: string;
  }



export default function PerspektifText({label}:TextProps) {
    const [hover,setHover] = useState(false);
  return (
    <button className='  overflow-hidden cursor-pointer'>
    <div className='w-[100%] h-[100%] relative '>
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='w-full h-full'>
         <LabelText label={label} hover={hover}/>
    </div>
    </div>
    </button>
  )
}

interface LabelTextProps extends TextProps {
    hover: boolean;
  }

function LabelText({label,hover}:LabelTextProps) {
    return(
    <div className={hover? 'text ht':'text'}>
        <p className={hover? ' htt t': 't'}>{label}</p>
        <p className={hover?'t t2 t2h ': 't t2'}>{label}</p>
    </div>
    )
}