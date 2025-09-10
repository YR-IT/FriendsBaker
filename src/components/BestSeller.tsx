import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { getProducts } from "../../data/products";
import type { IProduct } from "../../data/products";

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
    <section
      className="py-16 relative bg-gradient-to-br from-white via-gray-50 to-teal-50"
      id="best-sellers"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 font-modern"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Best-Sellers
        </motion.h2>

        {/* Decorative line */}
        <div className="flex justify-center mt-3 mb-12">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-teal-500 transform rotate-45"></div>
            <div className="w-3 h-3 bg-teal-400 transform rotate-45"></div>
            <div className="w-3 h-3 bg-teal-500 transform rotate-45"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {bestSellers.map((item) => (
            <motion.div
              key={item._id}
              className="text-left relative group"
              onMouseEnter={(e) =>
                setTooltip({
                  visible: true,
                  text: item.name,
                  x: e.clientX,
                  y: e.clientY,
                })
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
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              {/* Image Card */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-teal-400 transition-all duration-500 glitter-card">
                {/* Veg symbol */}
                <div className="absolute top-4 left-4 w-6 h-6 border-2 border-green-600 flex items-center justify-center bg-white rounded">
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
                    className="w-full h-64 object-cover cursor-pointer group-hover:scale-110 transition-transform duration-500"
                  />
                </a>

                {/* Light gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Glitter shimmer overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700 glitter-overlay"></div>
              </div>

              {/* Text below image */}
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 font-modern group-hover:text-teal-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">₹{item.price}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold text-teal-600">{item.rating}</span>
                    <span className="text-yellow-500 ml-1">★</span>
                  </div>
                </div>

                {/* Heart Icon */}
                <button
                  onClick={() => toggleFavourite(item._id)}
                  className="ml-3 bg-gray-100 p-1 rounded-full shadow hover:bg-pink-100/50 transition"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favourites.includes(item._id)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400 fill-none"
                    }`}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            className="fixed px-3 py-1 bg-white text-teal-600 text-xs rounded-md shadow-lg border border-gray-200 pointer-events-none z-50"
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

      {/* Glitter styles */}
      <style>{`
        .glitter-overlay {
          background: radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: glitter 2s infinite linear;
        }

        @keyframes glitter {
          0% { background-position: 0 0; opacity: 0.5; }
          50% { background-position: 10px 10px; opacity: 0.8; }
          100% { background-position: 0 0; opacity: 0.5; }
        }

        .glitter-card::after {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255, 255, 255, 0.6) 50%,
            transparent 70%
          );
          transform: rotate(25deg);
          opacity: 0;
          transition: opacity 0.6s ease-in-out;
        }

        .glitter-card:hover::after {
          opacity: 1;
          animation: shimmer 1.5s forwards;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(100%) rotate(25deg); }
        }
      `}</style>
    </section>
  );
}

export default BestSellers;
