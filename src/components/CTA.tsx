import { motion } from "framer-motion";

function CTASection() {
  return (
    <section className="relative py-16 bg-blue-100 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-yellow-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Like Our Products?
        </motion.h2>
        <div className="flex justify-center mt-2 mb-10">
  <div className="flex space-x-1">
    <div className="w-2 h-2 bg-blue-300 transform rotate-45"></div>
    <div className="w-2 h-2 bg-blue-300 transform rotate-45"></div>
    <div className="w-2 h-2 bg-blue-300 transform rotate-45"></div>
    <div className="w-2 h-2 bg-blue-300 transform rotate-45"></div>
  </div>
</div>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every bite is a slice of joy—crafted with love and baked just for you. Discover our signature treats and feel the warmth.
        </motion.p>
        <motion.a
          href="#products"
          className="inline-block bg-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Order Online
        </motion.a>
      </div>

     <img
        src="/cakes.png" 
        alt="Decorative"
        className="hidden md:block absolute bottom-0 left-8 w-32 h-auto"
      />
      <img
  src="/cakes.png"
  alt="Decorative"
  className="hidden md:block absolute top-0 right-8 w-32 h-auto rotate-180"
/>

    </section>
  );
}

export default CTASection;
