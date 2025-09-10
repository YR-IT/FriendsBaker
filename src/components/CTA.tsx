import { motion } from "framer-motion";

function CTASection() {
  return (
    <section className="relative py-12 sm:py-28 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-teal-900 dark:text-teal-200 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Like Our Products?
        </motion.h2>

        {/* Accent diamonds */}
        <div className="flex justify-center mt-3 mb-12">
          <div className="flex space-x-2">
            {["bg-teal-400", "bg-teal-300", "bg-teal-400", "bg-teal-300"].map((color, i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 ${color} dark:bg-teal-500 transform rotate-45`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Every bite is a slice of joy—crafted with love and baked fresh every day. 
          Explore our signature cakes, breads, and sweet delights that bring happiness to every occasion.
        </motion.p>

        {/* Button with shimmer */}
        <motion.a
          href="/contact-us"
          className="relative inline-block bg-teal-600 dark:bg-teal-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg overflow-hidden group text-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="relative z-10">Order Online</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 animate-[shimmer_2s_infinite]"></span>
        </motion.a>
      </div>

      {/* Artistic Bakery Accents */}
      <motion.img
        src="/CTAleft.png"
        alt="Decorative Cake"
        className="hidden md:block absolute bottom-0 left-12 w-80 opacity-90"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      <motion.img
        src="/ctaright.png"
        alt="Decorative Cake"
        className="hidden md:block absolute top-1 right-12 w-100 opacity-90"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      {/* Flour dust / artistic gradient */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-200 dark:bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-200"></div>
    </section>
  );
}

export default CTASection;
