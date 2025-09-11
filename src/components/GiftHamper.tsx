import { motion } from "framer-motion";
import { CheckCircle, Gift, Heart, Sparkles } from "lucide-react";

function GiftHamper() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-32 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* Left Content */}
        <motion.div
          className="text-gray-800 space-y-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Icon with animation */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Gift className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                >
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Packed with love
            </span>
            <br />
            <span className="text-gray-800">
              & all your favourites!
            </span>
          </motion.h2>

          {/* Animated accent line */}
          <motion.div
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="h-1 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-0 left-0 h-1 w-8 bg-white rounded-full shadow-lg"
                animate={{ x: [0, 96, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
          </motion.div>

          <motion.p
            className="text-gray-700 text-xl mb-12 leading-relaxed font-medium max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Now gift your loved ones our special hampers curated 
            with our signature bakery delights. A{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text font-bold">
              sweet surprise
            </span>{" "}
            to make every occasion unforgettable. 🎁
          </motion.p>

          {/* Enhanced Features List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { text: "Handpicked bakery favorites", icon: CheckCircle },
              { text: "Beautifully wrapped & ready to gift", icon: CheckCircle },
              { text: "Perfect for every celebration", icon: CheckCircle },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)"
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white w-5 h-5" />
                </motion.div>
                <span className="text-gray-700 text-lg font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="relative group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl overflow-hidden text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <Gift className="w-5 h-5" />
                Shop Gift Hampers
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
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image with Enhanced Effects */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements around image */}
          <motion.div
            className="absolute -top-6 -left-6 w-12 h-12 bg-blue-400 rounded-full opacity-60"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute -bottom-4 -right-4 w-8 h-8 bg-indigo-500 rounded-full opacity-50"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30"
              transition={{ duration: 0.3 }}
            />
            
            <motion.img
              src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Bakery Gift Hamper"
              className="relative rounded-3xl shadow-2xl border-4 border-white/50 backdrop-blur-sm max-w-lg w-full"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />

            {/* Floating elements around image */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                style={{
                  top: `${20 + i * 20}%`,
                  left: i % 2 === 0 ? '-10px' : 'calc(100% + 10px)',
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
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

export default GiftHamper;