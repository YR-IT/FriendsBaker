import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] bg-white flex items-center justify-start bg-cover bg-center px-10 overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/09/81/79/17/360_F_981791783_PEM4F0bEnzZDH5DNtPYBQwwV7dLjkMFw.jpg')`,
          filter: "brightness(55%)",
        }}
      ></div>

      {/* Floating "bubbles" (sugar particles) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-yellow-300/70"
          initial={{ y: "100vh", x: Math.random() * window.innerWidth, opacity: 0 }}
          animate={{
            y: [-20, "100vh"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-left">
        <motion.p
          className="text-yellow-400 uppercase tracking-wide mb-3 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✦ The Best Bakery
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Bake With Passion
        </motion.h1>

        <motion.p
          className="text-lg text-gray-200 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          From warm croissants to delightful cakes — crafted with love & joy, just
          for you.
        </motion.p>

        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            Read More
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-yellow-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Our Menu
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 text-white"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.3c58-11.72 114.16-31.94 172-41.86 
            82-14.3 168.29-8.1 250.29 11.06 
            57.6 13.29 113.78 32.27 172 41.86 
            82 13.8 168.29 6.1 250.29-13.06V120H0V16.48
            a600.21 600.21 0 00321.39 39.82z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
