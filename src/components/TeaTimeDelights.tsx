import { motion } from "framer-motion"; 

function TeaTimeDelights() {
  return (
    <section className="bg-white py-32 px-8 relative overflow-hidden">
      {/* Decorative glowing circles in background */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 relative z-10">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.0, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border-4 border-blue-200 rounded-3xl p-4 shadow-2xl relative"
          >
            <img
              src="/TeaTimeDelights.png"
              alt="Tea-Time Delight"
              className="rounded-2xl shadow-lg w-[450px] h-[450px] object-cover"
            />
            {/* Decorative corners */}
            <span className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></span>
            <span className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-blue-500 rounded-tr-lg"></span>
            <span className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-blue-500 rounded-bl-lg"></span>
            <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></span>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-8 leading-snug"
          >
            Tea-Time Delights
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center md:justify-start mb-8"
          >
            <div className="flex gap-3">
              <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
              <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
              <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
              <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-700 text-xl mb-10 max-w-lg leading-relaxed"
          >
            Pick the perfect companion for your tea (or coffee!) from a 
            range of freshly baked tea cakes & more.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-xl shadow-lg hover:bg-blue-700 transition"
          >
            Know More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default TeaTimeDelights;
