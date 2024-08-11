import React, { ReactNode } from 'react'

interface ContainerProps{
    children:ReactNode;
    variant?:string;
}

const Contain: React.FC<ContainerProps> = ({children,variant}) => {
  return (
    <div className={`max-w-7xl mx-auto px-3 ${variant}`}>
        {children}
    </div>
  )
}

export default Contain
