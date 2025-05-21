import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import Header from "./../Components/Header";
import RelatedProducts from "./../Components/RelatedProducts";
import prodImg1 from "../assets/product-img-1.jpg"
import prodImg2 from "../assets/product-img-2.jpg"
import prodImg3 from "../assets/product-img-3.jpg"
import prodImg4 from "../assets/product-img-4.jpg"
import prodImg5 from "../assets/product-img-5.jpg"
import prodImg6 from "../assets/product-img-6.jpg"
import prodImg7 from "../assets/tomato.jpg"
import prodImg8 from "../assets/carrot.jpg"
import prodImg9 from "../assets/onion.jpg"



export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
            id: "1",
            imgUrl: `${prodImg1}`,
            title: "strawberry",
            price: "50 EGP",
            category: "fruits",
          },
          {
            id: "2",
            imgUrl: `${prodImg2}`,
            title: "blueberry",
            price: "50 EGP",
            category: "fruits",
          },
          {
            id: "3",
            imgUrl: `${prodImg3}`,
            title: "lemon",
            price: "50 EGP",
            category: "fruits",
          },
          {
            id: "4",
            imgUrl: `${prodImg4}`,
            title: "Avocado",
            price: "50 EGP",
            category: "fruits",
          },
          {
            id: "5",
            imgUrl: `${prodImg5}`,
            title: "Green Apple",
            price: "50 EGP",
            category: "fruits",
          },
          {
            id: "6",
            imgUrl: `${prodImg6}`,
            title: "Strawberry",
            price: "50 EGP",
            category: "fruits",
          },
          {
            id: "7",
            imgUrl: `${prodImg7}`,
            title: "Carrot",
            price: "50 EGP",
            category: "vegetables",
          },
          {
            id: "8",
            imgUrl: `${prodImg8}`,
            title: "Onion",
            price: "50 EGP",
            category: "vegetables",
          },
          {
            id: "9",
            imgUrl: `${prodImg9}`,
            title: "Tomato",
            price: "50 EGP",
            category: "vegetables",
          },
  ];

  useEffect(() => {
    const foundProduct = products.find((pr) => pr.id === id);
    setProduct(foundProduct);
  }, [id]);

  return (
    <>
      <Header
        title="See more Details"
        pageHdr="Single Product"
        fruitBtn={false}
        contactBtn={false}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {product ? (
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
            {/* Product Image */}
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h1 className="text-3xl text-start md:text-4xl font-bold text-gray-900">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4">
                <p className="text-2xl font-bold text-[#F28123]">
                  {product.price}
                </p>
                <span className="text-gray-500">/ kg</span>
              </div>

              <p className="text-gray-600 text-start leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                sint dignissimos, rem commodi cum voluptatem quae reprehenderit
                repudiandae ea tempora incidunt ipsa, quisquam animi perferendis
                eos eum modi! Tempora, earum.
              </p>

              <div className="grid grid-cols-2 gap-6 max-w-sm">
                <div className="space-y-2">
                  <label 
                    htmlFor="quantity" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F28123]"
                  />
                </div>
              
                <button
                  className="self-end bg-[#F28123] text-white py-3 px-6 rounded-lg
                            font-medium hover:bg-[#051922] transition-colors
                            flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Link to="/cart">
                  <i className="fa-solid fa-cart-plus " />
                  Add to Cart
                  </Link>
                </button>
                
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  <span className="font-medium">Category:</span>{" "}
                  <span className="capitalize">{product.category}</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">Product not found</p>
            <Link 
              to="/products" 
              className="mt-4 inline-block text-[#F28123] hover:underline"
            >
              Browse Products
            </Link>
          </div>
        )}

        {/* Related Products */}
        <div className="mt-20">
          <RelatedProducts />
        </div>
      </div>
    </>
  );
}