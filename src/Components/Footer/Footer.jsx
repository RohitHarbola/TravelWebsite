import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white p-6 md:p-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            GoZobby offers the most affordable and reliable cab services 24/7.
            You can get our best cab services in Haldwani, Rudarpur, Nainital, Bhimtal, RamNagar,
            Pantnagar, Haridwar, Dehradun, and other cities.{" "}
            <Link to="/about" className="text-blue-400 hover:underline" onClick={handleLinkClick}>
              Know About Us
            </Link>
          </p>
        </div>

        {/* Our Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Contacts</h3>
          <p className="text-sm">Tel: 91-97605-15312</p>
          <p className="text-sm">Tel: +91-97597-31777</p>
          <p className="text-sm">
            Email:{" "}
            <Link
              to="mailto:info@GoZobby.com"
              className="text-blue-400 hover:underline"
              onClick={handleLinkClick}
            >
              TeamGoZobby@gmail.com
            </Link>
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <p className="text-sm">Let us be social</p>
          <div className="flex space-x-4 mt-2">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
              onClick={handleLinkClick}
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
              onClick={handleLinkClick}
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
              onClick={handleLinkClick}
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Policies</h3>
          <ul className="text-sm space-y-1">
            <li>
              <Link
                to="/terms-and-conditions"
                className="text-blue-400 hover:underline"
                onClick={handleLinkClick}
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/cancellation-policy"
                className="text-blue-400 hover:underline"
                onClick={handleLinkClick}
              >
                Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* City Links */}
      <div className="border-t border-gray-700 pt-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
          {[
            { name: "Gurgaon", link: "/gurugram" },
            { name: "Dehradun", link: "/dehradun" },
            { name: "Delhi", link: "/delhi" },
            { name: "Haldwani", link: "/haldwani" },
            { name: "Nanital", link: "/nanital" },
            { name: "Bhimtal", link: "/bhimtal" },
            { name: "Pantnagar", link: "/pantnagar" },
            { name: "Ram Nagar", link: "/ramNagar" },
            { name: "Rudrapur", link: "/rudrapur" },
            { name: "Bareilly", link: "/bareilly" },
            { name: "Haridwar", link: "/haridwar" },
            { name: "Rishikesh", link: "/rishikesh" },
          ].map((city, index) => (
            <li key={index}>
              <Link
                to={city.link}
                className="text-blue-400 hover:underline"
                onClick={handleLinkClick}
              >
                Cabs in {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-6 text-center text-xs text-gray-400">
        Copyright © 2024 All rights reserved |{" "}
        <Link to="/about" className="text-blue-400 hover:underline" onClick={handleLinkClick}>
          GoZobby
        </Link>{" "}
        powered by RpGroup
      </div>
    </footer>
  );
};

export default Footer;
