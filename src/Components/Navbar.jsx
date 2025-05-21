
import logo from "../assets/logo.png"

import React, { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mainLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/news", label: "News" },
    { to: "/contact", label: "Contact" },
    { to: "/shop", label: "Shop" },
    { to: "/cart", label: "Cart" },
  ];

  const authLinks = [
    { to: "/login", label: "Login" },
    { to: "/register", label: "Register" },
  ];

  return (
    <nav className="bg-[#051922] fixed w-full z-30 top-0 left-0 border-none shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        
        {/* Left - Logo */}
        <NavLink to="/" className="flex items-center px-6">
          <img src={logo} alt="Logo" className="h-8 scale-150" />
        </NavLink>

        {/* Middle - Main Links */}
        <div className="hidden md:flex md:space-x-8 text-white font-medium">
          {mainLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `block py-2 px-3 rounded transition-colors ${
                  isActive ? "text-[#F28123]" : "text-white hover:text-[#F28123]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right - Auth Links + Hamburger */}
        <div className="flex items-center space-x-4">
          
          {/* Login / Register */}
          <div className="hidden md:flex space-x-4">
            {authLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `block py-2 px-4 border rounded-lg ${
                    isActive
                      ? "border-[#F28123] text-[#F28123]"
                      : "border-white text-white hover:border-[#F28123] hover:text-[#F28123]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#051922] px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {mainLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded transition-colors ${
                      isActive ? "text-[#F28123]" : "text-white hover:text-[#F28123]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            {authLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded border ${
                      isActive
                        ? "border-[#F28123] text-[#F28123]"
                        : "border-white text-white hover:border-[#F28123] hover:text-[#F28123]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
