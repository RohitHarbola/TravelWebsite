import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function Rishikesh() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Background Image */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "/src/assets/Rishikesh.png",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Rishikesh with Us
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Reliable and Comfortable Cab Services in Rishikesh
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Travel Services in Rishikesh
            </h2>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Delhi to Rishikesh Cab:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Planning a trip to Rishikesh from Delhi? Book your cab with us for a seamless and comfortable journey. Enjoy a smooth ride to this serene destination.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Rishikesh Local Cab Services:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Explore Rishikesh’s famous spots like Lakshman Jhula, Ram Jhula, and Triveni Ghat with our reliable local cab services.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Rishikesh to Haridwar Taxi:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Enjoy hassle-free travel to Haridwar from Rishikesh. Our cabs are well-maintained, ensuring a safe and comfortable ride.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Rishikesh to Dehradun Airport Taxi:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Need a ride to the airport? Book our Rishikesh to Dehradun airport taxi service for a convenient and timely drop-off.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              How to Book Your Rishikesh Cab?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Booking your Rishikesh cab is simple! Use our online booking system or give us a call to confirm your ride. We’re here to make your travel easy and stress-free.
            </p>
          </div>

          {/* Right Content - SearchCab Component */}
          <div className="md:w-1/2 md:pl-8">
            <SearchCab />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Rishikesh;
