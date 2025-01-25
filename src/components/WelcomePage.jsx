import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WelcomePage = () => {
  return (
    <div className='flex p-7 justify-center items-center text-gray-50 flex-col bg-gray-950'>
        <div className='flex mt-10 gap-2 p-3  rounded-full border-[2px] border-white/20 item-center'>
            <div className='text-purple-500 text-sm  bg-white rounded-full p-1'>BG</div>
<p>Banner Generator</p>
        </div>

        <h1 className="mt-10 text-center text-3xl font-bold md:text-5xl">
          Get your {' '}
          <span className="text-purple-500">customized</span> Social banner
        </h1>
        
        <h2 className="mt-4 text-center text-2xl font-bold md:text-5xl">
          for Software Developers & Designers.
        </h2>




<div className="mt-10 flex justify-center">
          <Link href="/banner" className="block">
            <button 
              className="rounded-md bg-white px-7 py-3 text-2xl font-bold text-purple-500 transition-all hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Get Started with Banner Generator"
            >
              Get Started
            </button>
          </Link>
        </div>

         <div className="mt-20 flex justify-center">
           <Image 
            src="/doe.png" 
            alt="Banner Generator Preview" 
            width={800} 
            height={400} 
            className="max-w-full object-contain"
            priority
          />
        </div>


    </div>
  )
}

export default WelcomePage


