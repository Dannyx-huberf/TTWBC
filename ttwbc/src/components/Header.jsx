// components/Header.js
import React, { useState } from "react";
import logo from "../image/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Academic Requirements", href: "#academicrequirements" },
    { name: "Faculty", href: "#faculty" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow">
            <img
              src={logo}
              alt="Teach The Word Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
            Teach The Word Bible Institute
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 ml-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-700 dark:text-gray-300 font-medium group"
            >
              {item.name}

              {/* Sliding Underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Hamburger Button (Tablet + Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 ml-4 rounded-md text-gray-700 dark:text-gray-300"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile / Tablet Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="relative text-gray-700 dark:text-gray-300 font-medium group inline-block"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
