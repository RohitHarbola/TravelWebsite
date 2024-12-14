import React from "react";
import Slider from "react-slick";

const reviews = [
  {
    name: "Umesh Harbola",
    rating: 5,
    review:
      "Good service. What I liked the most is that they consider aspects of passenger safety keeping in mind the current scenario as well. I will surely use their services in the future as well.",
    link: "https://g.co/kgs/u7Lttm7",
  },
  {
    name: "Rahul Sharma",
    rating: 4,
    review:
      "Amazing experience! The cab was clean and the driver was very polite and professional. Highly recommend!",
    link: "https://g.co/kgs/u7Lttm7",
  },
];

const ReviewRating = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Google Reviews
      </h2>
      <Slider {...settings} className="max-w-5xl mx-auto">
        {reviews.map((review, index) => (
          <a
            key={index}
            href={review.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none"
          >
            <div className="p-6 sm:p-8 bg-white text-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 flex flex-col items-center space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {review.name}
              </h3>
              <p className="text-yellow-500 font-bold text-lg">
                {review.rating}/5 Rating
              </p>
              <p className="text-center text-sm sm:text-base text-gray-700 leading-relaxed">
                {review.review}
              </p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewRating;
