import { motion, useScroll, useTransform, type Variants, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart, Award, Users, Star, ChefHat, Clock } from "lucide-react";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const aboutImages = [
    "/About image/image1.jpg",
    "/About image/image2.jpg",
    "/About image/image3.jpg"
  ];

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [aboutImages.length]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          style={{ left: '10%', top: '20%' }}
        />
        <motion.div 
          className="absolute w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 40 }}
          style={{ right: '15%', bottom: '30%' }}
        />
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{ y, opacity }}
      >
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(37, 99, 235, 0.8) 50%, rgba(29, 78, 216, 0.9) 100%), url('https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')" 
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <ChefHat className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Friend's Baker
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Where passion meets perfection, creating moments of pure joy through the art of baking. 
            Every loaf tells a story, every pastry carries our love.
          </motion.p>

          <motion.div
            className="mt-12 flex justify-center space-x-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
          >
            {[
              { icon: Award, text: "13+ Years" },
              { icon: Users, text: "50k+ Happy Customers" },
              { icon: Star, text: "150+ Products" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full mb-2 inline-block">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white/90 font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 bg-white">
        {/* Story Section */}
        <motion.div 
          className="w-full max-w-7xl mx-auto px-6 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative group">
                {/* Image Carousel Container */}
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={aboutImages[currentImageIndex]}
                      alt={`Our Bakery Story ${currentImageIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      style={{ 
                        objectPosition: currentImageIndex === 0 ? 'center top' : 'center center'
                      }}
                      initial={{ opacity: 0, scale: 1.1, x: 100 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: -100 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeInOut",
                        scale: { duration: 0.6 },
                        x: { duration: 0.6 }
                      }}
                      whileHover={{ scale: 1.02 }}
                    />
                  </AnimatePresence>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {aboutImages.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-white shadow-lg' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Est. 2011
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <motion.div 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                    Our Journey
                  </span>
                </motion.div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Delivering Incredible Taste Since{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    2011
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Friend's Baker has been a cherished name in our city for generations, known for blending tradition with innovation. From our humble beginnings as one of the first commercial bakeries, we've grown into a trusted destination for freshly baked delights.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  With over 150 handcrafted products ranging from our signature Khari to indulgent cookies, each item reflects our unwavering commitment to quality, hygiene, and the pure joy of exceptional baking that brings happiness to every occasion.
                </motion.p>
              </div>

              {/* ✅ FIXED: Badges now center on mobile */}
              <motion.div 
                className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 pt-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
              >
                {[
                  { icon: Heart, text: "Made with Love", color: "from-pink-400 to-rose-500" },
                  { icon: Clock, text: "Fresh Daily", color: "from-blue-400 to-indigo-500" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100"
                  >
                    <div className={`p-2 bg-gradient-to-r ${item.color} rounded-full`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Store Gallery Section */}
        <motion.section
          className="py-20 bg-gradient-to-b from-blue-50 to-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                A Glimpse Of Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Store
                </span>
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Although we wish we could stimulate your sense of smell as well here on our website, 
                but here is how we deliver visual treat that could be a feast for your eyes!
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {aboutImages.map((src, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt={`Friend's Baker Store ${i + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      objectPosition: i === 0 ? 'center top' : 'center center'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div 
                    className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-2">Our Space</h3>
                    <p className="text-sm text-blue-200">Where magic happens daily</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ...rest of your code stays unchanged */}
        <motion.section
          className="py-20 bg-gradient-to-b from-blue-50 to-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Our Founding {" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Member's
                </span>
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Founder of Friends Bakerx, passionate about crafting fresh, artisanal baked goods with a focus on quality and authenticity. Dedicated to delivering delightful experiences in every bite.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {[
                "https://media.istockphoto.com/id/1076244572/photo/cooking-master-class-in-bakery-chef-with-his-assistant-showing-ready-samples-of-baking-test.webp?a=1&b=1&s=612x612&w=0&k=20&c=BYlOuVgDFIDN9YdEoGYZcVUl1enN_y92QN3nFpnDHT8=",
                "https://media.istockphoto.com/id/1479330210/photo/artisan-baker-applying-egg-wash-on-to-pastries-in-a-small-bakery.webp?a=1&b=1&s=612x612&w=0&k=20&c=KaHDZDMaTDKZ0pUWbYTq_ayh6_fKbx3wCkunBw0TbE0=",
                "https://media.istockphoto.com/id/627198666/photo/happy-in-the-bakery.jpg?s=612x612&w=0&k=20&c=3VAdnF68YIAYUq3gXf8ft-sFeHLg6AYrbM8JV8HlOp4="
              ].map((src, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt={`Store view ${i + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div 
                    className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100"
                    
                  >
                    <h3 className="text-xl font-bold mb-2">Our Space</h3>
                    <p className="text-sm text-blue-200">Where magic happens daily</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* next piece of code if req. */}
      </div>
    </div>
  );
}
