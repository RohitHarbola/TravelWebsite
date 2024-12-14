import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function Dehradun() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Background Image */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/531752/pexels-photo-531752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", // Dehradun city-related image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Dehradun with Us
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Premium Taxi Services for Scenic and Comfortable Travel
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Travel Services in Dehradun
            </h2>
            <h3 className="text-lg md:text-xl font-bold mb-2">Dehradun to Mussoorie Taxi:</h3>
            <p className="text-gray-700 leading-relaxed">
              Experience the breathtaking drive to Mussoorie. Book our reliable cabs for a hassle-free journey to the Queen of Hills.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Dehradun to Haridwar Cab:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Plan your spiritual journey with ease. Our experienced drivers ensure a safe and comfortable trip to Haridwar.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Dehradun to Delhi Taxi Fare:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Affordable taxi fares for seamless travel between Dehradun and Delhi. Choose comfort and reliability for your intercity journey.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              How to Book Your Taxi in Dehradun?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Booking is quick and easy! Use our online system or give us a call to reserve your cab. We’re here to assist you every step of the way.
            </p>
          </div>

          {/* SearchCab Component */}
          <div className="md:w-1/2 md:pl-8">
            <SearchCab />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dehradun;
