

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slide1 from "../assets/1.png" ;
import slide2 from "../assets/2.png" ;
import slide3 from "../assets/3.png" ;
import slide4 from "../assets/4.png" ;
import slide5 from "../assets/5.png" ;

export default function Sponsors() {
  const slides = [
    { src: `${slide1}`},
    { src: `${slide2}` },
    { src: `${slide3}`},
    { src: `${slide4}` },
    { src: `${slide5}` },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-20 md:h-40 px-4 md:px-14 cursor-pointer group"
          >
            <div className="h-full flex items-center justify-center p-2 md:p-4 transition-all duration-300 hover:scale-105">
              <img
                src={slide.src}
                alt="Sponsor"
                className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
