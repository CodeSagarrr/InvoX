"use client"
import { MoveLeft } from 'lucide-react'
import React from 'react'

function Header() {

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className='w-full p-4 relative shadow-sm'>
        <div onClick={goBack} className='absolute sm:flex items-center justify-center top-6 hidden left-10  w-15 h-8 bg-amber-500 rounded-3xl cursor-pointer'>
            <MoveLeft className=' w-6 h-6 text-white'/>
        </div>
        <div className='max-w-62 p-2 mx-auto bg-amber-500 rounded-3xl text-center text-white'>
            <p className='font-semibold font-[geom]'>Complete Your Profile</p>
        </div>
        <div className='max-w-full p-4 mx-auto'>
        <p className='text-xl text-zinc-500 font-medium font-[ubuntu] text-center'>Set up your business details to get started.</p>
        </div>
    </div>
  )
}

export default Header