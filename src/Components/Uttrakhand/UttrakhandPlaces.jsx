import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UttarakhandPlaces = () => {
    const places = [
        {
          name: "Dehradun",
          image: "/assets/dehradun.png",
          description:
            "Dehradun, the capital city of Uttarakhand, is famous for its serene environment and popular spots like Robber's Cave and Sahastradhara.",
        },
        {
          name: "Mussoorie",
          image: "/assets/Mussoorie.png",
          description:
            "Known as the 'Queen of Hills,' Mussoorie offers breathtaking views of the Himalayas, Kempty Falls, and Mall Road.",
        },
        {
          name: "Nainital",
          image: "/assets/Nainital.png",
          description:
            "Nainital, with its beautiful Naini Lake and serene surroundings, is a top tourist destination in Uttarakhand.",
        },
        {
          name: "Kaichidham",
          image: "/assets/Kaichidham.png",
          description:
            "Kaichidham, with its famous Hanuman Ji temple and tranquil surroundings, is a spiritual retreat in Uttarakhand.",
        },
        {
          name: "Bhimtal",
          image: "/assets/Bhimtal.png",
          description:
            "Bhimtal, known for its beautiful lake and peaceful environment, is a favorite destination for nature lovers.",
        },
        {
          name: "Mukteshwar",
          image: "/assets/Mukteshwar.png",
          description:
            "Mukteshwar offers spectacular mountain views, lush greenery, and the famous Mukteshwar Dham Temple.",
        },
        {
          name: "Rishikesh",
          image: "/assets/Rishikesh.png",
          description:
            "Rishikesh, the Yoga Capital of the World, is known for its spiritual vibe, adventure activities like river rafting, and iconic Laxman Jhula.",
        },
        {
          name: "Kedarnath",
          image: "/assets/Kedarnath.png",
          description:
            "Kedarnath, a sacred town, is surrounded by majestic snow-capped peaks and attracts thousands of pilgrims annually.",
        },
        {
          name: "Haridwar",
          image: "/assets/Haridwar.png",
          description:
            "Haridwar is one of the holiest cities in India, known for the Ganga Aarti at Har Ki Pauri and its religious significance.",
        },
        {
          name: "Chopta",
          image: "/assets/Chopta.png",
          description:
            "Chopta, also known as the 'Mini Switzerland of Uttarakhand,' is a paradise for trekkers and nature enthusiasts.",
        },
        {
          name: "Auli",
          image: "/assets/Auli.png",
          description:
            "Auli is a popular skiing destination, offering panoramic views of the Himalayan peaks and adventure opportunities.",
        },
        {
          name: "Valley of Flowers",
          image: "/assets/ValleyofFlowers.png",
          description:
            "A UNESCO World Heritage Site, the Valley of Flowers is a breathtaking paradise filled with vibrant flora and fauna.",
        },
        {
          name: "Jim Corbett National Park",
          image: "/assets/corbett.png",
          description:
            "Jim Corbett National Park is India’s oldest national park, known for its rich biodiversity and tiger sightings.",
        },
        {
          name: "Binsar",
          image: "/assets/Binsar.png",
          description:
            "Binsar is a quaint hill station known for its breathtaking views of the snow-capped Himalayan peaks.",
        },
        {
          name: "Almora",
          image: "/assets/Almora.png",
          description:
            "Almora is a charming town in the Kumaon region, known for its cultural heritage, scenic beauty, and vibrant markets.",
        },
        {
          name: "Pithoragarh",
          image: "/assets/Pithoragarh.png",
          description:
            "Pithoragarh is a picturesque valley, often referred to as 'Little Kashmir,' offering a serene escape amidst nature.",
        },
        {
          name: "Ranikhet",
          image: "/assets/Ranikhet.png",
          description:
            "Ranikhet is a peaceful cantonment town surrounded by lush forests and offering stunning Himalayan views.",
        },
        {
          name: "Lansdowne",
          image: "/assets/Lansdowne.png",
          description:
            "Lansdowne is a quiet hill station known for its natural beauty, oak forests, and serene atmosphere.",
        },
        {
          name: "Harsil",
          image: "/assets/Harsil.png",
          description:
            "Harsil is a hidden gem, offering scenic views, apple orchards, and a tranquil environment for relaxation.",
        },
        {
          name: "Tehri Lake",
          image: "/assets/TehriLake.png",
          description:
            "Tehri Lake is a popular spot for water sports like jet skiing, kayaking, and boating amidst a stunning backdrop.",
        },
        {
          name: "Pangot",
          image: "/assets/Pangot.png",
          description:
            "Pangot is a bird watcher’s paradise, home to over 300 species of birds and surrounded by dense forests.",
        },
      ];
      

  const settings = {
    dots: true, // Enable pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Navigation arrows for desktop
  };

  return (
    <div className="bg-gray-100 py-8 px-4 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">
        Tourist Places in Uttarakhand
      </h2>
      <Slider {...settings}>
        {places.map((place, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center mx-auto"
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-3xl mx-auto">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {place.name}
                </h3>
                <p className="text-gray-600">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UttarakhandPlaces;
