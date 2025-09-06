import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Instagram, Facebook, Phone, Star, Sparkles, Coffee, Cookie, Cake } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  const images = [
    {
      url: "https://t4.ftcdn.net/jpg/09/81/79/17/360_F_981791783_PEM4F0bEnzZDH5DNtPYBQwwV7dLjkMFw.jpg",
      title: "Freshly Baked Smiles",
      subtitle: "Start your morning with warm croissants & pastries",
    },
    {
      url: "https://t4.ftcdn.net/jpg/05/63/62/07/360_F_563620783_9icanRCanLxCe2h7SzwhSQvoEqS9RWSG.jpg",
      title: "No Eggs, Only Love",
      subtitle: "Rich, fudgy, and baked with premium cocoa",
    },
    {
      url: "https://realfood.tesco.com/media/images/1400x919-Miniegg-cupcakes-withoutbranding-ffa3dd9a-6ac9-4329-b66e-15fe7e027a2b-0-1400x919.jpg",
      title: "Cupcakes for Every Mood",
      subtitle: "Colorful treats to brighten your day",
    },
    {
      url: "https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-fresh-pastry-and-bakery-items-available-on-trays-image_2581269.jpg",
      title: "Freshly Baked Croissants & Pastries",
      subtitle: "Buttery, flaky layers topped with fresh berries",
    },
    {
      url: "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
      title: "Delicious Oven-Fresh Pizza",
      subtitle: "Cheesy, crispy & loaded with your favorite toppings",
    },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/friends.baker?igsh=MWVhZTNsNWg2azRkZQ==", icon: Instagram, color: "hover:text-pink-500", label: "Instagram" },
    { href: "https://www.facebook.com/share/19jEwH5Ti1/", icon: Facebook, color: "hover:text-blue-500", label: "Facebook" },
    { href: "tel:+918872197774", icon: Phone, color: "hover:text-green-400", label: "Phone" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  type BubblePos = {
    x: number;
    delay: number;
    duration: number;
    size: number;
  };

  const [bubblePositions, setBubblePositions] = useState<BubblePos[]>([]);

  useEffect(() => {
    const positions: BubblePos[] = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 8,
      duration: 10 + Math.random() * 8,
      size: 8 + Math.random() * 16,
    }));
    setBubblePositions(positions);
  }, []);

  // Floating bakery icons
  const floatingIcons = [
    { icon: Coffee, delay: 0 },
    { icon: Cookie, delay: 1 },
    { icon: Cake, delay: 2 },
    { icon: Star, delay: 0.5 },
    { icon: Sparkles, delay: 1.5 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-red-50 flex items-center justify-start overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          style={{ filter: "brightness(75%) contrast(110%)" }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://www.pexels.com/download/video/4686874/"          
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      {/* Floating Bakery Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-300/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3], 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            y: [-20, 20, -20]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
        </motion.div>
      ))}

      {/* Enhanced floating particles */}
      {bubblePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: pos.size,
            height: pos.size,
            background: `linear-gradient(45deg, 
              ${i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f59e0b' : '#d97706'}40, 
              ${i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#d97706' : '#b45309'}60)`,
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
          }}
          initial={{ y: "100vh", x: pos.x, opacity: 0, scale: 0 }}
          animate={{ 
            y: [-50, "100vh"], 
            opacity: [0, 0.8, 0], 
            scale: [0, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            delay: pos.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Enhanced Social Links */}
      <motion.div 
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-6 z-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {socialLinks.map(({ href, icon: Icon, color, label }, i) => (
          <motion.a
            key={i}
            href={href}
            title={label}
            initial={{ opacity: 0, x: -50, rotate: -180 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ 
              delay: 0.7 + i * 0.15, 
              type: "spring", 
              stiffness: 100,
              duration: 0.8
            }}
            whileHover={{ 
              scale: 1.3, 
              rotate: 10,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            className={`group relative p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 ${color} hover:bg-white/20`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-lg transition-transform group-hover:scale-110" />
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-orange-500/20"
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge with enhanced animation */}
        <motion.div
          className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 200,
            delay: 0.2
          }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <motion.div 
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-400 to-orange-500 text-white font-semibold shadow-lg backdrop-blur-sm text-sm sm:text-base"
            animate={{ 
              boxShadow: [
                "0 4px 15px rgba(251, 191, 36, 0.3)",
                "0 8px 25px rgba(251, 191, 36, 0.5)",
                "0 4px 15px rgba(251, 191, 36, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
              </motion.div>
              <span className="text-xs sm:text-sm uppercase tracking-wider">The Best Bakery</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
          key={images[current].title}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.8
          }}
        >
          <motion.span 
            className="bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {images[current].title.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          key={images[current].subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {images[current].subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Primary CTA */}
          <motion.a
            href="/contact-us" 
            whileHover={{ 
              scale: 1.08, 
              y: -5,
              boxShadow: "0 15px 35px rgba(251, 191, 36, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-2xl bg-gradient-to-r from-blue-400 to-orange-500 text-white font-semibold text-base sm:text-lg transition-all duration-300"
            animate={{
              boxShadow: [
                "0 8px 25px rgba(251, 191, 36, 0.3)",
                "0 12px 35px rgba(251, 191, 36, 0.5)",
                "0 8px 25px rgba(251, 191, 36, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Order Now
              <motion.span
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#menu"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.6)"
            }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/30 text-white font-semibold text-base sm:text-lg backdrop-blur-sm transition-all duration-300"
          >
            View Menu
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-8 sm:mt-12 text-white/80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "Fresh", label: "Daily Baking" },
            { number: "100%", label: "Eggless" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="text-center relative px-2"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-lg sm:text-2xl font-bold text-blue-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1.7 + i * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs sm:text-sm">{stat.label}</div>
              {i < 2 && <div className="hidden sm:block w-px h-8 bg-white/30 absolute right-0 top-0"></div>}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Bottom Curve */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <svg
          className="relative block w-full h-16 sm:h-24 text-white"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="50%" stopColor="rgba(255,255,255,1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.9)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M321.39 56.3c58-11.72 114.16-31.94 172-41.86 
            82-14.3 168.29-8.1 250.29 11.06 
            57.6 13.29 113.78 32.27 172 41.86 
            82 13.8 168.29 6.1 250.29-13.06V120H0V16.48
            a600.21 600.21 0 00321.39 39.82z"
            fill="url(#waveGradient)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
          />
        </svg>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918872197774"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 group"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0, rotate: 180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ 
          delay: 2.5, 
          type: "spring", 
          stiffness: 200,
          duration: 0.8
        }}
      >
        {/* Pulse effects */}
        <motion.span 
          className="absolute inline-flex h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-green-500 opacity-60"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.span 
          className="absolute inline-flex h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-green-400 opacity-40"
          animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* Main Button */}
        <motion.span 
          className="relative flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white shadow-2xl transition-all duration-300"
          whileHover={{ 
            boxShadow: "0 15px 35px rgba(34, 197, 94, 0.5)",
            background: "linear-gradient(45deg, #22c55e, #16a34a)"
          }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;
