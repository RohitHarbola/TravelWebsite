import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function Pantnagar() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Background Image */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2189810/pexels-photo-2189810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", // Pantnagar city or scenic image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Pantnagar with Us
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Safe and Comfortable Taxi Services in the Heart of Uttarakhand
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Travel Services in Pantnagar
            </h2>
            <h3 className="text-lg md:text-xl font-bold mb-2">Pantnagar to Nainital Taxi:</h3>
            <p className="text-gray-700 leading-relaxed">
              Take a scenic drive from Pantnagar to Nainital. Our taxi services ensure a comfortable and memorable journey to this beautiful hill station.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Pantnagar to Jim Corbett National Park Taxi Service:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Visit the famous Jim Corbett National Park with ease. We offer reliable taxi services for your trip to this wildlife sanctuary.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Local Sightseeing in Pantnagar:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Explore the town and nearby attractions, including the Pantnagar University, Ramnagar, and the lush green surroundings. Book a taxi with us for local sightseeing.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              How to Book a Taxi in Pantnagar?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              You can easily book a taxi through our online booking system or call us directly for assistance. We offer personalized services based on your needs.
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

export default Pantnagar;
