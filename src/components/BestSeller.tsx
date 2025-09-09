import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { getProducts } from "../../data/products";
import type { IProduct } from "../../data/products"

function BestSellers() {
  const [bestSellers, setBestSellers] = useState<IProduct[]>([]);
  const [favourites, setFavourites] = useState<string[]>([]);
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const products = await getProducts();
        const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
        setBestSellers(sortedProducts.slice(0, 8));
      } catch (error) {
        console.error("Failed to fetch best sellers:", error);
      }
    };

    fetchBestSellers();
  }, []);

  const toggleFavourite = (id: string) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-white relative" id="best-sellers">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {bestSellers.map((item) => (
            <motion.div
              key={item._id}
              className="text-left relative"
              onMouseEnter={(e) =>
                setTooltip({ visible: true, text: item.name, x: e.clientX, y: e.clientY })
              }
              onMouseMove={(e) =>
                setTooltip({ visible: true, text: item.name, x: e.clientX, y: e.clientY })
              }
              onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image Card */}
              <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
                {/* Veg symbol */}
                <div className="absolute top-4 left-4 w-6 h-6 border-2 border-green-600 flex items-center justify-center bg-white">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>

                <a
                  href="https://link.zomato.com/xqzv/rshare?id=101978791305632a5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`data:image/jpeg;base64,${item.image}`}
                    alt={item.name}
                    className="w-full h-64 object-cover cursor-pointer"
                  />
                </a>
              </div>

              {/* Text below image */}
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-lg font-bold text-gray-900">
                      ₹{item.price}
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-semibold text-black">
                        {item.rating}
                      </span>
                      <span className="text-green-600 ml-1">★</span>
                    </div>
                  </div>

                  {/* Heart Icon */}
                  <button
                    onClick={() => toggleFavourite(item._id)}
                    className="ml-3 bg-white p-1 rounded-full shadow hover:bg-pink-100 transition"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favourites.includes(item._id)
                          ? "text-red-600 fill-pink-600"
                          : "text-gray-800 fill-none"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            className="fixed px-3 py-1 bg-white text-black text-xs rounded-md shadow-lg pointer-events-none z-50"
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
