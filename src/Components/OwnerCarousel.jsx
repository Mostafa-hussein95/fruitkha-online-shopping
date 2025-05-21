

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.png"

export default function OwnerCarousel() {
  const slides = [ 
    {
            src: `${avatar1}`,
            alt: "Avatar 1",
            name: "Sara Hakim",
            title: "Local Shop Owner",
            about:
              " '' Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '' ",
          },
          {
            src: `${avatar2}`,
            alt: "Avatar 2",
            name: "7mada",
            title: "Local Shop Owner",
            about:
              " '' Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '' ",
          },
          {
            src: `${avatar3}`,
            alt: "Avatar 3",
            name: "David Niph",
            title: "Local Shop Owner",
            about:
              " '' Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '' ",
          },
   ];

   const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    pauseOnHover: true, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  };

  // مكون السهم المخصص
  const SampleNextArrow = () => <div className="hidden" />;
  const SamplePrevArrow = () => <div className="hidden" />;

  return (
    <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-12">
      <Slider {...settings} nextArrow={<SampleNextArrow />} prevArrow={<SamplePrevArrow />}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2 sm:px-4 focus:outline-none">
            <div className="bg-white rounded-2xl  p-6 sm:p-8 mx-auto max-w-3xl">
              <div className="flex flex-col items-center text-center">
                {/* الصورة */}
                <div className="mb-6 relative">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#F28123]/20"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-[#F28123]/50 animate-ping" />
                </div>

                {/* الاسم والمسمى الوظيفي */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  {slide.name}
                </h3>
                <p className="text-sm sm:text-base text-[#F28123] font-medium mb-4">
                  {slide.title}
                </p>

                {/* النص */}
                <blockquote className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                  {slide.about}
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}