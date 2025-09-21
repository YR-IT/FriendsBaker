import React, { type JSX } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Coffee,
  Heart,
  Clock,
  Calendar,
  Send,
  Star,
  MessageCircle,
  Instagram,
  QrCode,
  ExternalLink,
  Users,
} from "lucide-react";

type Feature = {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string; // Tailwind gradient classes
};

type ConnectOption = {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  hoverColor: string;
  link: string;
  qrPlaceholder?: boolean;
};

// --------------------
// Variants (defined outside JSX)
// --------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, y: -10, transition: { duration: 0.3, ease: "easeInOut" } },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const qrVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0, 
    transition: { 
      type: "spring", 
      stiffness: 260, 
      damping: 20,
      duration: 0.8 
    } 
  },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    transition: { duration: 0.3 } 
  },
};

// --------------------
// Static data
// --------------------
const features: Feature[] = [
  {
    icon: Coffee,
    title: "Freshly Baked Daily",
    desc: "Artisan breads and pastries made fresh every morning with premium ingredients.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Heart,
    title: "Made with Passion",
    desc: "Every recipe is a labor of love, crafted with traditional techniques and modern flair.",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: Clock,
    title: "Perfect Timing",
    desc: "Whether it's morning coffee, afternoon tea, or celebrations — we're here.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Calendar,
    title: "Always Open",
    desc: "Mon–Sat: 8:00 AM – 9:00 PM | Sunday: 9:00 AM – 6:00 PM",
    color: "from-cyan-400 to-cyan-600",
  },
];

const connectOptions: ConnectOption[] = [
  {
    icon: Star,
    title: "Review Us",
    subtitle: "Google Reviews",
    description: "Share your experience and help others discover our delicious baked goods",
    color: "from-blue-500 to-blue-600",
    hoverColor: "from-blue-600 to-blue-700",
    link: "https://www.google.com/maps/place/FRIENDS+BAKER/@30.6711016,76.8529354,17z",
    qrPlaceholder: true,
  },
  {
    icon: Instagram,
    title: "Follow Us",
    subtitle: "@friendsbaker",
    description: "Follow our Instagram for daily updates, behind-the-scenes content and special offers",
    color: "from-pink-500 to-rose-500",
    hoverColor: "from-pink-600 to-rose-600",
    link: "#",
    qrPlaceholder: true,
  },
  {
    icon: MessageCircle,
    title: "Chat Us",
    subtitle: "WhatsApp",
    description: "Quick orders, custom requests, or just say hello - we're always here to chat",
    color: "from-green-500 to-emerald-500",
    hoverColor: "from-green-600 to-emerald-600",
    link: "https://wa.me/918872197774",
    qrPlaceholder: true,
  },
  {
    icon: MapPin,
    title: "Locate Us",
    subtitle: "Find Our Store",
    description: "Get directions to our bakery in Sector-20, Panchkula for the freshest treats",
    color: "from-purple-500 to-violet-500",
    hoverColor: "from-purple-600 to-violet-600",
    link: "https://www.google.com/maps/place/FRIENDS+BAKER/@30.6711016,76.8529354,17z",
    qrPlaceholder: true,
  },
];

