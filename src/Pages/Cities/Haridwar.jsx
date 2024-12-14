import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function Haridwar() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Background Image */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/416797/pexels-photo-416797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", // Replace with a Haridwar-related image if needed
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Haridwar with Us
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Reliable and Comfortable Taxi Services to Your Favorite Destinations
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Travel Services in Haridwar
            </h2>
            <h3 className="text-lg md:text-xl font-bold mb-2">Delhi to Haridwar Taxi:</h3>
            <p className="text-gray-700 leading-relaxed">
              Planning a spiritual journey to Haridwar from Delhi? Book your taxi with us for a safe and hassle-free ride. Our experienced drivers ensure a comfortable trip.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Haridwar to Kedarnath Taxi:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tailored taxi services to Kedarnath from Haridwar with reliable vehicles and experienced drivers. Ensure a stress-free pilgrimage to one of the holiest sites.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Haridwar to Rishikesh Cab Fare:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Explore Rishikesh with ease. Book our Haridwar to Rishikesh cab service for affordable fares and a smooth journey to this adventure and yoga hub.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Tailored Taxi from Haridwar to Kedarnath, Badrinath, and Rishikesh:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our exclusive taxi packages include destinations like Kedarnath, Badrinath, and Rishikesh, ensuring you travel comfortably to these sacred and scenic spots.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              How to Book Your Delhi to Haridwar Taxi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Booking your taxi is simple! Use our online booking system or contact us directly to secure your ride. Our team is ready to assist you with any queries.
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

export default Haridwar;
