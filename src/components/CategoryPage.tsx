import { useParams } from "react-router-dom";
import { getProducts } from "../../data/products";
import type { IProduct } from "../../data/products";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const [favourites, setFavourites] = useState<string[]>([]);

  const [sortOption, setSortOption] = useState("Popularity");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState<IProduct | null>(null);

  const giftHampersImages = [
    "/Gift Hampers/IMAGE1.jpg",
    "/Gift Hampers/IMAGE2.jpg",
    "/Gift Hampers/IMAGE3.jpg",
    "/Gift Hampers/IMAGE4.jpg",
    "/Gift Hampers/IMAGE5.jpg",
    "/Gift Hampers/IMAGE6.jpg",
    "/Gift Hampers/IMAGE7.jpg",
    "/Gift Hampers/IMAGE8.jpg",
    "/Gift Hampers/IMAGE9.jpg",
    "/Gift Hampers/IMAGE10.jpg",
    "/Gift Hampers/IMAGE11.jpg"
  ];

  const bentoCakesImages = [
    "/Bento%20Cakes/image1.JPG",
    "/Bento%20Cakes/image2.JPG",
    "/Bento%20Cakes/image3.JPG",
    "/Bento%20Cakes/image4.JPG",
    "/Bento%20Cakes/image5.JPG",
    "/Bento%20Cakes/image6.jpg"
  ];

  const cookiesImages = [
    "/cookies/image1.jpg",
    "/cookies/image2.jpg",
    "/cookies/image3.jpg",
    "/cookies/image4.jpg",
    "/cookies/image5.jpg"
  ];

  const nyCheeseCakesImages = [
    "/NY Cheese Cakes/image1.jpg",
    "/NY Cheese Cakes/image2.jpg",
    "/NY Cheese Cakes/image3.jpg",
    "/NY Cheese Cakes/image4.jpg",
    "/NY Cheese Cakes/image5.jpg",
    "/NY Cheese Cakes/image6.jpg",
    "/NY Cheese Cakes/image7.jpg"
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        let filteredProducts = allProducts.filter(p => p.category === name);
        
        if (name === "Rakhi Cakes and Hampers") {
          const additionalProducts: IProduct[] = [];
          for (let i = filteredProducts.length; i < giftHampersImages.length; i++) {
            additionalProducts.push({
              _id: `gift-hamper-${i}`,
              name: `Gift Hamper ${i + 1}`,
              price: 850 + (i * 50),
              category: "Rakhi Cakes and Hampers",
              rating: [4, 4.5, 5][Math.floor(Math.random() * 3)],
              image: ""
            });
          }
          filteredProducts = [...filteredProducts, ...additionalProducts];
        }
        
        if (name === "Bento Cakes" || name?.toLowerCase().includes("bento")) {
          
          const additionalProducts: IProduct[] = [];
          for (let i = filteredProducts.length; i < bentoCakesImages.length; i++) {
            additionalProducts.push({
              _id: `bento-cake-${i}`,
              name: `Bento Cake ${i + 1}`,
              price: 450 + (i * 30),
              category: "Bento Cakes",
              rating: [4, 4.5, 5][Math.floor(Math.random() * 3)],
              image: ""
            });
          }
          filteredProducts = [...filteredProducts, ...additionalProducts];
        }
        
        if (name === "Cookies") {
          const additionalProducts: IProduct[] = [];
          for (let i = filteredProducts.length; i < cookiesImages.length; i++) {
            additionalProducts.push({
              _id: `cookie-${i}`,
              name: `Cookie ${i + 1}`,
              price: 25 + (i * 5),
              category: "Cookies",
              rating: [4, 4.5, 5][Math.floor(Math.random() * 3)],
              image: ""
            });
          }
          filteredProducts = [...filteredProducts, ...additionalProducts];
        }
        
        if (name === "NY Cheese Cakes" || name?.toLowerCase().includes("cheese")) {
          // Always create 7 cheesecake products to match the 7 images
          filteredProducts = [];
          for (let i = 0; i < nyCheeseCakesImages.length; i++) {
            filteredProducts.push({
              _id: `ny-cheesecake-${i}`,
              name: `NY Cheesecake ${i + 1}`,
              price: 600 + (i * 50),
              category: "NY Cheese Cakes",
              rating: [4, 4.5, 5][Math.floor(Math.random() * 3)],
              image: ""
            });
          }
        }
        
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [name, giftHampersImages.length, bentoCakesImages.length, cookiesImages.length, nyCheeseCakesImages.length]);

  const toggleFavourite = (productId: string) => {
    setFavourites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  if (products.length === 0) {
    return <p className="text-center text-xl mt-10">Loading products...</p>;
  }

  const sortedItems = [...products].sort((a, b) => {
    if (sortOption === "Price Low To High") {
      return a.price - b.price;
    }
    if (sortOption === "Price High To Low") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <section className="sm:py-28 py-24 sm:px-20 px-6">
      <h2 className="text-3xl md:text-5xl font-semibold text-teal-900 mb-10 text-center">
        {name}
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
        {sortedItems.map((item) => (
          <div
            key={item._id}
            className="text-left relative"
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
            <div
              className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Veg symbol */}
              <div className="absolute top-4 left-4 w-6 h-6 border-2 border-green-600 flex items-center justify-center bg-white">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>

              <img
                src={
                  name === "Rakhi Cakes and Hampers" 
                    ? giftHampersImages[Math.min(products.indexOf(item), giftHampersImages.length - 1)]
                    : (name === "Bento Cakes" || name?.toLowerCase().includes("bento"))
                    ? bentoCakesImages[Math.min(products.indexOf(item), bentoCakesImages.length - 1)]
                    : name === "Cookies"
                    ? cookiesImages[Math.min(products.indexOf(item), cookiesImages.length - 1)]
                    : (name === "NY Cheese Cakes" || name?.toLowerCase().includes("cheese"))
                    ? nyCheeseCakesImages[Math.min(products.indexOf(item), nyCheeseCakesImages.length - 1)]
                    : `data:image/jpeg;base64,${item.image}`
                }
                alt={item.name}
                className="w-full h-80 object-cover"
                onError={(e) => {
                  if (name === "Rakhi Cakes and Hampers" || name === "Bento Cakes" || name?.toLowerCase().includes("bento") || name === "Cookies" || name === "NY Cheese Cakes" || name?.toLowerCase().includes("cheese")) {
                    console.error('Custom image failed to load:', e.currentTarget.src);
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/jpeg;base64,${item.image}`;
                  }
                }}
                onLoad={() => {
                  if (name === "Rakhi Cakes and Hampers" || name === "Bento Cakes" || name?.toLowerCase().includes("bento") || name === "Cookies" || name === "NY Cheese Cakes" || name?.toLowerCase().includes("cheese")) {
                    console.log('Custom image loaded successfully:', (document.activeElement as HTMLImageElement)?.src);
                  }
                }}
              />
              
              {/* Debug indicator for custom categories */}
              {(name === "Rakhi Cakes and Hampers" || name === "Bento Cakes" || name?.toLowerCase().includes("bento") || name === "Cookies" || name === "NY Cheese Cakes" || name?.toLowerCase().includes("cheese")) && (
                <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
                  {name === "Rakhi Cakes and Hampers" ? "GH" : name === "Cookies" ? "CO" : (name === "NY Cheese Cakes" || name?.toLowerCase().includes("cheese")) ? "NY" : "BC"} #{products.indexOf(item) + 1}
                </div>
              )}
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
          </div>
        ))}
      </div>

      {/* Global popup modal */}
      {selectedItem !== null && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-xl space-y-6 w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-2xl font-semibold text-center">
              Choose a platform
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  window.open(
                    "https://link.zomato.com/xqzv/rshare?id=1019787863056336c",
                    "_blank"
                  );
                  setSelectedItem(null);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer"
              >
                Zomato
              </button>
              <button
                onClick={() => {
                  window.open("https://www.swiggy.com", "_blank");
                  setSelectedItem(null);
                }}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer"
              >
                Swiggy
              </button>
            </div>
            <button
              onClick={() => setSelectedItem(null)}
              className="block mx-auto text-sm text-gray-500 hover:text-gray-900 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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
