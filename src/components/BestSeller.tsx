import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const bestSellers = [
  {
    id: 1,
    name: "Fresh Cream Pineapple Cake",
    image:
      "https://ribbonsandballoons.com/assets1/uploads/RAsmalali_Cake_copy_808320.jpg",
    price: "₹499",
    rating: 4.6,
  },
  {
    id: 2,
    name: "Overload Brownie",
    image:
      "https://media.istockphoto.com/id/1370520449/photo/slice-of-chocolate-cake-with-glaze.jpg?s=612x612&w=0&k=20&c=KK-h7w4l0FNA0YMWvkr1X8UrAAB77z0f5tTByBYgReM=",
    price: "₹299",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Dense Loaf",
    image:
      "https://bkmedia.bakingo.com/dainty-dry-dense-cake-cake2661dryc-AA.jpg",
    price: "₹399",
    rating: 4.5,
  },
  {
    id: 4,
    name: "CheeseCake",
    image:
      "https://www.seriouseats.com/thmb/Mykce8jNBk43y7fKyIjaPm2BB58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__06__20170526-no-bake-cheesecake-vicky-wasik-18-89991c64ba544e19bc05c774c499438c.jpg",
    price: "₹599",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Chocolate Truffle Cake",
    image:
      "https://thebrowniestudio.com/cdn/shop/files/2_747d9d2b-9408-4c70-82e0-81dd39710399.jpg?v=1716804119",
    price: "₹549",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Red Velvet Cake",
    image:
      "https://assets.giftalove.com/resources/common/giftimages/productimage2/tempting-heart-shaped-red-velvet-cake.jpg",
    price: "₹649",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Black Forest Cake",
    image:
      "https://lollino.in/wp-content/uploads/2022/06/black-forest-cake-by-lollino-cafe-gallery-1.webp",
    price: "₹499",
    rating: 4.4,
  },
  {
    id: 8,
    name: "Strawberry Cake",
    image:
      "https://preppykitchen.com/wp-content/uploads/2022/05/Strawberry-Cake-Recipe-Card.jpg",
    price: "₹559",
    rating: 4.5,
  },
];

function BestSellers() {
  const [favourites, setFavourites] = useState<number[]>([]);
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const toggleFavourite = (id: number) => {
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
              key={item.id}
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
                    src={item.image}
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
                      {item.price}
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
                    onClick={() => toggleFavourite(item.id)}
                    className="ml-3 bg-white p-1 rounded-full shadow hover:bg-pink-100 transition"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favourites.includes(item.id)
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
