

import React from "react";

export default function Services() {
  return (
    <div className="bg-slate-100 py-8 md:py-12">
      <div className="container mx-auto px-20 ">
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8 w-full items-center justify-center">
          
          {/* Service Item 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:w-[30%]">
            <div className="text-3xl md:text-4xl border-2 border-dotted rounded-full p-3 md:p-4 border-[#f28136]">
              <i className="fa-solid fa-truck-fast" style={{ color: "#f28136" }}></i>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg md:text-xl lg:text-2xl mb-1">Free Shipping</h4>
              <p className="text-sm md:text-base">When order over $75</p>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:w-[30%]">
            <div className="text-3xl md:text-4xl border-2 border-dotted rounded-full p-3 md:p-4 border-[#f28136]">
              <i className="fa-solid fa-phone-volume" style={{ color: "#f28136" }}></i>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg md:text-xl lg:text-2xl mb-1">24/7 Support</h4>
              <p className="text-sm md:text-base">Get support all day</p>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:w-[30%]">
            <div className="text-3xl md:text-4xl border-2 border-dotted rounded-full p-3 md:p-4 border-[#f28136]">
              <i className="fa-solid fa-rotate" style={{ color: "#f28136" }}></i>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg md:text-xl lg:text-2xl mb-1">Refund</h4>
              <p className="text-sm md:text-base">Get refund within 3 days!</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}