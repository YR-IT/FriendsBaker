import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Surbhi Vinayak",
      text: "Yummiest and beautiful cake. Most importantly the design looked perfect. It made our celebration more memorable. My family was really pleased to see the half birthday cake for our 6 month old baby...",
    },
    {
      name: "Pritam Kumar Das",
      text: "Friend's Bakers was always our choice for cakes. However, I recently had a birthday celebration arranged with Lego theme and I couldn't be happier with their service! The food was absolutely delicious...",
    },
    {
      name: "Ankita Sharma",
      text: "Absolutely loved the cake! You never fail to add that extra sparkle to our celebrations. Your cakes are not just delicious — they’re memories on a plate.",
    },
    {
      name: "Jyoti Goyal",
      text: "Cake was so delicious. My 3 years old son was very happy with his favourite train cake design exactly as i told them. On every birthday of my son I order the cake from this bakery...",
    },
    {
      name: "Santwana Das",
      text: "Absolutely loved my experience! I ordered a Lego-themed cake along with snacks for Birthday celebration, and everything was just perfect. The cake was stunning in design and super delicious.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Autoplay every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + (isMobile ? 1 : 2)) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
  const dotCount = isMobile
    ? testimonials.length
    : Math.ceil(testimonials.length / 2);
  const activeDot = isMobile ? index : Math.floor(index / 2);

  const prevSlide = () => {
    setIndex((prev) =>
      isMobile
        ? (prev - 1 + testimonials.length) % testimonials.length
        : (prev - 2 + testimonials.length) % testimonials.length
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      isMobile
        ? (prev + 1) % testimonials.length
        : (prev + 2) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* Floating Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <motion.h2
        className="text-3xl sm:text-5xl font-bold text-center text-white mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        What Our Customers Say
      </motion.h2>

      {/* Testimonials Container */}
      <div className="max-w-6xl mx-auto px-6 relative min-h-[20rem] z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-[-3rem] top-1/2 -translate-y-1/2 bg-gradient-to-tr from-teal-600 to-teal-400 hover:opacity-90 p-3 rounded-full shadow-xl z-20"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {visible.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-lg p-8 flex flex-col items-center text-center w-full border border-gray-700 hover:border-teal-400 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow"
                    />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="text-teal-400 mb-4 w-7 h-7" />

                {/* Text */}
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  {t.text}
                </p>

                {/* Name */}
                <h4 className="font-semibold text-teal-300 text-lg">
                  — {t.name}
                </h4>
              </motion.div>
            ))}

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-[-3rem] top-1/2 -translate-y-1/2 bg-gradient-to-tr from-teal-600 to-teal-400 hover:opacity-90 p-3 rounded-full shadow-xl z-20"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-3 mt-14 z-10 relative">
        {Array.from({ length: dotCount }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              i === activeDot
                ? "bg-teal-400 shadow-lg shadow-teal-500/50"
                : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
