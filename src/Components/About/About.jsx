import React from "react";

function About() {
  return (
    <div className="bg-white min-h-screen text-black px-6 md:px-16 py-6">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Text Content */}
        <div>
        <p className="text-lg text-gray-700 mb-6">
          Discover seamless travel experiences with our premium travel agency! We offer a wide range of vehicles, including hatchbacks, sedans, and SUVs, ensuring comfort and convenience for every journey. Whether you’re planning a trip across India or looking to explore the serene beauty of Uttarakhand, we’ve got you covered. From majestic hill stations to tranquil valleys, let us take you to your dream destinations with exceptional service and unmatched reliability. Your adventure begins with us!
          </p>


          <h2 className="text-2xl font-bold mb-4">
            GoZobby is an affordable and quality Service provider of:
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>One way taxi / cabs</li>
            <li>Outstation taxi / cabs</li>
            <li>Local taxi / cabs</li>
          </ul>
          <h3 className="text-xl font-bold mt-4 mb-4">
            While booking your taxi / cab, never worry as we:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Inspect our cabs regularly</li>
            <li>Verify our drivers</li>
            <li>
              Have a cancellation policy too (call us at{" "}
              <span className="text-blue-500 underline">91-97605-15312</span> to
              know more)
            </li>
            <li>
              Have 24*7 helpline number{" "}
              <span className="text-blue-500 underline">+91-97605-15312</span>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/assets/GoZobby.png"
            alt="GoZobby Car"
            className="w-full h-40 md:h-48 object-cover rounded"
          />
          <img
            src="/assets/car1.png"
            alt="Car 1"
            className="w-full h-40 md:h-48 object-cover rounded"
          />
          <img
            src="/assets/car2.png"
            alt="Car 2"
            className="w-full h-40 md:h-48 object-cover rounded"
          />
          <img
            src="/assets/car3.png"
            alt="Car 3"
            className="w-full h-40 md:h-48 object-cover rounded"
          />
          {/* <img
            src="/src/assets/car5.png"
            alt="Car 5"
            className="w-full h-40 md:h-48 object-cover rounded"
          /> */}
          <img
            src="/assets/car6.png"
            alt="Car 6"
            className="w-full h-40 md:h-48 object-cover rounded"
          />
          <img
            src="/assets/car4.png"
            alt="Car 4"
            className="w-full h-40 md:h-48 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
