import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-start">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/about.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black/50"></div> 
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            At <span className="text-blue-500 font-semibold">Friends Bakery</span>, we believe baking is more than just making bread and pastries—it’s about creating moments of joy. Our journey started with a simple passion for fresh, warm, and delightful treats, and today we continue to spread happiness, one bite at a time.
          </p>
        </motion.div>
      </div>

      {/* About Section with Side Image + Text */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-10">
        {/* Left Side Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/shop.png" 
            alt="Bakery History"
            className="rounded-xl shadow-lg w-full"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="uppercase text-base tracking-widest text-blue-600 font-semibold mb-4">
            About Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            Delivering Incredible Taste <br /> Since 2011!
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            Renowned as “Dilli Darwaja” wala Friends Bakery, we started as one of the first commercial bakery shops in our city. With a portfolio of 150+ products baked to perfection with years of experience and expertise, we believe in delivering quality products that are fine-tuned to the taste and likings of our customers.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            With our commitment to hygiene and change, we have made space in the hearts of all generations. With the flair for innovation, we create products that resonate with people of all age groups.
          </p> 
          <p className="text-gray-600 leading-relaxed text-lg">
            At Friends Bakery, we inherit the soul of our city, blending tradition with modern flavors to give our customers the best of both worlds. From crispy Khari to delightful biscuits and cookies, our offerings are crafted with love and passion.
          </p>
        </motion.div>
      </div>

      {/* Glimpse of Our Store Section */}
<motion.section
  className="w-full bg-gray-50 py-16 flex flex-col items-center px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3, // controls delay between children
      },
    },
  }}
>
  {/* Heading */}
  <motion.h2
    className="text-3xl sm:text-5xl font-bold text-gray-800 text-center mb-4"
    variants={{ hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } }}
  >
    A Glimpse Of Our Store
  </motion.h2>

  {/* Subtext */}
  <motion.p
    className="text-gray-600 text-center max-w-3xl mb-12 text-lg"
    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
  >
    Although we wish we could stimulate your sense of smell as well here on our website,
    but here is how we deliver visual treat that could be a feast for your eyes!
  </motion.p>

  {/* Image Grid */}
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
  >
    {["/shop.png", "/shop.png", "/shop.png"].map((src, i) => (
      <motion.div
        key={i}
        className="overflow-hidden rounded-xl shadow-lg"
        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
        whileHover={{ scale: 1.05, rotate: 1 }} // interactive hover effect
        transition={{ duration: 0.4 }}
      >
        <img
          src={src}
          alt={`Store view ${i + 1}`}
          className="w-full h-72 object-cover"
        />
      </motion.div>
    ))}
  </motion.div>
</motion.section>

     {/* Intro text */}
      <motion.p
        className="max-w-3xl text-center text-lg sm:text-xl mb-12 text-gray-700 px-6 mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        ✦ Where passion meets sweetness ✦ <br /> 
        From the first loaf to the finest pastries, our story has always been about love, community, and flavor. Every treat is baked fresh with handpicked ingredients and care.
      </motion.p>

      {/* Cards Section */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  }}
>
  {[
    {
      title: "Our Story",
      desc: "Born from a small kitchen dream, Friends Bakery grew into a community favorite, serving love in every slice.",
      icon: "🥖",
    },
    {
      title: "Our Promise",
      desc: "We use only natural, locally sourced ingredients, ensuring freshness and flavor you can trust.",
      icon: "🌿",
    },
    {
      title: "Our People",
      desc: "Every pastry is baked with care by skilled hands that treat baking as an art and service as a joy.",
      icon: "👩‍🍳",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform p-6 text-center">
        <div className="text-5xl mb-4">{item.icon}</div>
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">{item.title}</h2>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    </motion.div>
  ))}
</motion.div>

      {/* CTA */}
      <motion.div
        className="mt-16 mb-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="/menu"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl shadow-lg transition-all"
        >
          Explore Our Menu →
        </a>
      </motion.div>
    </div>
  );
}