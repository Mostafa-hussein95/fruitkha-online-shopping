import React from "react";
import { Link } from 'react-router';
import aboutImg from "../assets/abt.jpg"

export default function AboutUs() {
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] my-12 md:my-24 mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-15 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative group border-transparent rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
          <img 
            src= {aboutImg}
            className="w-full h-auto object-cover max-h-[500px]" 
            alt="About Us"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Link className="hover:scale-110 transition-transform">
              <i className="fa-solid fa-play text-4xl md:text-6xl text-[#F28123] hover:text-gray-200"></i>
            </Link>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-2 lg:space-y-4">
          <p className="text-base md:text-lg text-gray-500">Since Year 1999</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            We are <span className="text-[#F28123]">Fruitkha</span>
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa
            porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit
            amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum
            velit. Nam eu molestie lorem. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Sapiente facilis illo repellat
            veritatis minus, et labore minima mollitia qui ducimus.
          </p>
          <Link to="about" className="mt-6 md:mt-10">
            <button
              type="button"
              className="text-white cursor-pointer bg-[#F28123] hover:bg-[#051922] transition-colors duration-300 font-medium rounded-full text-base md:text-lg px-4 py-2.5 md:px-6 md:py-3"
            >
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}