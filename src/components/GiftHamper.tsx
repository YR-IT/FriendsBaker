import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function GiftHamper() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 overflow-hidden">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 star-bg"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* Left Content */}
        <motion.div
          className="mt-10 text-white"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold leading-snug mb-8 text-teal-300"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Packed with love <br /> & all your favourites!
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-teal-500 rounded mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>

          <motion.p
            className="text-gray-300 text-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Now gift your loved ones our special hampers curated 
            with our signature bakery delights. A sweet surprise 
            to make every occasion unforgettable. 🎁
          </motion.p>

          {/* Features List */}
          <motion.ul
            className="space-y-3 text-gray-200 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              "Handpicked bakery favorites",
              "Beautifully wrapped & ready to gift",
              "Perfect for every celebration",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="text-teal-400 w-5 h-5" />
                {feature}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/GiftHamperFinal.png"
            alt="Bakery Hamper"
            className="rounded-2xl shadow-2xl border-4 border-teal-500/30"
            whileHover={{ scale: 1.02, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>

      {/* Starry Background CSS */}
      <style>{`
        .star-bg {
          background: transparent;
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .star-bg::before, 
        .star-bg::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: transparent url("https://www.transparenttextures.com/patterns/stardust.png") repeat;
          animation: stars 100s linear infinite;
          opacity: 0.4;
        }
        .star-bg::after {
          animation-duration: 160s;
          opacity: 0.2;
        }
        @keyframes stars {
          from { transform: translateY(0); }
          to { transform: translateY(1000px); }
        }
      `}</style>
    </section>
  );
}

export default GiftHamper;
