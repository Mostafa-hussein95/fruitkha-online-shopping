import React from "react";
import Header from "./../Components/Header";
import Accordion from "./../Components/Accordion";

export default function CheckOut() {
  return (
    <>
      <Header
        title="Fresh and Organic"
        pageHdr="Check Out Product"
        fruitBtn={false}
        contactBtn={false}
      />

      <div className="px-4 my-10">
        <div className="flex flex-col lg:flex-row justify-center items-start text-start gap-10 lg:gap-20">
          
          {/* Accordion Section */}
          <div className="w-full lg:w-[60%]">
            <Accordion />
          </div>

          {/* Order Details Section */}
          <div className="w-full lg:w-[30%] bg-gray-100 p-6 rounded-lg shadow mt-10 lg:mt-0 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-6 text-gray-800">Order Summary</h2>
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                  <tr>
                    <th scope="col" className="px-4 py-3">Product</th>
                    <th scope="col" className="px-4 py-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-4 font-medium">Strawberry</td>
                    <td className="px-4 py-4">$85.00</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-4 font-medium">Berry</td>
                    <td className="px-4 py-4">$70.00</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-4 font-medium">Lemon</td>
                    <td className="px-4 py-4">$35.00</td>
                  </tr>
                  <tr className="font-semibold text-gray-800 bg-gray-100">
                    <td className="px-4 py-3">Subtotal</td>
                    <td className="px-4 py-3">$190</td>
                  </tr>
                  <tr className="font-semibold text-gray-800 bg-gray-100">
                    <td className="px-4 py-3">Shipping</td>
                    <td className="px-4 py-3">$50</td>
                  </tr>
                  <tr className="font-bold text-gray-900 bg-gray-300">
                    <td className="px-4 py-3">Total</td>
                    <td className="px-4 py-3">$240</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Checkout Button */}
            <button className="mt-8 w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300">
              Proceed to Checkout
            </button>

          </div>

        </div>
      </div>
    </>
  );
}
