import React from "react";
import SearchCab from "../SearchCab/SearchCab";
import CabServices from "../Cabs/CabServices";
import UttarakhandPlaces from "../Uttrakhand/UttrakhandPlaces";
import ReviewRating from "../ReviewRating/ReviewRating";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen text-black">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Welcome to <br />
            <span className="text-blue-500">
              GoZobby Outstation <br /> & One Way Cab Service
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-bold text-gray-900">Go Zobby</span> –{" "}
            <span className="text-blue-500 font-semibold">Redefining Travel</span>, One Journey at a Time!
            <br /><br />
            At Go Zobby, we are more than just a{" "}
            <span className="text-green-500 font-semibold">travel agency</span>; we are your companions in creating{" "}
            <span className="text-orange-500 font-semibold">unforgettable travel experiences</span>.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With a fleet of hatchbacks, sedans, and SUVs, we ensure{" "}
            <span className="text-blue-500 font-semibold">comfort</span>,{" "}
            <span className="text-blue-500 font-semibold">safety</span>, and{" "}
            <span className="text-blue-500 font-semibold">convenience</span> on every trip.
          </p>
          <p className="text-lg font-semibold mb-4">
            Call now to plan your trip:
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-green-300 p-4 rounded-lg shadow-md">
              <i className="fas fa-phone-alt text-xl"></i>
              <span className="text-black text-lg font-semibold">
                +91-97605-15312
              </span>
            </div>
          </div>
        </div>

        {/* Right Content - Search Cab Form */}
        <div className="w-full md:w-1/2 md:p-6 lg:p-8 bg-gray-100 rounded-lg shadow-md">
          <SearchCab />
        </div>
      </section>

      {/* Additional Information */}
      <section className="px-6 md:px-16 py-12">
        <h2 className="text-2xl font-bold mb-4">
          GoZobby is an <span className="text-blue-500">affordable</span> and{" "}
          <span className="text-blue-500">quality</span> service provider of:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">One-way taxi / cabs</span>
          </li>
          <li>
            <span className="font-semibold">Outstation taxi / cabs</span>
          </li>
          <li>
            <span className="font-semibold">Local taxi / cabs</span>
          </li>
        </ul>
        <h3 className="text-xl font-bold mt-6 mb-4">
          While booking your taxi / cab, never worry as we:
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Inspect our <span className="text-blue-500 font-semibold">cabs regularly</span></li>
          <li>Verify our <span className="text-blue-500 font-semibold">drivers</span></li>
          <li>
            Have a <span className="text-orange-500 font-semibold">cancellation policy</span> (call us at{" "}
            <span className="text-blue-500 underline">+91-97605-15312</span> to know more)
          </li>
          <li>
            Offer a <span className="text-green-500 font-semibold">24*7 helpline number</span>{" "}
            <span className="text-blue-500 underline">+91-97605-15312</span>
          </li>
        </ul>
        <ReviewRating />
      </section>

      {/* Uttarakhand Places Section */}
      <UttarakhandPlaces />

      {/* Cab Services Section */}
      <CabServices />
    </div>
  );
};

export default Home;
