import { useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import { Heart } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categories.find((cat) => cat.slug === slug);
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  // State to handle favourites
  const [favourites, setFavourites] = useState<number[]>([]);

  // State for sorting dropdown
  const [sortOption, setSortOption] = useState("Popularity");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleFavourite = (index: number) => {
    setFavourites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!category) {
    return <p className="text-center text-xl mt-10">Category not found</p>;
  }

  // Sorting logic
  const sortedItems = [...category.items].sort((a, b) => {
    const priceA = Number(a.price.toString().replace(/[^0-9.-]+/g, ""));
    const priceB = Number(b.price.toString().replace(/[^0-9.-]+/g, ""));

    if (sortOption === "Price Low To High") {
      return priceA - priceB;
    }
    if (sortOption === "Price High To Low") {
      return priceB - priceA;
    }
    return 0; // Popularity or default
  });

  return (
    <section className="sm:py-28 py-24 sm:px-20 px-6">
      <h2 className="text-3xl md:text-5xl font-semibold text-teal-900 mb-10 text-center">
        {category.title}
      </h2>

      {/* Sort button */}
      <div className="flex justify-start mb-6 relative">
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="px-4 py-2 border border-teal-400 text-teal-600 rounded-md font-semibold hover:bg-teal-50 transition"
        >
          Sort ↓↑
        </button>

        {isSortOpen && (
          <div className="absolute mt-12 bg-white shadow-lg rounded-lg w-48 p-3 z-10">
            <h4 className="font-bold text-gray-700 mb-2 flex justify-between">
              SORT
              <button onClick={() => setIsSortOpen(false)}>✕</button>
            </h4>
            <ul className="space-y-2">
              {["Popularity", "Price Low To High", "Price High To Low"].map(
                (option) => (
                  <li key={option}>
                    <button
                      onClick={() => {
                        setSortOption(option);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-2 py-1 rounded hover:bg-gray-100 ${
                        sortOption === option ? "font-semibold text-red-600" : ""
                      }`}
                    >
                      {option}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Cakes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {sortedItems.map((item, index) => (
          <div
            key={index}
            className="text-left"
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
          >
            {/* Image Card */}
            <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
              {/* Veg symbol */}
              <div className="absolute top-4 left-4 w-6 h-6 border-2 border-green-600 flex items-center justify-center bg-white">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>

              <a
                href="https://www.zomato.com/mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-80 object-cover cursor-pointer"
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
                    {item.price}
                  </p>

                  {/* Reviews */}
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold text-black">
                      {item.rating}
                    </span>
                    <span className="text-green-600 ml-1">★</span>
                  </div>
                </div>

                {/* Heart (Favourite) Icon */}
                <button
                  onClick={() => toggleFavourite(index)}
                  className="ml-3 bg-white p-1 rounded-full shadow hover:bg-pink-100 transition"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favourites.includes(index)
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
};

export default CategoryPage;
