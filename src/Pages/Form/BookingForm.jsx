import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the passed data from location.state
  const {
    selectedCab,
    tripType,
    pickupCity,
    destinationCity,
    pickupDate,
    pickupTime,
  } = location.state || {};

  // Fallback if data is missing
  if (!selectedCab || !tripType || !pickupCity || !destinationCity || !pickupDate || !pickupTime) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-red-500">Missing Trip Details!</h2>
        <p>Please go back and select a cab with the correct details.</p>
        <button
          onClick={() => navigate(-1)} // Go back to previous page
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const [userDetails, setUserDetails] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that user details are filled in
    if (!userDetails.fullName || !userDetails.phone || !userDetails.email) {
      alert("Please fill in all the details before confirming.");
      return;
    }

    // Create a WhatsApp message with the booking details
    const message = `
      *Booking Details:*
      _Trip Type:_ ${tripType}
      _Pickup City:_ ${pickupCity}
      _Destination City:_ ${destinationCity}
      _Pickup Date:_ ${pickupDate}
      _Pickup Time:_ ${pickupTime}
      
      _Cab Details:_
      _Type:_ ${selectedCab.type}
      _Description:_ ${selectedCab.description}
      _Facilities:_ ${selectedCab.facilities}
      
      _User Details:_
      _Full Name:_ ${userDetails.fullName}
      _Phone:_ ${userDetails.phone}
      _Email:_ ${userDetails.email}
    `;

    // Encode the message to make it URL-friendly
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp phone number (replace with your business number)
    const phoneNumber = "9760515312";

    // Redirect to WhatsApp with the message
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Booking Form</h2>

      {/* Display selected cab details */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Selected Cab: {selectedCab.type}</h3>
        <img
          src={selectedCab.image}
          alt={selectedCab.type}
          className="w-full h-auto max-h-64 object-cover mb-4 rounded-lg" // Adjust max height as per requirement
        />
        <p>{selectedCab.description}</p>
        <p>{selectedCab.facilities}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* User Details Form */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={userDetails.fullName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone:</label>
          <input
            type="text"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </form>

      <p className="mt-4 text-center">
        Trip Type: {tripType} | {pickupCity} to {destinationCity}
      </p>
      <p className="text-center">
        Pickup Date: {pickupDate} | Pickup Time: {pickupTime}
      </p>
    </div>
  );
};

export default BookingForm;
