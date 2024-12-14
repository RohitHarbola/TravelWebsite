import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              className="mr-3 h-16 md:h-20"
              alt="Logo"
            />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-row space-x-8 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-40">
          <div className="absolute top-4 right-4">
            <button
              onClick={toggleMobileMenu}
              className="text-white text-3xl focus:outline-none"
              aria-label="Close Mobile Menu"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <NavLink
              to="/"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `text-xl font-medium py-2 px-6 rounded-md duration-200 ${
                  isActive ? "text-orange-500 bg-gray-800" : "text-white"
                } hover:bg-gray-700`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `text-xl font-medium py-2 px-6 rounded-md duration-200 ${
                  isActive ? "text-orange-500 bg-gray-800" : "text-white"
                } hover:bg-gray-700`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMobileMenu}
              className={({ isActive }) =>
                `text-xl font-medium py-2 px-6 rounded-md duration-200 ${
                  isActive ? "text-orange-500 bg-gray-800" : "text-white"
                } hover:bg-gray-700`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
