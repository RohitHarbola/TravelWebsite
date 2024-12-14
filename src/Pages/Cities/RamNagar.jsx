import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function RamNagar() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Background Image */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1001137/pexels-photo-1001137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", // Ramnagar or scenic image related to the area
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Ram Nagar with Us
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Reliable Taxi Services to Explore the Beauty of Ram Nagar and Nearby Areas
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Travel Services in Ram Nagar
            </h2>
            <h3 className="text-lg md:text-xl font-bold mb-2">Ram Nagar to Jim Corbett National Park Taxi:</h3>
            <p className="text-gray-700 leading-relaxed">
              Explore the famous Jim Corbett National Park with our comfortable and reliable taxi services from Ram Nagar. Let us take you on an unforgettable wildlife adventure.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Ram Nagar to Nainital Taxi:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Plan a trip to Nainital from Ram Nagar with ease. Enjoy a peaceful ride and take in the beautiful scenery during the journey.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Ram Nagar to Bhimtal Cab Fare:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Book a cab from Ram Nagar to Bhimtal, known for its serene lakes and peaceful environment. Our service provides a safe and budget-friendly option for the journey.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Tailored Taxi Service for Local Sightseeing:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Enjoy personalized taxi services for sightseeing around Ram Nagar and nearby attractions like Corbett, Nainital, and Bhimtal.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              How to Book Your Ram Nagar Taxi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Booking your taxi to explore Ram Nagar or nearby destinations is easy. Use our online booking platform or contact us directly for quick and convenient booking.
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

export default RamNagar;
