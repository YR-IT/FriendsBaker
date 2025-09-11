import { motion } from "framer-motion";
import { CheckCircle, Gift, Heart, Sparkles } from "lucide-react";

function GiftHamper() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-14 sm:py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-8 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          className="text-gray-800 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Icon with animation */}
          <motion.div
  className="flex items-center gap-4 mb-6 justify-center lg:justify-start"
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
  className="text-5xl sm:text-6xl  font-bold leading-tight mb-8 text-center lg:text-left"
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
  className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
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
            className="text-gray-700 text-lg mb-8 leading-relaxed font-medium max-w-md text-justify"
            initial={{ opacity: 0, y: 25 }}
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

          {/* Features */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
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
                className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl shadow-md border border-blue-100"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.15)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)"
                }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="p-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="text-white w-4 h-4" />
                </motion.div>
                <span className="text-gray-700 text-base font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.img
              src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Bakery Gift Hamper"
              className="relative rounded-2xl shadow-xl border-4 border-white/50 backdrop-blur-sm max-w-md w-full"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default GiftHamper;
