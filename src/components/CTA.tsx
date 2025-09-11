import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

function CTASection() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
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
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
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

        {/* Main heading with gradient text */}
        <motion.h2
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Like Our Products?
        </motion.h2>

        {/* Animated accent line */}
        <motion.div
          className="flex justify-center mb-12"
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

        {/* Enhanced description */}
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Every bite is a slice of joy—crafted with{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold">
            love
          </span>{" "}
          and baked fresh every day. Explore our signature cakes, breads, and sweet delights that bring happiness to every occasion.
        </motion.p>

        {/* Enhanced CTA button */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact-us"
            className="relative group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl overflow-hidden text-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Order Online
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
            
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 -top-1 -bottom-1"
              animate={{
                background: [
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  "linear-gradient(90deg, transparent, transparent, transparent)"
                ],
                x: ["-100%", "100%"]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.a>

          {/* Secondary action */}
          <motion.button
            className="group inline-flex items-center gap-2 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Menu
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-blue-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {["Fresh Daily", "Premium Quality", "Fast Delivery"].map((text, i) => (
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
        </motion.div>
      </div>

      {/* Enhanced decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-300 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 border-2 border-indigo-300 rounded-full opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Decorative images with enhanced animations */}
      <motion.img
        src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Decorative Cake"
        className="hidden lg:block absolute bottom-0 left-12 w-80 rounded-2xl shadow-2xl opacity-90"
        initial={{ opacity: 0, y: 100, rotate: -10 }}
        whileInView={{ opacity: 1, y: 0, rotate: -5 }}
        animate={{ 
          y: [0, -15, 0],
          rotate: [-5, -3, -5]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        viewport={{ once: true }}
      />

      <motion.img
        src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Decorative Cake"
        className="hidden lg:block absolute top-10 right-12 w-72 rounded-2xl shadow-2xl opacity-90"
        initial={{ opacity: 0, y: -100, rotate: 10 }}
        whileInView={{ opacity: 1, y: 0, rotate: 5 }}
        animate={{ 
          y: [0, 20, 0],
          rotate: [5, 8, 5]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          rotate: { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }}
        viewport={{ once: true }}
      />
    </section>
  );
}

export default CTASection;