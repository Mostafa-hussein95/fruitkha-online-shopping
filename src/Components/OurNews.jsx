

import React from "react";
import { Link } from "react-router";
import newsImg1 from "../assets/news-bg-1.jpg"
import newsImg2 from "../assets/news-bg-2.jpg"
import newsImg3 from "../assets/news-bg-3.jpg"

export default function OurNews() {
  const newsImgs = [ 
    {
            id:"1",
            imgSrc: `${newsImg1}`,
            title: "You will vainly look for fruit on it in autumn.",
            detail:
              "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
          },
          {
            id:"2",
            imgSrc: `${newsImg2}`,
            title: "A mans worth has its season, like tomato.",
            detail:
              "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
          },
          {
            id:"3",
            imgSrc: `${newsImg3}`,
            title: "Good thoughts bear good fresh juicy fruit.",
            detail:
              "Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.",
          },
   ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* العنوان الرئيسي */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-[#F28123]">Our</span> News
        </h2>
        <div className="max-w-[100px] h-1 mx-auto my-4 bg-[#F28123] rounded-sm" />
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>
      </div>

      {/* قائمة الأخبار */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {newsImgs.map((news) => (
          <article 
            key={news.id}
            className="group relative bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link 
              to={`/singlenews/${news.id}`}
              className="block overflow-hidden rounded-t-lg"
            >
              <img 
                className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                src={news.imgSrc} 
                alt={news.title}
              />
            </Link>

            <div className="p-5 md:p-6">
              <h3 className="text-xl md:text-2xl text-start font-bold text-gray-900 mb-3">
                {news.title}
              </h3>

              <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-user-tie text-[#F28123]" />
                  Admin
                </span>
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-calendar text-[#F28123]" />
                  2 Feb, 2025
                </span>
              </div>

              <p className="text-gray-600 text-start text-base leading-relaxed mb-5">
                {news.detail}
              </p>

              <Link
                to={`/singlenews/${news.id}`}
                className="inline-flex items-center font-medium text-[#F28123]  hover:text-[#051922] transition-colors duration-300"
              >
                Read more
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
        <Link to="news">
                    <button
                      type="button"
                      className="bg-[#F28123] hover:bg-[#051922] text-white 
                                px-6 py-3 md:px-8 md:py-4 rounded-full mt-20
                                transition-colors duration-300 
                                text-base md:text-lg font-medium cursor-pointer"
                    >
                      More News
                    </button>
                  </Link>
    </section>
  );
}