import React from "react";
import SearchCab from "../../Components/SearchCab/SearchCab";

function Haldwani() {
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
            Explore Haldwani with Us
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-16 py-8">
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Travel Services in Haldwani
          </h2>
          <SearchCab />
        </section>

        {/* About Taxi Service */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Taxi Service in Haldwani
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Gozobby provides taxi service in Haldwani, Kathgodam, and
            Nainital for outstation and one-way travels. These cities are
            situated at the foothills of Kumaon, Uttarakhand district Nainital—a
            city with an amazing view of mountains and rivers making it
            picture-perfect. We offer reliable and safe one-way cabs across all
            major towns and cities in India, including routes like Delhi to
            Haldwani, Haldwani to Kainchi Dham, and Haldwani to Pithoragarh.
          </p>
        </section>

        {/* Popular Routes */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Popular Routes</h3>
          <table className="w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Route</th>
                {/* <th className="border border-gray-300 p-2">Price</th> */}
              </tr>
            </thead>
            <tbody>
              {[
                { route: "Haldwani to Delhi",  },
                { route: "Haldwani to Pithoragarh" },
                { route: "Haldwani to Nainital" },
                { route: "Haldwani to Kedarnath" },
                { route: "Haldwani to Dehradun" },
                { route: "Haldwani to Almora" },
                { route: "Haldwani to Delhi IGI Airport" },
              ].map((item, index) => (
                <tr key={index} className="odd:bg-gray-50">
                  <td className="border border-gray-300 p-2">{item.route}</td>
                  {/* <td className="border border-gray-300 p-2">{item.price}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Places to Visit */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Places to Visit Near Haldwani
          </h3>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            {[
              {
                title: "Nainital",
                description:
                  "Nainital, the lake city, is situated amidst the mountains of the Himalayan belt. A popular hill station, especially in summer, known for its Mall Road built during British rule.",
              },
              {
                title: "Almora",
                description:
                  "Another beautiful hill station barely 90 km from Haldwani. A perfect getaway with family and friends. Book outstation cabs hassle-free.",
              },
              {
                title: "Munsiyari",
                description:
                  "A wonderful, all-season destination in the Himalayas with views of the Om Parvat. Situated 300 km from Haldwani, popular in winters for snowfall.",
              },
              {
                title: "Ranikhet",
                description:
                  "Known for its apple gardens, golf course, and scenic views. Convenient cab services available from Haldwani and Delhi.",
              },
              {
                title: "Pithoragarh",
                description:
                  "Famous for its amazing views, Pithoragarh is a beautiful district in Uttarakhand. Enjoy direct one-way cab services.",
              },
            ].map((place, index) => (
              <li key={index}>
                <h4 className="font-semibold">{place.title}</h4>
                <p>{place.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Haldwani;
