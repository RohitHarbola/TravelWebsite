import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    pickuplocation: "",
    destination: "",
    date: "",
    time: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_rzpjdjs", // Replace with your service ID
        "template_nacvuev", // Replace with your template ID
        formData,
        "S3oUiEcRyyA07WcvI" // Replace with your public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            pickuplocation: "",
            destination: "",
            date: "",
            time: "",
            contact: "",
          }); // Reset form fields
        },
        (error) => {
          console.error("Error:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Info Section */}
          <div className="p-8 bg-gray-100 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Fill in the form to book a cab and enjoy hassle-free travel.
            </p>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                We value your time and ensure quick response for all your cab
                requirements.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form
            className="p-8 flex flex-col justify-center space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Pickup Location */}
            <div>
              <label htmlFor="pickuplocation" className="block text-gray-600 font-medium">
                Pickup Location
              </label>
              <input
                type="text"
                name="pickuplocation"
                id="pickuplocation"
                placeholder="Enter Pickup Location"
                className="w-full mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:ring-orange-500 focus:border-orange-500"
                value={formData.pickuplocation}
                onChange={handleChange}
                required
              />
            </div>

            {/* Destination */}
            <div>
              <label htmlFor="destination" className="block text-gray-600 font-medium">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder="Enter Destination"
                className="w-full mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:ring-orange-500 focus:border-orange-500"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-gray-600 font-medium">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:ring-orange-500 focus:border-orange-500"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-gray-600 font-medium">
                Time
              </label>
              <input
                type="time"
                name="time"
                id="time"
                className="w-full mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:ring-orange-500 focus:border-orange-500"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contact */}
            <div>
              <label htmlFor="contact" className="block text-gray-600 font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                id="contact"
                placeholder="Enter Your Contact Number"
                className="w-full mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:ring-orange-500 focus:border-orange-500"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-500 transition ease-in-out duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
