








import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      <div className='absolute inset-0'>
        <Image 
          alt='Beach Town Mall'
          src="/hero.jpg"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className='object-cover z-0'
        />
        <div className='absolute inset-0 bg-black/70 z-10'></div>
      </div>
      
      <div className='relative z-20 flex flex-col justify-center items-center min-h-screen text-white px-4 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-4xl md:text-6xl lg:text-8xl font-serif tracking-wide font-semibold'>
            <span className='block mb-2'>Welcome to</span>
            <span className='block '>Beach Town</span>
          </h1>
          <p className=' text-base md:text-lg mt-4 px-4 max-w-2xl mx-auto'>
            BeachTown Mall is the largest in Badagry and fully serves the people of this great border town 
            and its environs.
          </p>
          <button className='
            px-10 md:px-20 
            py-2 
            mt-6 
            text-base md:text-xl 
            border-2 
            border-gray-400 
            rounded-full 
            shadow-sm 
            hover:bg-white/20 
            transition-colors 
            duration-300
          '>
            Enter Store
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home