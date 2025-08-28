import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/TeaTimeDelights.png",
  "/tea.png",
  "/tea1.png",
  "/tea2.png",
  "/tea3.png",
  "/tea4.png",
];

function TeaTimeDelights() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-8 relative overflow-hidden">
      {/* Decorative glowing circles in background */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 relative z-10">
        {/* Left Slideshow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-3xl shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt="Tea-Time Delight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl w-[450px] h-[450px] object-cover"
              />
            </AnimatePresence>

            {/* teal decorative corner borders */}
            <span className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-teal-500 rounded-tl-lg"></span>
            <span className="absolute -top-3 -right-3 w-10 h-10 border-t-4 border-r-4 border-teal-500 rounded-tr-lg"></span>
            <span className="absolute -bottom-3 -left-3 w-10 h-10 border-b-4 border-l-4 border-teal-500 rounded-bl-lg"></span>
            <span className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-teal-500 rounded-br-lg"></span>

          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-teal-900 mb-8 leading-snug">
            Tea-Time Delights
          </h2>
          <p className="text-gray-700 text-xl mb-10 max-w-lg leading-relaxed">
            Pick the perfect companion for your tea (or coffee!) from a range of
            freshly baked tea cakes & more.
          </p>
          {/* Replaced Button with Beautiful Quote */}
          <blockquote className="text-lg md:text-xl italic text-gray-600 border-l-4 border-teal-500 pl-4">
            “A cup of tea & a slice of cake can turn an ordinary moment into a
            sweet memory.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default TeaTimeDelights;
