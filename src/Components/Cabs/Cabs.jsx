import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Cabs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the trip data from the location state
  const { tripType, pickupCity, destinationCity, pickupDate, pickupTime } =
    location.state || {};

  // Fallback if no data is available
  if (!pickupCity || !destinationCity || !pickupDate || !pickupTime) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-500">No booking details found!</h2>
        <p>Please go back and fill out the booking form to search for cabs.</p>
        <button
          onClick={() => navigate(-1)} // Go back to previous page
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Static data for the available cabs
  const cabs = [
    {
      type: "Sedan",
      image: "/assets/car4.png",
      description: "Swift Dzire or similar",
      facilities: "4 seaters | 3 bags | AC",
    },
    {
      type: "SUV",
      image: "/assets/car2.png",
      description: "Ertiga, Triber or similar",
      facilities: "6 seaters | 4 bags | AC",
    },
    {
      type: "Hatchback",
      image: "/assets/alto.png",
      description: "Wagon R or similar",
      facilities: "4 seaters | 2 bags | AC",
    },
  ];

  // Navigate to booking form with the selected cab and trip details
  const handleBooking = (cab) => {
    navigate("/booking-form", {
      state: {
        selectedCab: cab, // Send selected cab details
        tripType,
        pickupCity,
        destinationCity,
        pickupDate,
        pickupTime,
      },
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Cabs for {pickupCity} to {destinationCity}
      </h1>
      <p className="text-center mb-4">
        Trip Type: {tripType} | Date: {pickupDate} | Time: {pickupTime}
      </p>

      {/* Display available cabs */}
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cabs.map((cab, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={cab.image}
              alt={cab.type}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{cab.type}</h2>
            <p>{cab.description}</p>
            <p className="text-sm text-gray-500">{cab.facilities}</p>
            <button
              onClick={() => handleBooking(cab)}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      <a href="/cancellation-policy" className="text-blue-500 underline">
        View Cancellation Policy
      </a>
    </div>
  );
};

export default Cabs;
