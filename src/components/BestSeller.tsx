import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bestSellers = [
  {
    id: 1,
    name: "Fresh Cream Pineapple Cake",
    image:
      "https://ribbonsandballoons.com/assets1/uploads/RAsmalali_Cake_copy_808320.jpg",
  },
  {
    id: 2,
    name: "Overload Brownie",
    image:
      "https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=",
  },
  {
    id: 3,
    name: "Dense Loaf",
    image:
      "https://bkmedia.bakingo.com/dainty-dry-dense-cake-cake2661dryc-AA.jpg",
  },
  {
    id: 4,
    name: "CheeseCake",
    image:
      "https://www.seriouseats.com/thmb/Mykce8jNBk43y7fKyIjaPm2BB58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__06__20170526-no-bake-cheesecake-vicky-wasik-18-89991c64ba544e19bc05c774c499438c.jpg",
  },
   {
    id: 1,
    name: "Fresh Cream Pineapple Cake",
    image:
      "https://ribbonsandballoons.com/assets1/uploads/RAsmalali_Cake_copy_808320.jpg",
  },
  {
    id: 2,
    name: "Overload Brownie",
    image:
      "https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=",
  },
  {
    id: 3,
    name: "Dense Loaf",
    image:
      "https://bkmedia.bakingo.com/dainty-dry-dense-cake-cake2661dryc-AA.jpg",
  },
  {
    id: 4,
    name: "CheeseCake",
    image:
      "https://www.seriouseats.com/thmb/Mykce8jNBk43y7fKyIjaPm2BB58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__06__20170526-no-bake-cheesecake-vicky-wasik-18-89991c64ba544e19bc05c774c499438c.jpg",
  },
];

function BestSellers() {
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  return (
    <section
      className="py-16 bg-white relative"
      id="best-sellers"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-teal-900"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Best-Sellers
        </motion.h2>

        {/* Decorative line */}
        <div className="flex justify-center mt-3 mb-12">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-teal-400 transform rotate-45"></div>
            <div className="w-3 h-3 bg-teal-300 transform rotate-45"></div>
            <div className="w-3 h-3 bg-teal-400 transform rotate-45"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {bestSellers.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-100 hover:shadow-2xl transition cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() =>
                setTooltip({ visible: true, text: item.name, x: 0, y: 0 })
              }
              onMouseMove={(e) =>
                setTooltip({
                  visible: true,
                  text: item.name,
                  x: e.clientX,
                  y: e.clientY,
                })
              }
              onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card content */}
              <div className="p-5 flex items-center justify-center h-20 text-center">
  <h3 className="text-lg font-semibold text-teal-800 leading-snug">
    {item.name}
  </h3>
</div>


            </motion.div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            className="fixed px-3 py-1 bg-teal-600 text-white text-xs rounded-md shadow-lg pointer-events-none z-50"
            style={{
              top: tooltip.y + 15,
              left: tooltip.x + 15,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tooltip.text}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default BestSellers;
