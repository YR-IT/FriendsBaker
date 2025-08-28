import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

function Hero() {
  const images = [
    {
      url: "https://t4.ftcdn.net/jpg/09/81/79/17/360_F_981791783_PEM4F0bEnzZDH5DNtPYBQwwV7dLjkMFw.jpg",
      title: "Freshly Baked Everyday",
      subtitle: "Start your morning with warm croissants & pastries",
    },
    {
      url: "https://t4.ftcdn.net/jpg/05/63/62/07/360_F_563620783_9icanRCanLxCe2h7SzwhSQvoEqS9RWSG.jpg",
      title: "Delicious Brownies",
      subtitle: "Rich, fudgy, and baked with premium cocoa",
    },
    {
      url: "https://realfood.tesco.com/media/images/1400x919-Miniegg-cupcakes-withoutbranding-ffa3dd9a-6ac9-4329-b66e-15fe7e027a2b-0-1400x919.jpg",
      title: "Cupcakes for Every Mood",
      subtitle: "Colorful treats to brighten your day",
    },
    {
      url: "https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-fresh-pastry-and-bakery-items-available-on-trays-image_2581269.jpg",
      title: "Freshly Baked Croissants & Pastries",
      subtitle: "Buttery, flaky layers topped with fresh berries",
    },
    {
      url: "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
      title: "Delicious Oven-Fresh Pizza",
      subtitle: "Cheesy, crispy & loaded with your favorite toppings",
    },
  ];

  const socialLinks = [
  { href: "https://www.instagram.com/friends.baker?igsh=MWVhZTNsNWg2azRkZQ==", icon: Instagram, color: "hover:text-pink-500" },
  { href: "https://www.facebook.com/share/19jEwH5Ti1/", icon: Facebook, color: "hover:text-blue-500" },
  { href: "https://x.com", icon: Twitter, color: "hover:text-sky-400" },
  { href: "https://youtube.com", icon: Youtube, color: "hover:text-red-500" },
];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  type BubblePos = {
    x: number;
    delay: number;
    duration: number;
  };

  const [bubblePositions, setBubblePositions] = useState<BubblePos[]>([]);

  useEffect(() => {
    const positions: BubblePos[] = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 5,
    }));
    setBubblePositions(positions);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[100vh] bg-white flex items-center justify-start bg-cover bg-center px-10 overflow-hidden"
    >
      {/* Background Carousel */}
      {/* <div className="absolute inset-0">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img.url})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
      </div> */}

      {/* Background Video (replaces image carousel) */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          style={{ filter: "brightness(90%)" }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/hero_bg.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>


      {/* Floating "bubbles" */}
      {bubblePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-yellow-300/70"
          initial={{ y: "100vh", x: pos.x, opacity: 0 }}
          animate={{ y: [-20, "100vh"], opacity: [0, 1, 0] }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            delay: pos.delay,
          }}
        />
      ))}

      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-20 text-teal-300">
      {socialLinks.map(({ href, icon: Icon, color }, i) => (
        <motion.a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.3, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className={`transition-colors ${color}`}
        >
          <Icon className="w-8 h-8 drop-shadow-md" />
        </motion.a>
      ))}
    </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center mx-auto">
        <motion.p
          className="text-white uppercase tracking-wide mb-3 font-semibold bg-teal-500 inline-block px-2 py-1 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ✦ The Best Bakery
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          key={images[current].title}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images[current].title}
        </motion.h1>

        <motion.p
          className="text-lg text-white mb-8"
          key={images[current].subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {images[current].subtitle}
        </motion.p>

        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Order Button */}
          <motion.a
  href="/contact-us" 
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className="relative overflow-hidden px-6 py-3 rounded-lg shadow-lg bg-white text-gray-800 group inline-block"
>
  <span className="absolute inset-0 bg-teal-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
  <span className="relative z-10 group-hover:text-white transition-colors duration-500">
    Order Now
  </span>
</motion.a>
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
