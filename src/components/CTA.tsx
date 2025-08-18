import { motion } from "framer-motion";

function CTASection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Like Our Products?
        </motion.h2>

        <div className="flex justify-center mt-3 mb-12">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-400 transform rotate-45"></div>
            <div className="w-3 h-3 bg-blue-300 transform rotate-45"></div>
            <div className="w-3 h-3 bg-blue-400 transform rotate-45"></div>
            <div className="w-3 h-3 bg-blue-300 transform rotate-45"></div>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Every bite is a slice of joy—crafted with love and baked fresh every day. 
          Explore our signature cakes, breads, and sweet delights that bring happiness to every occasion.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#products"
          className="inline-block bg-blue-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:bg-blue-700 transition text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Order Online
        </motion.a>
      </div>

      {/* Artistic Bakery Accents */}
<motion.img
  src="/CTAleft.png"
  alt="Decorative Cake"
  className="hidden md:block absolute bottom-0 left-12 w-80 opacity-90"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
/>

      <motion.img
        src="/ctaright.png"
        alt="Decorative Cake"
        className="hidden md:block absolute top-1 right-12 w-100 opacity-90 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      />

      {/* Flour dust / artistic gradient */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    </section>
  );
}

export default CTASection;
