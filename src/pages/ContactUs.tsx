import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Coffee, Heart, Clock, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center relative py-28 px-6 md:px-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1696721497870-28dba5558938?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-teal-900 mb-4 drop-shadow-lg">
            Get in Touch with{" "}
            <span className="text-teal-600">Friends Baker</span>
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Have a question, suggestion, or just want to say hello? We'd love to
            hear from you! Connect with us through the details below or visit us
            at our store.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Store Highlights Instead of Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6 text-center"
          >
            {[
              {
                icon: Coffee,
                title: "Freshly Baked Everyday",
                desc: "Enjoy our signature delights made fresh every morning.",
              },
              {
                icon: Heart,
                title: "Made with Love",
                desc: "Every recipe is crafted with care and passion.",
              },
              {
                icon: Clock,
                title: "Perfect Anytime",
                desc: "Ideal for breakfast, evening tea, or celebrations.",
              },
              {
                icon: Calendar,
                title: "Opening Hours",
                desc: "Mon–Sat: 8:00 AM – 9:00 PM\nSunday: 9:00 AM – 6:00 PM",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-teal-100"
              >
                <div className="flex justify-center mb-4">
    <Icon className="text-teal-600" size={28} />
  </div>
                <h3 className="text-xl font-semibold text-teal-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-10"
          >
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-teal-600 text-white p-4 rounded-full shadow-lg">
                <Mail size={22} />
              </div>
              <a
                href="mailto:friendsbaker834@gmail.com"
                className="text-gray-800 text-lg font-medium hover:text-teal-800 transition"
              >
                friendsbaker834@gmail.com
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-teal-600 text-white p-4 rounded-full shadow-lg">
                <Phone size={22} />
              </div>
              <div className="flex flex-col">
                <a
                  href="tel:+918872197774"
                  className="text-gray-800 text-lg font-medium hover:text-teal-800 transition"
                >
                  +91 88721 97774
                </a>
                <a
                  href="tel:+919235777011"
                  className="text-gray-800 text-lg font-medium hover:text-teal-800 transition"
                >
                  +91 92357 77011
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <div className="bg-teal-600 text-white p-4 rounded-full shadow-lg">
                <MapPin size={22} />
              </div>
              <a
                href="https://www.google.com/maps/place/FRIENDS+BAKER/@30.6711016,76.8529354,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-lg font-medium hover:text-teal-800 transition"
              >
                Booth 152, Sector-20, Panchkula
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Full-size Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-20 w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-teal-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.789740161554!2d76.8529354!3d30.6711016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8eedb82b11fb%3A0xc220acfb0050c85a!2sFRIENDS%20BAKER!5e0!3m2!1sen!2sin!4v1692975555555!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
