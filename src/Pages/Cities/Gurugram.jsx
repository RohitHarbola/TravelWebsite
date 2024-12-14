import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function Gurugram() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section with Background Image */}
      <header
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1172326/pexels-photo-1172326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", // Replace with a Gurugram-related image if needed
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            Explore Gurugram with Us
          </h1>
          <p className="text-lg md:text-xl mt-2">
            Convenient and Comfortable Taxi Services to Explore Gurugram and Surroundings
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Travel Services in Gurugram
            </h2>
            <h3 className="text-lg md:text-xl font-bold mb-2">Gurugram to Delhi Taxi:</h3>
            <p className="text-gray-700 leading-relaxed">
              Need a ride from Gurugram to Delhi? We offer affordable and reliable taxi services to ensure a smooth and comfortable journey between these two vibrant cities.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Gurugram to Manesar Taxi:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Whether it's for business or leisure, we provide hassle-free taxi services from Gurugram to Manesar. Enjoy a comfortable ride with our experienced drivers.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Gurugram to IGI Airport Cab Fare:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Traveling to the airport from Gurugram? We offer fast, safe, and reliable taxi services to IGI Airport at competitive fares. Book your ride and avoid the hassle of parking and traffic.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              Local Sightseeing in Gurugram:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Explore the top attractions in Gurugram, such as Kingdom of Dreams, Cyber Hub, and more. Book a taxi for local sightseeing and let us take you around the city's best spots.
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-2">
              How to Book Your Gurugram Taxi?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Booking your taxi from Gurugram is easy! Use our online booking system or get in touch with us directly to secure a comfortable ride to your desired destination.
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

export default Gurugram;