// --------------------
// Component
// --------------------
export default function Contact(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, -150, 0], y: [0, 100, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-48 h-48 bg-indigo-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-cyan-200/30 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 py-20 px-6 md:px-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="relative inline-block">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur opacity-20"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6">
              Get in Touch
            </h1>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
            with <span className="text-indigo-600">Friend&apos;s Baker</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-blue-700/80 max-w-4xl mx-auto text-xl leading-relaxed">
            Experience the art of baking where tradition meets innovation. We&apos;d
            love to connect with you!
          </motion.p>
        </motion.div>

        {/* Connect With Us Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-24 max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg blur opacity-20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <h2 className="relative text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4">
                Connect With Us
              </h2>
            </div>
            <p className="text-blue-700/80 text-lg max-w-2xl mx-auto">
              Scan, click, or tap to connect with Friends Baker in your preferred way
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {connectOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="group relative"
                >
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${option.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Main card */}
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 hover:bg-white/95 transition-all duration-500 h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${option.color} text-white mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <Icon size={32} />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {option.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600">
                        {option.subtitle}
                      </p>
                    </div>

                    {/* QR Code placeholder */}
                    <motion.div
                      variants={qrVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="flex justify-center mb-6"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-2 border-gray-300/50 group-hover:border-gray-400/70 transition-colors duration-300">
                        <QrCode size={40} className="text-gray-600" />
                      </div>
                    </motion.div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm text-center mb-6 flex-grow">
                      {option.description}
                    </p>

                    {/* Action button */}
                    <motion.a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${option.hoverColor} text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group/button`}
                    >
                      <span>Connect</span>
                      <ExternalLink size={16} className="group-hover/button:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-white/50">
              <Users size={20} className="text-teal-600" />
              <span className="text-gray-700 font-medium">Join thousands of happy customers</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ❤️
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left: Features */}
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-8">
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-blue-800 mb-8 text-center lg:text-left">
              Why Choose Us?
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} variants={cardVariants} initial="hidden" animate="visible" whileHover="hover" className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                    <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-blue-100 h-full">
                      <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} text-white mb-6 shadow-lg`}
                      >
                        <Icon size={28} />
                      </motion.div>

                      <h4 className="text-xl font-bold text-blue-800 mb-4">{item.title}</h4>
                      <p className="text-blue-700/80 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-8">
            <motion.h3 variants={itemVariants} className="text-3xl font-bold text-blue-800 mb-8 text-center lg:text-left">
              Contact Information
            </motion.h3>

            {/* Email */}
            <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover" className="group">
              <div className="flex items-center space-x-6 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-blue-100">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  <Mail size={24} />
                </motion.div>

                <div>
                  <p className="text-blue-800 font-semibold mb-1">Email Us</p>
                  <a href="mailto:friendsbaker834@gmail.com" className="text-blue-600 text-lg font-medium hover:text-indigo-600 transition-colors duration-300">
                    friendsbaker834@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover" className="group">
              <div className="flex items-start space-x-6 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-blue-100">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  <Phone size={24} />
                </motion.div>

                <div>
                  <p className="text-blue-800 font-semibold mb-2">Call Us</p>
                  <div className="space-y-1">
                    <a href="tel:+918872197774" className="block text-blue-600 text-lg font-medium hover:text-indigo-600 transition-colors duration-300">
                      +91 88721 97774
                    </a>
                    <a href="tel:+919235777011" className="block text-blue-600 text-lg font-medium hover:text-indigo-600 transition-colors duration-300">
                      +91 92357 77011
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover" className="group">
              <div className="flex items-center space-x-6 bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-blue-100">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  <MapPin size={24} />
                </motion.div>

                <div>
                  <p className="text-blue-800 font-semibold mb-1">Visit Us</p>
                  <a href="https://www.google.com/maps/place/FRIENDS+BAKER/@30.6711016,76.8529354,17z" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg font-medium hover:text-indigo-600 transition-colors duration-300">
                    Booth 152, Sector-20, Panchkula
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Contact Button */}
            <motion.button whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl flex items-center justify-center space-x-3 group">
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              <span>Send Quick Message</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-blue-800 mb-4">Find Us Here</h3>
            <p className="text-blue-700/80 text-lg">
              Located in the heart of Panchkula, easily accessible and always welcoming
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative w-full h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <iframe
                src="https://www.google.com/maps?q=FRIENDS%20BAKER%2C%20Booth%20152%2C%20Sector%2020%2C%20Panchkula%2C%20Haryana%20134117&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="Friends Baker Location"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Stars/Testimonial */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="flex justify-center space-x-2 mt-16">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} initial={{ scale: 0, rotate: 180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }} whileHover={{ scale: 1.2, rotate: 360 }}>
              <Star className="w-8 h-8 text-yellow-400 fill-current" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="text-center text-blue-700 mt-4 text-lg font-medium">
          Loved by thousands of customers
        </motion.p>
      </div>
    </div>
  );
}