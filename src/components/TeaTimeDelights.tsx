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
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-8 overflow-hidden">
      {/* Floating Bubbles Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble absolute rounded-full bg-teal-400/20"
            style={{
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20">
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
                className="rounded-2xl w-[450px] h-[450px] object-cover border-4 border-teal-500/30"
              />
            </AnimatePresence>

            {/* teal decorative corner borders */}
            <span className="absolute -top-3 -left-3 w-10 h-10 border-t-4 border-l-4 border-teal-400 rounded-tl-lg"></span>
            <span className="absolute -top-3 -right-3 w-10 h-10 border-t-4 border-r-4 border-teal-400 rounded-tr-lg"></span>
            <span className="absolute -bottom-3 -left-3 w-10 h-10 border-b-4 border-l-4 border-teal-400 rounded-bl-lg"></span>
            <span className="absolute -bottom-3 -right-3 w-10 h-10 border-b-4 border-r-4 border-teal-400 rounded-br-lg"></span>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center md:text-left text-white"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-teal-300 mb-8 leading-snug">
            Tea-Time Delights
          </h2>
          <p className="text-gray-300 text-xl mb-10 max-w-lg leading-relaxed">
            Pick the perfect companion for your tea (or coffee!) from a range of
            freshly baked tea cakes & more.
          </p>
          {/* Beautiful Quote */}
          <blockquote className="text-lg md:text-xl italic text-gray-400 border-l-4 border-teal-500 pl-4">
            “A cup of tea & a slice of cake can turn an ordinary moment into a
            sweet memory.”
          </blockquote>
        </motion.div>
      </div>

      {/* Bubble Animation CSS */}
      <style>{`
        .bubble {
          animation: floatUp linear infinite;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
            transform: translateY(-200px) scale(1.1);
          }
          100% {
            transform: translateY(-400px) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

export default TeaTimeDelights;
