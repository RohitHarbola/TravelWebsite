import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchCab = () => {
  const [tripType, setTripType] = useState("ONE WAY");
  const [formData, setFormData] = useState({
    pickupCity: "",
    destinationCity: "",
    pickupDate: "",
    pickupTime: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const { pickupCity, destinationCity, pickupDate, pickupTime } = formData;
    if (!pickupCity || !destinationCity || !pickupDate || !pickupTime) {
      alert("Please fill in all the details before searching for cabs.");
      return; 
    }

    
    navigate("/cabs", { state: { tripType, ...formData } });
  };

  return (
    <div className="bg-blue-300 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Call us at +91-97605-15312 or
        <br></br>
         +91-97597-31777</h2>
      <h3 className="text-lg font-semibold mb-6">OR BOOK NOW!</h3>

      {/* Trip Type Selection */}
      <div className="flex items-center justify-between mb-4">
        <button
          className={`py-2 px-4 rounded-l-lg ${
            tripType === "ONE WAY"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          }`}
          onClick={() => setTripType("ONE WAY")}
        >
          ONE WAY
        </button>
        <button
          className={`py-2 px-4 rounded-r-lg ${
            tripType === "ROUND TRIP"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          }`}
          onClick={() => setTripType("ROUND TRIP")}
        >
          ROUND TRIP
        </button>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Pickup City:</label>
          <input
            type="text"
            name="pickupCity"
            placeholder="Haldwani, Uttarakhand, India"
            value={formData.pickupCity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Destination City:
          </label>
          <input
            type="text"
            name="destinationCity"
            placeholder="New Delhi, Delhi, India"
            value={formData.destinationCity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pickup Date:</label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pickup Time:</label>
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          SEARCH CABS
        </button>
      </form>
    </div>
  );
};

export default SearchCab;
