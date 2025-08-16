import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bestSellers = [
  {
    id: 1,
    name: "Fresh Cream Pineapple Cake",
    image: "https://ribbonsandballoons.com/assets1/uploads/RAsmalali_Cake_copy_808320.jpg",
  },
  {
    id: 2,
    name: "Overload Brownie",
    image: "https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=",
  },
  {
    id: 3,
    name: "Dense Loaf",
    image: "https://bkmedia.bakingo.com/dainty-dry-dense-cake-cake2661dryc-AA.jpg",
  },
  {
    id: 4,
    name: "CheeseCake",
    image: "https://www.seriouseats.com/thmb/Mykce8jNBk43y7fKyIjaPm2BB58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__06__20170526-no-bake-cheesecake-vicky-wasik-18-89991c64ba544e19bc05c774c499438c.jpg",
  },
  {
    id: 1,
    name: "Fresh Cream Pineapple Cake",
    image: "https://ribbonsandballoons.com/assets1/uploads/RAsmalali_Cake_copy_808320.jpg",
  },
  {
    id: 2,
    name: "Overload Brownie",
    image: "https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=",
  },
  {
    id: 3,
    name: "Dense Loaf",
    image: "https://bkmedia.bakingo.com/dainty-dry-dense-cake-cake2661dryc-AA.jpg",
  },
  {
    id: 4,
    name: "CheeseCake",
    image: "https://www.seriouseats.com/thmb/Mykce8jNBk43y7fKyIjaPm2BB58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__06__20170526-no-bake-cheesecake-vicky-wasik-18-89991c64ba544e19bc05c774c499438c.jpg",
  },
];

function BestSellers() {
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });

  return (
    <section className="py-12 bg-blue-100 relative" id="best-sellers">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-yellow-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Best-Sellers
        </motion.h2>
        <div className="flex justify-center mt-2 mb-10">
  <div className="flex space-x-1">
    <div className="w-2 h-2 bg-blue-300 transform rotate-45"></div>
    <div className="w-2 h-2 bg-blue-300 transform rotate-45"></div>
    <div className="w-2 h-2 bg-blue-300 transform rotate-45"></div>
    <div className="w-2 h-2 bg-blue-300 transform rotate-45"></div>
  </div>
</div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {bestSellers.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer relative"
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
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              {/* Overlay Layer */}
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-yellow-900">
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
            className="fixed px-2 py-1 bg-white text-black text-xs rounded-md pointer-events-none z-50"
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
