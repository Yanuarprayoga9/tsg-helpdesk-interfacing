import React from 'react'

type props = {
    heading: string ;
    subHeading: string ;
    
}
export const LoginHeader:React.FC<props> = (props) => {
  return (
    <div className='w-full text-center'>
        <h1 className='text-3xl font-semibold'>{props.heading}</h1>
        <p className='text-xl font-semibold'>{props.subHeading}</p>
    </div>
  )
}
