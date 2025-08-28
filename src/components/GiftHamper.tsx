import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

function GiftHamper() {
  return (
    <section className="bg-white pb-8 sm:py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* Left Content */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-semibold text-teal-900 leading-snug mb-8"
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
            className="text-gray-700 text-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Now gift your loved ones our special hampers curated 
            with our signature bakery delights. A sweet surprise 
            to make every occasion unforgettable. 🎁
          </motion.p>

          {/* Features List instead of Button */}
          <motion.ul
            className="space-y-3 text-gray-800 text-lg"
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
                <CheckCircle className="text-teal-600 w-5 h-5" />
                {feature}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/GiftHamperFinal.png"
            alt="Bakery Hamper"
            className="rounded-2xl shadow-2xl border-4 border-teal-100"
            whileHover={{ scale: 1.01, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default GiftHamper;
