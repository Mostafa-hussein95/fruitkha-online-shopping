import React from 'react'
import { Link } from 'react-router';
import saleBgImg from "../assets/1.jpg"

export default function Sale() {
  return (
    <div className='relative h-96 md:h-[600px] w-full bg-cover bg-center' style={{backgroundImage:`url(${saleBgImg})`}}>
      <div className='absolute inset-0 bg-black/2 flex items-center'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-2xl lg:max-w-3xl xl:max-w-4xl text-[#051922] text-start'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6'>
              December sale is on! <br />
              with big <span className='text-[#F28123]'>Discount...</span>
            </h1>
            
            <div className='flex items-center gap-3 mb-8'>
              <span className='text-xl md:text-3xl font-medium'>UpTo !</span>
              <span className='text-5xl md:text-7xl font-bold text-[#F28123]'>50%</span>
              <span className='text-xl md:text-3xl font-medium'>OFF</span>
            </div>

            <Link to="/shop">
              <button
                type="button"
                className="bg-[#F28123] hover:bg-[#051922] text-white 
                          px-6 py-3 md:px-8 md:py-4 rounded-full
                          transition-colors duration-300 
                          text-base md:text-lg font-medium cursor-pointer"
              >
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}