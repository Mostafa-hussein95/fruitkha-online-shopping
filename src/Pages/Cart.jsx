import React, { useState } from "react";
import Header from "./../Components/Header";
import { Link } from 'react-router';
import prodOneImg from "../assets/product-img-1.jpg"
import prodTwoImg from "../assets/product-img-2.jpg"
import prodThreeImg from "../assets/product-img-3.jpg"

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Strawberry",
      price: 599,
      quantity: 1,
    image: `${prodOneImg}`,
    },
    {
      id: 2,
      name: "Blueberry",
      price: 2499,
      quantity: 1,
      image: `${prodTwoImg}`,
    },
    {
      id: 3,
      name: "Lemon",
      price: 999,
      quantity: 1,
      image: `${prodThreeImg}`,
    },
  ]);

  const incrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 1999;
  const total = subtotal + shipping;

  return (
    <>
      <Header
        title="Fresh and Organic"
        pageHdr="Cart"
        fruitBtn={false}
        contactBtn={false}
      />

      <div className="flex flex-col lg:flex-row w-[90%] gap-10 justify-center m-auto my-10">
        {/* Cart Table */}
        <div className="w-full lg:w-[60%] overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-slate-200">
              <tr>
                <th className="px-4 py-3 text-center">Image</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3 text-center">Qty</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4 text-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 md:w-24 mx-auto"
                    />
                  </td>
                  <td className="px-4 py-4 font-semibold text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => decrementQty(item.id)}
                        className="text-gray-500 bg-white border border-gray-300 rounded-full w-6 h-6 flex justify-center items-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="mx-2 w-10 text-center border border-gray-300 rounded-lg"
                      />
                      <button
                        onClick={() => incrementQty(item.id)}
                        className="text-gray-500 bg-white border border-gray-300 rounded-full w-6 h-6 flex justify-center items-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-gray-900">
                    ${item.price * item.quantity}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[35%] bg-gray-50 p-5 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Shipping:</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between py-4 font-bold text-lg">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <button className="bg-[#F28123] hover:bg-gray-900 cursor-pointer text-white py-2 rounded-full">
              Update Cart
            </button>
           <Link to="/checkout" className="bg-[#F28123] hover:bg-gray-900 text-white py-2 rounded-full">
           <button className="cursor-pointer">
              Check Out
            </button>
           </Link>
           
          </div>

          <div className="mt-6">
            <p className="font-semibold mb-2">Apply Coupon</p>
            <textarea
              rows="2"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your coupon"
            ></textarea>
            <button className="bg-[#F28123] hover:bg-gray-900 cursor-pointer text-white mt-3 w-full py-2 rounded-full">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
