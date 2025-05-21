



import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#051922] border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Us Section */}
          <div className="max-w-xs  md:mx-0">
            <h3 className="text-lg lg:text-2xl font-semibold text-white mb-4">
              About Us
            </h3>
            <div className="w-10 h-1 bg-[#F28123] mb-4 rounded" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae.
            </p>
          </div>

          {/* Contact Section */}
          <div className="max-w-xs  md:mx-0">
            <h3 className="text-lg lg:text-2xl font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <div className="w-10 h-1 bg-[#F28123] mb-4 rounded" />
            <address className="text-gray-400 text-sm not-italic">
              <p className="mb-2">34/8, East Hukupara,</p>
              <p className="mb-2">Gifirtok, Sadan.</p>
              <p className="mb-2">support@fruitkha.com</p>
              <p>+00 111 222 3333</p>
            </address>
          </div>

          {/* Quick Links */}
          <div className="max-w-xs  md:mx-0">
            <h3 className="text-lg lg:text-2xl font-semibold text-white mb-4">
              Pages
            </h3>
            <div className="w-10 h-1 bg-[#F28123] mb-4 rounded" />
            <nav>
              <ul className="space-y-2">
                {[ 'About', 'Shop', 'News', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to=   {item}
                      className="text-gray-400 hover:text-[#F28123] transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="max-w-xs  md:mx-0">
            <h3 className="text-lg lg:text-2xl font-semibold text-white mb-4">
              Subscribe
            </h3>
            <div className="w-10 h-1 bg-[#F28123] mb-4 rounded" />
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our mailing list to get the latest updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#012738] text-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F28123]"
              />
              <button
                type="button"
                className="bg-[#012738] text-[#F28123] hover:bg-[#F28123] hover:text-white rounded-lg px-4 py-3 transition-colors"
              >
                <i className="fa-solid fa-paper-plane text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            © 2023 Fruitkha. All Rights Reserved.
          </span>
          
          <div className="flex space-x-6">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((network) => (
              <Link
                key={network}
                to="#"
                className="text-gray-400 hover:text-[#F28123] transition-colors"
              >
                <i className={`fa-brands fa-${network} text-lg`} />
                <span className="sr-only">{network}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}