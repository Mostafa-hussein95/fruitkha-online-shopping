

import React from "react";
import whyImg from "../assets/feature-bg.jpg" 

export default function WhyFruithka() {
  const features = [
    {
      icon: "fa-truck-fast",
      title: "Home Delivery",
      text: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
    },
    {
      icon: "fa-money-bill-1",
      title: "Best Price",
      text: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
    },
    {
      icon: "fa-briefcase",
      title: "Custom Box",
      text: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
    },
    {
      icon: "fa-arrows-rotate",
      title: "Quick Refund",
      text: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
        {/* Content Section */}
        <div className="order-2 lg:order-1 text-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-9">
            Why <span className="text-[#f28136]">Fruitkha</span>
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="text-xl border-2 border-dotted rounded-full p-3 lg:p-4 border-[#f28136]">
                    <i className={`fa-solid ${feature.icon}`} style={{ color: "#f28136" }} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm lg:text-base">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2">
          <img 
            src={whyImg}
            alt="Why choose Fruitkha" 
            className="w-full h-full object-cover rounded-xl shadow-lg max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}