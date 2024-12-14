import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function Delhi() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Background Image */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", // Delhi city image
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Delhi with Us
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Trusted Taxi Services in the Heart of India
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Travel Services in Delhi
            </h2>
            <h3 className="text-lg md:text-xl font-bold mb-2">Delhi Sightseeing Taxi:</h3>
            <p className="text-gray-700 leading-relaxed">
              Discover the rich history of Delhi by visiting iconic landmarks like India Gate, Red Fort, Qutub Minar, and more. Book a comfortable cab for a memorable experience.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Delhi to Agra Taxi Service:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Planning a trip to the Taj Mahal? Our Delhi to Agra taxi service offers convenience, safety, and comfort for your journey.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Delhi to Jaipur Cab Fare:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Travel to the Pink City with ease. Book our affordable cabs for a smooth and luxurious journey to Jaipur.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Airport Pickup and Drop Services:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Reliable and timely airport transfers from Indira Gandhi International Airport to anywhere in Delhi or nearby cities. We ensure a hassle-free experience.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              How to Book a Taxi in Delhi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Booking is simple! Use our online booking system or contact us directly for prompt assistance. We're committed to providing the best travel solutions.
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

export default Delhi;
