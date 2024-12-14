import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function Chandigarh() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Background Image */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/670764/pexels-photo-670764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", // Chandigarh city image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Chandigarh with Us
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Premium Taxi Services in the City Beautiful
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Travel Services in Chandigarh
            </h2>
            <h3 className="text-lg md:text-xl font-bold mb-2">Chandigarh Local Sightseeing:</h3>
            <p className="text-gray-700 leading-relaxed">
              Discover Chandigarh's beauty by visiting the Rock Garden, Sukhna Lake, and Rose Garden. Book our cabs for a comfortable and memorable tour.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Chandigarh to Shimla Taxi Service:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Planning a trip to the hills? Our Chandigarh to Shimla taxi service ensures a scenic and comfortable journey.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Chandigarh to Manali Cab Fare:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Experience a hassle-free ride to Manali with our reliable and affordable cab services.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Airport and Railway Station Transfers:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Get timely and reliable pickup and drop services to the Chandigarh International Airport and Railway Station.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              How to Book a Taxi in Chandigarh?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Booking is simple! Use our user-friendly online booking system or call us directly for assistance. Travel with ease and comfort.
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

export default Chandigarh;
