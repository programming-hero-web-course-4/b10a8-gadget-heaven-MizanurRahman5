import React from 'react';
import { Helmet } from 'react-helmet';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sadia Rahman",
      role: "Web Developer",
      feedback: "This website is truly amazing! The UI is clean, and the features are just perfect for my needs.",
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Tanvir Hasan",
      role: "Graphic Designer",
      feedback: "The experience has been seamless. It's user-friendly and the overall design is elegant.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Ayesha Karim",
      role: "Content Writer",
      feedback: "Loved it! It has made my work so much easier and the support is excellent.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4,
    },
  ];

  return (
    <div className="py-12 mt-20 px-6 md:px-12 lg:px-24">
       <Helmet>
        <title>Gadget Heaven - Review</title>
        <meta name="description" content="Welcome to Gadget Heaven, your one-stop shop for all the latest gadgets." />
      </Helmet>
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        What Our Users Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="w-full md:w-1/2 lg:w-1/3 p-4"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-md"
              />
              <h3 className="text-2xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
              <p className="mt-4 text-gray-700 italic mb-6">"{testimonial.feedback}"</p>
              <div className="mt-4 flex justify-center">
                <span className="text-yellow-400 text-xl font-semibold">
                  {"★".repeat(Math.floor(testimonial.rating))}
                </span>
                <span className="text-gray-300 text-xl">
                  {"★".repeat(5 - Math.floor(testimonial.rating))}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{testimonial.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
