import React, { useState } from 'react';
import { Link } from 'react-router';
import prodImg7 from "../assets/tomato.jpg"
import prodImg8 from "../assets/carrot.jpg"
import prodImg9 from "../assets/onion.jpg"

export default function RelatedProducts() {
  const [Products, setProducts] = useState([
    {
      id: "7",
      imgUrl: `${prodImg7}`,
      title: "Carrot",
      price: "50 EGP",
      category: "vegetables"
    },
    {
      id: "8",
      imgUrl: `${prodImg8}`,
      title: "Onion",
      price: "50 EGP",
      category: "vegetables"
    },
    {
      id: "9",
      imgUrl: `${prodImg9}`,
      title: "Tomato",
      price: "50 EGP",
      category: "vegetables"
    },
  ]);

  return (
    <>
      {/* Heading */}
      <div className="m-auto text-center mt-14 p-5 w-full">
        <div id="heading" className="w-full md:w-1/2 m-auto">
          <h2 className="font-bold text-3xl md:text-5xl">
            <span className="font-extrabold text-[#F28123]">Related</span> Products
          </h2>
          <hr className="w-16 md:w-20 h-1 mx-auto my-4 bg-[#F28123] border-0 rounded-sm md:my-8" />
          <p className="text-gray-500 px-4 md:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a iste
            aliquid nostrum aut qui, dicta ea corrupti veritatis molestias
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="flex flex-wrap mx-auto my-10 justify-center gap-6 w-[90%]">
        {Products.map((product, id) => (
          <div
            key={id}
            className="w-full sm:w-[45%] md:w-[30%] p-4 shadow-lg rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:scale-105 bg-white"
          >
            <div className="text-center">
              <Link to={`/singleproduct/${product.id}`}>
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="font-bold text-lg my-2">{product.title}</p>
                <p className="text-gray-500 my-1 text-sm">Per kg</p>
                <p className="text-xl font-bold my-2">{product.price}</p>
              </Link>

              <button
                type="button"
                className="text-white bg-[#F28123] hover:bg-[#051922] focus:outline-none font-medium rounded-full text-sm px-4 py-2 mt-3"
              >
                <Link to="/cart">
                <i className="fa-solid fa-cart-plus mr-2"></i> Add To Cart
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
