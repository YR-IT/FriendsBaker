import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Surbhi Vinayak",
      text: "Yummiest and beautiful cake. Most importantly the design looked perfect. It made our celebration more memorable. My family was really pleased to see the half birthday cake for our 6 month old baby. Thankyou so much for delivering it perfectly. Also, I order from them for a lot of occasions. It’s been a year and they have never disappointed me ever..! Happy to order from them. Getting lots of compliments from my family for the same. Whatever design I share with them, they deliver.!",
    },
    {
      name: "Pritam Kumar Das",
      text: "Friend's Bakers was always our choice for cakes. However, I recently had a birthday celebration arranged by Friend's Bakers with Lego theme and I couldn't be happier with their service! The food was absolutely delicious—every snack was fresh, flavorful, and beautifully presented. The attention to detail in the setup added a special touch to the event. All the kids kept complimenting the food.",
    },
    {
      name: "Ankita Sharma",
      text: "Absolutely loved the cake! You never fail to add that extra sparkle to our celebrations. Your cakes are not just delicious — they’re memories on a plate. You're always our first and only choice",
    },
    {
      name: "Jyoti Goyal",
      text: "Cake was so delicious. My 3 years old son was very happy with his favourite train cake design exactly as i told them to design. On every birthday of my son I order the cake from this eggless bakery. Thanku for always making our day so special.",
    },
    {
      name: "Santwana Das",
      text: "Absolutely loved my experience with Frends Baker! I ordered a Lego-themed cake along with a variety of snacks for Birthday celebration, and everything was just perfect. The cake was not only stunning in design but also super delicious — soft, fresh, and full of flavor. A big thanks to the entire team at Frends & Baker for making our event extra special. Highly recommend this bakery for anyone looking for quality, creativity, and great taste!",
    },
    {
      name: "Khyati Goel",
      text: "I recently ordered from Friends Baker and was so impressed with the food. I ordered Healthy Sandwich, valentine mini cake, multigrain cookies and Atta Jaggery Sesame cookies. The sandwich was filling, had loads of veggies and was delicious. The Valentine mini cake was to die for❤️, first of all I’d like to mention that the cake was the cutest, just so pretty and was a chocolate cake inside, so delicious. The multigrain cookies were delicious, perfect combination of health and taste. The atta jaggery sesame cookies had such an amazing taste, just perfect. I’m definitely gonna order again from here and would highly recommend you to try this place. Not to mention that packaging of food was also really cute.",
    },
    {
      name: "Amandeep Virk",
      text: "Greetings! We were delighted to receive such a lovely and delicious cake. The quality and the warm bond they share with their customers is commendable. Love to have such amazing shop in close proximity to us.",
    },
    {
      name: "Neeraj Ghai",
      text: "We ordered mix fruit cake for our daughter's birthday with a chosen online design and Friends Baker delivered exactly the same with a great taste. Really enjoyed a lot. Highly Recommended!",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get testimonials (1 for mobile, 2 for desktop)
  const visible = isMobile
    ? [testimonials[index]]
    : [testimonials[index], testimonials[(index + 1) % testimonials.length]];

  // Dots logic
  const dotCount = isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);
  const activeDot = isMobile ? index : Math.floor(index / 2);

  return (
    <section
      id="testimonials"
      className="relative py-16 bg-white overflow-hidden"
    >
      <div className="absolute -top20 -left-20 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 relative z-10"></div>
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-teal-900 mb-12 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Customers Say
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative h-auto min-h-[16rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
          >
            {visible.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-tr from-teal-100 to-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center w-full transition-all duration-300 border border-teal-200"
              >
                <p className="text-gray-700 italic mb-6 text-base sm:text-lg leading-relaxed line-clamp-5">
                  “{t.text}”
                </p>
                <h4 className="font-bold text-teal-800 text-lg sm:text-xl">
                  {t.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-12">
        {Array.from({ length: dotCount }).map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
              i === activeDot ? "bg-teal-500" : "bg-teal-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
