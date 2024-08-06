import Image from 'next/image'
import React from 'react'
import icon from "../../assets/icon.png"
export const LoginIcon = () => {
  return (
    <Image alt='icon' src={icon} className='w-52 h-52 rounded-full mx-auto border'/>
  )
}
