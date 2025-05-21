

import React from "react";
import { Link } from "react-router";
import headerBg from "../assets/hero-bg.jpg"

export default function Header({ title, fruitBtn, contactBtn, pageHdr }) {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover bg-gray-950 bg-blend-multiply h-screen">
      {/* Background Image as overlay */}
      <div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-30" style={{backgroundImage:`url(${headerBg})`}}></div>

      <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-24 sm:py-32 lg:py-48">
        <p className="mb-4 text-sm font-bold text-[#F28123] tracking-widest sm:text-lg md:text-xl">
          {title}
        </p>

        <h1 className="mb-6 text-3xl font-extrabold tracking-tight leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {pageHdr}
        </h1>

        <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row sm:gap-6">
          {fruitBtn && (
            <Link
              to="shop"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#F28123] rounded-lg hover:bg-[#051922] transition duration-300"
            >
              Fruit Collection
            </Link>
          )}
          {contactBtn && (
            <Link
              to="contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-[#F28123] rounded-lg hover:bg-[#F28123] hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
