

import React from 'react'
import deal from "../assets/a.jpg" 
import { Link } from 'react-router';
import StylishCountdown from './StylishCountdown';

export default function Deal() {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-12 items-center justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-lg">
              {/* Discount Badge */}
              <div className="absolute top-14 left-14 md:top-10 md:left-10 z-10 
                            bg-[#F28123] text-white rounded-full p-4 md:p-6 
                            flex flex-col items-center justify-center
                            transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0">
                <p className="text-xl md:text-3xl font-bold">30%</p>
                <p className="text-xs md:text-sm">off per kg</p>
              </div>
              
              <img 
                className="w-full h-64 md:h-[500px] object-cover rounded-lg"
                src={deal} 
                alt="Monthly Deal" 
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-[#F28123]">Deal </span>of the month
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">Hikan Strawberry</p>
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
              Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! 
              Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus 
              error sit voluptatem accusant
            </p>

            <div className="space-y-6">
              <div className="text-center ">
                <h2 className="text-lg md:text-xl font-semibold text-red-600 mb-4">
                  Hurry! Sale ends in:
                </h2>
                <StylishCountdown />
              </div>
              
              <Link to="cart" className="inline-block">
                <button 
                  type="button" 
                  className="bg-[#F28123] hover:bg-[#051922] text-white 
                            px-6 py-3 md:px-8 md:py-4 rounded-full 
                            transition-colors duration-300 
                            flex items-center gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-cart-plus" />
                  <span className="text-sm md:text-base">Add To Cart</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}