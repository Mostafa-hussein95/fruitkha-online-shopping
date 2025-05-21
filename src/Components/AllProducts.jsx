import React, { useState } from "react";
import { Link } from 'react-router';
import prodImg1 from "../assets/product-img-1.jpg"
import prodImg2 from "../assets/product-img-2.jpg"
import prodImg3 from "../assets/product-img-3.jpg"
import prodImg4 from "../assets/product-img-4.jpg"
import prodImg5 from "../assets/product-img-5.jpg"
import prodImg6 from "../assets/product-img-6.jpg"
import prodImg7 from "../assets/tomato.jpg"
import prodImg8 from "../assets/carrot.jpg"
import prodImg9 from "../assets/onion.jpg"



export default function AllProducts() {
  const [products] = useState([
    {
            id:"1",
            imgUrl: `${prodImg1}`,
            title: "strawberry",
            price: "50 EGP",
            category:"fruits"
          },
          {
            id:"2",
            imgUrl: `${prodImg2}`, 
            title: "blueberry",
            price: "50 EGP",
            category:"fruits"
          },
          {
            id:"3",
            imgUrl: `${prodImg3}`, 
            title: "lemon",
            price: "50 EGP",
            category:"fruits"
          },
          {
            id:"4",
              imgUrl: `${prodImg4}`,
              title: "Avocado",
              price: "50 EGP",
              category:"fruits"
            },
            {
              id:"5",
              imgUrl: `${prodImg5}`, 
              title: "Green Apple",
              price: "50 EGP",
              category:"fruits"
            },
            {
              id:"6",
              imgUrl: `${prodImg6}`, 
              title: "Strawberry",
              price: "50 EGP",
              category:"fruits"
            },
            {
              id:"7",
              imgUrl: `${prodImg7}`, 
              title: "Carrot",
              price: "50 EGP",
              category:"vegetables"
            },
            {
              id:"8",
              imgUrl: `${prodImg8}`, 
              title: "Onion",
              price: "50 EGP",
              category:"vegetables"
            },
            {
              id:"9",
              imgUrl:`${prodImg9}`, 
              title: "Tomato",
              price: "50 EGP",
              category:"vegetables"
            },
  ]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* العنوان الرئيسي */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-[#F28123]">All</span> Products
        </h2>
        <div className="w-20 h-1 mx-auto my-4 bg-[#F28123] rounded-sm" />
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a iste
          aliquid nostrum aut qui, dicta ea corrupti veritatis molestias
        </p>
      </div>

      {/* قائمة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div 
            key={product.id}
            className="group relative bg-white my-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link 
              to={`/singleproduct/${product.id}`}
              className="block overflow-hidden rounded-t-xl"
            >
              {/* الصورة */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-2 right-2 bg-[#F28123]/90 text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
              </div>

              {/* تفاصيل المنتج */}
              <div className="p-4 text-center">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 capitalize">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mb-1">Per kg</p>
                <p className="text-xl font-bold text-[#F28123] mb-4">
                  {product.price}
                </p>
              </div>
            </Link>

            {/* زر الإضافة للسلة */}
            <div className="p-4 pt-0">
              <Link to="/cart">
              <button
                className="w-full cursor-pointer bg-[#F28123] hover:bg-[#051922] text-white 
                          py-2.5 px-6 rounded-lg transition-colors duration-300 
                          flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-cart-plus" />
                <span className="text-sm md:text-base">Add to Cart</span>
              </button>
              </Link>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}