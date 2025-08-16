import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sophia Williams",
      text: "The croissants here are absolutely divine! Fresh, buttery, and flaky – just like in Paris. This is my go-to bakery every weekend.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "James Miller",
      text: "I ordered a custom cake for my daughter's birthday and it was beyond amazing – both in design and taste! Highly recommended.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emma Johnson",
      text: "Their cupcakes are heavenly – moist, rich, and beautifully decorated. Every bite feels like happiness.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Daniel Carter",
      text: "Best sourdough bread in town! Crispy crust, soft inside – absolutely perfect.",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Olivia Brown",
      text: "The pastries are always fresh and the coffee pairs perfectly. Love spending my mornings here.",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      name: "Liam Davis",
      text: "I’m hooked on their cheesecakes – rich, creamy, and absolutely delicious.",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Autoplay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="relative py-12 bg-gradient-to-b from-yellow-50 to-white overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Customers Say
      </motion.h2>

      {/* Slideshow */}
      <div className="max-w-3xl mx-auto px-6 text-center relative h-72">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full object-cover border-4 border-yellow-400 mb-4"
            />
            <p className="text-gray-600 italic mb-4">
              “{testimonials[index].text}”
            </p>
            <h4 className="font-bold text-gray-800">
              {testimonials[index].name}
            </h4>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
