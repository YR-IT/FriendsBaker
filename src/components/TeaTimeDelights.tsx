import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Coffee } from "lucide-react";

const images = [
  "/TeaTimeCakes/image1.jpg",
  "/TeaTimeCakes/image2.jpg",
  "/TeaTimeCakes/image3.jpg",
  "/TeaTimeCakes/image4.jpg",
  "/TeaTimeCakes/image5.jpg",
  "/TeaTimeCakes/image6.jpg",
  "/TeaTimeCakes/image7.jpg",
  "/TeaTimeCakes/image8.jpg"
];

function TeaTimeDelights() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(
        () => setIndex((prev) => (prev + 1) % images.length),
        4500
      );
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 sm:py-24 px-4 sm:px-6 overflow-hidden" // 📌 smaller padding on mobile
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-indigo-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating Orbs */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="orb absolute rounded-full"
            initial={{ 
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              scale: [0, 1, 0],
              x: [
                Math.random() * (window.innerWidth || 1000),
                Math.random() * (window.innerWidth || 1000),
                Math.random() * (window.innerWidth || 1000),
              ],
              y: [
                Math.random() * (window.innerHeight || 1000),
                Math.random() * (window.innerHeight || 1000),
                Math.random() * (window.innerHeight || 1000),
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              width: `${Math.random() * 80 + 30}px`, // 📌 smaller on mobile
              height: `${Math.random() * 80 + 30}px`,
              background: `radial-gradient(circle, ${[
                'rgba(59, 130, 246, 0.1)',
                'rgba(14, 165, 233, 0.1)',
                'rgba(59, 130, 246, 0.1)',
                'rgba(6, 182, 212, 0.1)',
                'rgba(34, 197, 94, 0.1)'
              ][Math.floor(Math.random() * 5)]})`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-12 lg:gap-20" // 📌 reduced gaps on mobile
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-2 xl:order-1 text-center xl:text-left px-2 sm:px-0" // 📌 center on mobile
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/80 text-sm sm:text-base"
          >
            <Sparkles size={14} className="sm:w-4 sm:h-4 text-cyan-400" />
            <span className="font-medium">Premium Collection</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight"
          >
            Tea-Time
            <br />
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Delights
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white/70 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-xl mx-auto xl:mx-0 leading-relaxed"
          >
            Discover the perfect harmony of flavors with our artisanal selection of tea cakes, pastries, and delectable treats crafted for your special moments.
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-sm sm:text-base"
          >
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-blue-400 opacity-30">
              <Coffee size={20} className="sm:w-6 sm:h-6" />
            </div>
            <p className="text-white/80 italic pl-6 sm:pl-8">
              "Every sip deserves its perfect companion - a symphony of taste that transforms ordinary moments into extraordinary memories."
            </p>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </motion.blockquote>
        </motion.div>

        {/* Right Slideshow */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="order-1 xl:order-2 flex justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"> {/* 📌 responsive container */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative group"
            >
              <div className="relative w-full aspect-square p-2 sm:p-4 bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"> {/* 📌 aspect ratio for responsiveness */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt="Tea-Time Delight"
                    initial={{ opacity: 0, scale: 1.1, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    onError={() => {
                      console.error('Tea-Time image failed to load:', images[index]);
                    }}
                    onLoad={() => {
                      console.log('Tea-Time image loaded successfully:', images[index]);
                    }}
                  />
                </AnimatePresence>
                
                
                {/* Indicators */}
                <div className="absolute bottom-3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
                  {images.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        i === index 
                          ? 'bg-white shadow-lg' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <motion.button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </motion.button>
            </motion.div>

            {/* Decorative Orbs */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60 blur-sm"
            />
            
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-40 blur-sm"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-300 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
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
    </section>
  );
}

export default TeaTimeDelights;
