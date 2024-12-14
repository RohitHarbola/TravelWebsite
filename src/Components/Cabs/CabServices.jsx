import React from "react";
import { Link } from "react-router-dom";

const CabServices = () => {
  const cabServices = [
    { name: "Gurugram", link: "/gurugram" },
    { name: "Dehradun", link: "/dehradun" },
    { name: "Delhi", link: "/delhi" },
    { name: "Haldwani", link: "/haldwani" },
    { name: "Nanital", link: "/nanital" },
    { name: "Bhimtal", link: "/bhimtal" },
    { name: "Pantnagar", link: "/pantnagar" },
    { name: "Rudrapur", link: "/rudrapur" },
    { name: "Ramnagar", link: "/ramNagar" },
    { name: "Bareilly", link: "/bareilly" },
    { name: "Haridwar", link: "/haridwar" },
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-800 md:text-4xl">
          We can take you there with our one-way cab service
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Your comfort is our priority. Hire a cab and travel hassle-free!
        </p>
      </div>

      {/* Cab Services Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-12">
        {/* List Section */}
        <div className="flex-1">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            {cabServices.map((service, index) => (
              <li key={index} className="text-lg">
                <Link
                  to={service.link}
                  className="block bg-white shadow-lg hover:shadow-xl rounded-lg p-4 text-blue-600 font-medium transition duration-200 transform hover:scale-105 hover:text-blue-800"
                  onClick={handleLinkClick} // Scroll to top on click
                >
                  Cab service in {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/GoZobby.png"
            alt="GoZobby Car"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-yellow-500">
          With the lowest fares too?
        </h2>
        <p className="text-gray-700 text-lg mt-4">
          Don't worry, we've got you covered!
        </p>
      </div>
    </div>
  );
};

export default CabServices;
