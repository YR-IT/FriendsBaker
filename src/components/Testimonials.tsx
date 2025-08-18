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
  const [isMobile, setIsMobile] = useState(false);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get testimonials (1 for mobile, 2 for desktop)
  const visible = isMobile
    ? [testimonials[index]]
    : [testimonials[index], testimonials[(index + 1) % testimonials.length]];

  // Dots logic
  const dotCount = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);
  const activeDot = isMobile ? index : Math.floor(index / 2);

  return (
    <section
      id="testimonials"
      className="relative py-16 bg-white overflow-hidden"
    >
      <div className="absolute -top20 -left-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 relative z-10"></div>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Customers Say
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative h-auto min-h-[16rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            {visible.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-tr from-blue-100 to-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-full transition-all duration-300 border border-blue-200"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-blue-400 shadow-md mb-4"
                />
                <p className="text-gray-700 italic mb-6 text-base sm:text-lg leading-relaxed">
                  “{t.text}”
                </p>
                <h4 className="font-bold text-blue-800 text-lg sm:text-xl">
                  {t.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-20">
        {Array.from({ length: dotCount }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
              i === activeDot ? "bg-blue-500" : "bg-blue-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
