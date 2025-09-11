import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Surbhi Vinayak",
      text: "Yummiest and beautiful cake. Most importantly the design looked perfect. It made our celebration more memorable. My family was really pleased to see the half birthday cake for our 6 month old baby...",
      rating: 5,
    },
    {
      name: "Pritam Kumar Das",
      text: "Friend's Bakers was always our choice for cakes. However, I recently had a birthday celebration arranged with Lego theme and I couldn't be happier with their service! The food was absolutely delicious...",
      rating: 5,
    },
    {
      name: "Ankita Sharma",
      text: "Absolutely loved the cake! You never fail to add that extra sparkle to our celebrations. Your cakes are not just delicious — they're memories on a plate.",
      rating: 5,
    },
    {
      name: "Jyoti Goyal",
      text: "Cake was so delicious. My 3 years old son was very happy with his favourite train cake design exactly as i told them. On every birthday of my son I order the cake from this bakery...",
      rating: 5,
    },
    {
      name: "Santwana Das",
      text: "Absolutely loved my experience! I ordered a Lego-themed cake along with snacks for Birthday celebration, and everything was just perfect. The cake was stunning in design and super delicious.",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Autoplay every 5s (paused on hover)
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + (isMobile ? 1 : 2)) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile, testimonials.length, isHovered]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visible = isMobile
    ? [testimonials[index]]
    : [testimonials[index], testimonials[(index + 1) % testimonials.length]];

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

  const goToDot = (dotIndex: number) => {
    const newIndex = isMobile ? dotIndex : dotIndex * 2;
    setIndex(newIndex);
  };

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 sm:py-20 px-6 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Sparkle icon with animation */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8 leading-tight">
            What Our Customers
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text">
              Say About Us
            </span>
          </h2>

          {/* Animated accent line */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-0 left-0 h-1 w-6 bg-white rounded-full shadow-lg"
                animate={{ x: [0, 72, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Discover why thousands of customers trust us with their{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold">
              special moments
            </span>
          </motion.p>
        </motion.div>

        {/* Testimonials Container */}
        <div className="relative min-h-[28rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -50, rotateX: -10 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {/* Navigation Arrows */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-[-4rem] top-1/2 -translate-y-1/2 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-white hover:shadow-lg transition-all duration-300 z-20 group"
                whileHover={{ scale: 1.1, x: -2, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={24} className="group-hover:text-indigo-600 transition-colors" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-[-4rem] top-1/2 -translate-y-1/2 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-white hover:shadow-lg transition-all duration-300 z-20 group"
                whileHover={{ scale: 1.1, x: 2, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={24} className="group-hover:text-indigo-600 transition-colors" />
              </motion.button>

              {visible.map((testimonial, i) => (
                <motion.div
                  key={`${index}-${i}`}
                  initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: 2,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                    transition: { type: "spring", stiffness: 200, damping: 25 }
                  }}
                  className="relative group"
                >
                  {/* Enhanced Glassmorphism Card */}
                  <div className="relative p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-blue-200/50 shadow-2xl h-full flex flex-col">
                    {/* Decorative Quote Background */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote size={60} className="text-blue-500" />
                    </div>

                    {/* Enhanced Stars */}
                    <div className="flex items-center justify-center space-x-1 mb-6 relative z-10">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.3 + starIndex * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                        >
                          <Star
                            className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-lg"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Quote className="text-white w-6 h-6" />
                      </motion.div>
                    </div>

                    {/* Enhanced Text */}
                    <motion.p 
                      className="text-gray-700 leading-relaxed mb-8 italic text-center flex-grow text-lg font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      "{testimonial.text}"
                    </motion.p>

                    {/* Enhanced Name Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="text-center"
                    >
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        <h4 className="font-bold text-blue-600 text-xl">
                          {testimonial.name}
                        </h4>
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                      </div>
                      <motion.div 
                        className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"
                        animate={{ scaleX: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>

                    {/* Enhanced Decorative Elements */}
                    <motion.div 
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-60"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-40"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced Dots Navigation */}
        <motion.div 
          className="flex justify-center space-x-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {Array.from({ length: dotCount }).map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goToDot(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className={`relative transition-all duration-300 ${
                i === activeDot
                  ? "w-12 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg shadow-blue-400/30"
                  : "w-3 h-3 bg-blue-300/50 rounded-full hover:bg-blue-400/70"
              }`}
            >
              {i === activeDot && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Trust indicators */}
        {/* <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-blue-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          {["5-Star Reviews", "Happy Customers", "Quality Guaranteed"].map((text, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 text-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              <span className="text-sm font-medium">{text}</span>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 0.6, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced decorative elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-300 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-32 right-32 w-12 h-12 border-2 border-indigo-300 rounded-full opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}

export default Testimonials;