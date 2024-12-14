import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function Bareilly() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Background Image */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/27970045/pexels-photo-27970045/free-photo-of-nanital.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        {/* Gradient Overlay for Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Bareilly with Us
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4">
              Your Trusted Partner for Bareilly to Delhi and Nainital Taxi Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Welcome to CabiFY, your go-to destination for premium taxi services in Bareilly and beyond. Our commitment to providing reliable and efficient transportation makes us the preferred choice for travelers in and around Bareilly. We provide one-way taxi service and outstation cab service.
            </p>
            <h4 className="mt-5 text-lg md:text-xl font-bold leading-tight mb-4">
              Punctuality Matters:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              We understand the importance of timely travel. CabiFY ensures punctual services, ensuring you reach your destination on time, every time.
            </p>

            <h3 className="pt-5 mb-5 text-xl md:text-2xl font-bold">
              Services We Offer:
            </h3>
            <h4 className="text-lg md:text-xl font-bold leading-tight mb-2">
              Bareilly Airport Taxi:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Landing at Bareilly airport? Wherever you want to go, just call CabiFY, and we will take care of your complete personal and business travel requirements.
            </p>

            <h4 className="mt-5 text-lg md:text-xl font-bold leading-tight mb-2">
              Bareilly to Haldwani Taxi:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Get cab service from Bareilly to Haldwani at the lowest fares with safe drivers.
            </p>

            <h4 className="mt-5 text-lg md:text-xl font-bold leading-tight mb-2">
              Bareilly to Delhi Taxi:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Planning a trip to the capital? Book your Bareilly to Delhi taxi with CabiFY for a stress-free and comfortable journey. Delhi to Bareilly taxi fare ranges from Rs.2999 to Rs.4500 depending on seasonal changes.
            </p>

            <h4 className="mt-5 text-lg md:text-xl font-bold leading-tight mb-2">
              Bareilly to Nainital Taxi:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Explore the scenic beauty of Nainital from Bareilly with our reliable taxi service. Enjoy competitive fares and a memorable travel experience. Also, travel from Bareilly to Almora, Kainchi Dham, and more beautiful destinations.
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

export default Bareilly;
