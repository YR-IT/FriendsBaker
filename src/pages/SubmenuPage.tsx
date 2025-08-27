import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function SubmenuPage() {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();

  const sampleProducts = [
    {
      id: 1,
      name: "Chocolate Truffle",
      price: "₹450",
      rating: 4.8,
      image: "https://via.placeholder.com/300x200.png?text=Chocolate+Truffle",
    },
    {
      id: 2,
      name: "Black Forest",
      price: "₹500",
      rating: 4.6,
      image: "https://via.placeholder.com/300x200.png?text=Black+Forest",
    },
    {
      id: 3,
      name: "Red Velvet",
      price: "₹550",
      rating: 4.9,
      image: "https://via.placeholder.com/300x200.png?text=Red+Velvet",
    },
    {
      id: 4,
      name: "Butterscotch Cake",
      price: "₹480",
      rating: 4.7,
      image: "https://via.placeholder.com/300x200.png?text=Butterscotch+Cake",
    },
  ];

  // Favourites state
  const [favourites, setFavourites] = useState<number[]>([]);

  // Tooltip state
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const toggleFavourite = (id: number) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <section className="sm:py-28 py-24 sm:px-20 px-6">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-5xl font-semibold text-teal-900 mb-6 text-center uppercase">
        {subcategory?.replace(/-/g, " ")}
      </h1>
      <p className="text-gray-500 mb-10 text-center">
        Showing items under <span className="font-semibold capitalize">{category}</span>
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="text-left"
            onMouseEnter={(e) =>
              setTooltip({
                visible: true,
                text: product.name,
                x: e.clientX,
                y: e.clientY,
              })
            }
            onMouseMove={(e) =>
              setTooltip({
                visible: true,
                text: product.name,
                x: e.clientX,
                y: e.clientY,
              })
            }
            onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}
          >
            {/* Image Card */}
            <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
              {/* Veg symbol */}
              <div className="absolute top-4 left-4 w-6 h-6 border-2 border-green-600 flex items-center justify-center bg-white">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover cursor-pointer"
              />
            </div>

            {/* Text below image */}
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-lg font-bold text-gray-900">{product.price}</p>

                  {/* Reviews */}
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold text-black">{product.rating}</span>
                    <span className="text-green-600 ml-1">★</span>
                  </div>
                </div>

                {/* Heart (Favourite) */}
                <button
                  onClick={() => toggleFavourite(product.id)}
                  className="ml-3 bg-white p-1 rounded-full shadow hover:bg-pink-100 transition"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favourites.includes(product.id)
                        ? "text-red-600 fill-pink-600"
                        : "text-gray-800 fill-none"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
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

export default SubmenuPage;
