import React, { useState } from "react";
import { Link } from 'react-router';
import product1 from "../assets/product-img-1.jpg"
import product2 from "../assets/product-img-2.jpg"
import product3 from "../assets/product-img-3.jpg"

export default function OurProducts() {
  const [Products, setProducts] = useState([
    {
            id:"1",
            imgUrl: `${product1}`,
            title: "strawberry",
            price: "50 EGP",
            category:"fruits"
          },
          {
            id:"2",
            imgUrl: `${product2}`, 
            title: "blueberry",
            price: "50 EGP",
            category:"fruits"
          },
          {
            id:"3",
            imgUrl: `${product3}`, 
            title: "lemon",
            price: "50 EGP",
            category:"fruits"
          },
  ]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* العنوان الرئيسي */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-[#F28123]">Our</span> Products
        </h2>
        <div className="w-20 h-1 mx-auto my-4 bg-[#F28123] rounded-sm" />
        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a iste
          aliquid nostrum aut qui, dicta ea corrupti veritatis molestias
        </p>
      </div>

      {/* قائمة المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {Products.map((product) => (
          <div 
            key={product.id}
            className="group relative p-6 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
          >
            <Link 
              to={`/singleproduct/${product.id}`}
              className="block text-center"
            >
              {/* الصورة */}
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* تفاصيل المنتج */}
              <h3 className="font-bold text-lg md:text-xl capitalize mb-2">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base mb-1">Per kg</p>
              <p className="text-xl md:text-2xl font-bold text-[#F28123] mb-4">
                {product.price}
              </p>
            </Link>

            {/* زر الإضافة للسلة */}
            <Link to="cart">
            <button
              type="button"
              className="w-full bg-[#F28123] hover:bg-[#051922] text-white 
                        py-2.5 px-6 rounded-full transition-colors duration-300 
                        flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fa-solid fa-cart-plus" />
              <span className="text-sm md:text-base">Add To Cart</span>
            </button></Link>
         
          </div>
        ))}
      </div>
    </section>
  );
}