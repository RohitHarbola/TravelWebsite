import React from 'react';
import SearchCab from '../../Components/SearchCab/SearchCab';

function Rudrapur() {
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
            Explore Rudrapur with Us
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="md:flex md:justify-between md:items-start">
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
              Travel Services in Rudrapur
            </h1>
            <h3 className="mt-5 text-xl md:text-2xl font-bold leading-tight mb-4">
              Check Rudrapur to Delhi Taxi Service Fare
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Welcome to the dedicated page for Taxi Service in Rudrapur brought
              to you by CabiFY. We take pride in providing top-notch taxi
              services tailored to your needs, ensuring a comfortable and
              reliable journey. Our services in Rudrapur include outstation
              taxis, one-way taxis, and city tours.
            </p>
            <h4 className="mt-5 text-lg md:text-xl font-bold leading-tight mb-4">
              Comfort at its Best:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Our fleet of well-maintained and comfortable vehicles guarantees a
              smooth and enjoyable journey. Relax and let us take care of your
              transportation needs.
            </p>
            <h4 className="mt-5 text-lg md:text-xl font-bold leading-tight mb-4">
              Experienced Drivers:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Trust our professional drivers who are well-versed with the
              Rudrapur to Delhi and Delhi to Rudrapur routes. Your safety and
              satisfaction are our top priorities.
            </p>
          </div>

          {/* SearchCab Component */}
          <div className="md:w-1/2">
            <SearchCab />
          </div>
        </section>

        {/* Additional Services */}
        <section className="mt-8">
          <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4">
            Services We Offer:
          </h3>
          <div className="space-y-8">
            <div>
              <h6 className="text-lg md:text-xl font-bold leading-tight mb-2">
                Delhi to Rudrapur Taxi:
              </h6>
              <p className="text-gray-700 leading-relaxed">
                Planning a trip to the capital? Book your Delhi to Rudrapur taxi
                with Mr. Cabie for a stress-free and comfortable journey.
                Rudrapur to Delhi taxi fare stays between Rs.2900 to Rs.4500
                depending on seasonal requirements.
              </p>
            </div>

            <div>
              <h6 className="text-lg md:text-xl font-bold leading-tight mb-2">
                Rudrapur to Delhi Taxi Fare:
              </h6>
              <p className="text-gray-700 leading-relaxed">
                Need a reliable ride back to Rudrapur from Delhi? Count on Mr.
                Cabie for a seamless taxi service. One-way cab fare stays
                between Rs.2900 to Rs.4500 depending on seasonal requirements
                (for sedan vehicles).
              </p>
            </div>

            <div>
              <h6 className="text-lg md:text-xl font-bold leading-tight mb-2">
                Pantnagar Airport Taxi Service:
              </h6>
              <p className="text-gray-700 leading-relaxed">
                When traveling to Uttarakhand, Pantnagar airport is one of the
                best choices to land on. Mr. Cabie provides taxi services from
                Pantnagar Airport to Kainchi Dham, Almora, Nainital, Bareilly,
                and more. Call us now to check taxi fare.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Rudrapur;
