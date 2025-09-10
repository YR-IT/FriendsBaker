import { useState, useEffect } from "react";
import { getProducts } from "../../data/products";
import type { IProduct } from "../../data/products";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface MenuCategory {
  name: string;
  image: string;
}

const Menu = () => {
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const fetchAndSetMenuCategories = async () => {
      try {
        const products: IProduct[] = await getProducts();
        const categoriesMap = new Map<string, string>();
        products.forEach(p => {
          if (!categoriesMap.has(p.category)) {
            categoriesMap.set(p.category, p.image);
          }
        });
        const categories = Array.from(categoriesMap, ([name, image]) => ({ name, image }));
        setMenuCategories(categories);
      } catch (error) {
        console.error("Failed to fetch menu categories:", error);
      }
    };

    fetchAndSetMenuCategories();
  }, []);

  return (
    <section
      id="menu"
      className="py-16 text-center bg-gradient-to-br from-indigo-950 via-black-900 to-black font-sans relative overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight font-playfair"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Menu
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 mb-12 italic font-light font-lato"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        What will you wish for?
      </motion.p>

      {/* Menu Cards */}
      <div className="overflow-x-auto scrollbar-hide py-4">
        <div className="flex space-x-8 px-8 sm:px-16">
          <div className="flex-shrink-0 w-4" /> {/* left spacer */}

          {menuCategories.map((item, index) => (
            <Link key={index} to={`/menu/${item.name}`}>
              <motion.div
                className="flex-shrink-0 flex flex-col items-center w-60 cursor-pointer group relative"
                onMouseEnter={(e) =>
                  setTooltip({ visible: true, text: item.name, x: e.clientX, y: e.clientY })
                }
                onMouseMove={(e) =>
                  setTooltip({ visible: true, text: item.name, x: e.clientX, y: e.clientY })
                }
                onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
                whileHover={{ scale: 1.08, rotateX: 5, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 220, damping: 15 }}
              >
                <div className="w-60 h-72 bg-gray-900 rounded-xl overflow-hidden shadow-xl mb-4 relative border-2 border-gray-700 hover:border-pink-500 transition-all duration-300 glitter-card hover:shadow-pink-500/40">
                  {/* Image */}
                  <img
                    src={`data:image/jpeg;base64,${item.image}`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glitter overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700 glitter-overlay"></div>
                </div>

                {/* Title */}
                <span className="text-lg font-semibold text-gray-200 uppercase text-center group-hover:text-pink-400 transition-colors duration-300 tracking-wide font-lato glow-text">
                  {item.name}
                </span>
              </motion.div>
            </Link>
          ))}

          <div className="flex-shrink-0 w-4" /> {/* right spacer */}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            className="fixed px-3 py-1 bg-gray-900 text-pink-400 text-xs rounded-md shadow-lg border border-gray-700 pointer-events-none z-50 font-lato"
            style={{ top: tooltip.y + 15, left: tooltip.x + 15 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tooltip.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@700;900&display=swap');

        .font-lato { font-family: 'Lato', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .glitter-overlay {
          background: radial-gradient(circle, rgba(255, 182, 255, 0.5) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: glitter 2s infinite linear;
        }

        @keyframes glitter {
          0% { background-position: 0 0; opacity: 0.6; }
          50% { background-position: 10px 10px; opacity: 1; }
          100% { background-position: 0 0; opacity: 0.6; }
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
            rgba(255,192,203,0.6) 50%,
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

        .glow-text {
          text-shadow: 0 0 8px rgba(236, 72, 153, 0.6), 0 0 12px rgba(236, 72, 153, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Menu;
