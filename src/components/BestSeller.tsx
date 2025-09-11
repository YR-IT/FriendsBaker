import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Heart, Star, Sparkles } from "lucide-react";
import { getProducts } from "../../data/products";
import type { IProduct } from "../../data/products";

function BestSellers() {
  const [bestSellers, setBestSellers] = useState<IProduct[]>([]);
  const [favourites, setFavourites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const products = await getProducts();
        const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
        setBestSellers(sortedProducts.slice(0, 8));
      } catch (error) {
        console.error("Failed to fetch best sellers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBestSellers();
  }, []);

  const toggleFavourite = (id: string) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // ✅ Properly typed variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const LoadingCard = () => (
    <div className="relative bg-gradient-to-br from-blue-50/50 to-indigo-100/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-blue-200/30 flex flex-col h-full">
      <div className="animate-pulse flex flex-col flex-grow">
        <div className="w-full h-56 bg-gradient-to-br from-blue-200/50 to-indigo-200/50"></div>
        <div className="p-4 space-y-3 flex-grow">
          <div className="h-4 bg-blue-200/50 rounded w-3/4"></div>
          <div className="h-4 bg-blue-200/50 rounded w-1/2"></div>
          <div className="h-4 bg-blue-200/50 rounded w-1/3"></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"></div>
    </div>
  );

  return (
    <section
      className="py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20"
      id="best-sellers"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-blue-500 mr-2" />
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
              Popular Choices
            </span>
            <Sparkles className="w-6 h-6 text-blue-500 ml-2" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            Best Sellers
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover our most loved dishes, crafted with passion and rated highly by our community
          </p>
        </motion.div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[...Array(8)].map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {bestSellers.map((item, index) => (
              <motion.div
                key={item._id}
                variants={cardVariants}
                className="group relative"
                onHoverStart={() => setHoveredCard(item._id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Card */}
                <div className="relative flex flex-col h-full bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100/50 hover:border-blue-300/50 card-glow">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Rank Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      #{index + 1}
                    </div>
                  </div>

                  {/* Veg Symbol */}
                  <div className="absolute top-3 right-3 z-20">
                    <div className="w-6 h-6 border-2 border-green-500 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <a
                      href="https://link.zomato.com/xqzv/rshare?id=101978791305632a5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src={`data:image/jpeg;base64,${item.image}`}
                        alt={item.name}
                        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </a>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shine-effect"></div>

                    {/* Floating Particles */}
                    <AnimatePresence>
                      {hoveredCard === item._id && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full"
                              initial={{
                                x: Math.random() * 200,
                                y: Math.random() * 200,
                                opacity: 0,
                              }}
                              animate={{
                                y: [null, -50],
                                opacity: [0, 1, 0],
                              }}
                              exit={{ opacity: 0 }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 mb-2 line-clamp-2">
                          {item.name}
                        </h3>

                        <div className="flex items-center justify-between mb-3">
                          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            ₹{item.price}
                          </p>

                          <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 rounded-full border border-blue-200/50">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                            <span className="text-sm font-semibold text-slate-700">
                              {item.rating}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Heart Button */}
                      <motion.button
                        onClick={() => toggleFavourite(item._id)}
                        className="ml-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg border border-blue-100/50 hover:border-pink-300/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart
                          className={`w-5 h-5 transition-all duration-300 ${
                            favourites.includes(item._id)
                              ? "text-red-500 fill-red-500 scale-110"
                              : "text-slate-400 hover:text-red-400"
                          }`}
                        />
                      </motion.button>
                    </div>

                    <div className="flex-grow"></div>

                    {/* Quick Add Button */}
                    {/* <motion.button
                      className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Quick Add
                    </motion.button> */}
                  </div>

                  {/* Bottom Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Extra Animations */}
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 33% { transform: translateY(-20px) rotate(5deg); } 66% { transform: translateY(10px) rotate(-5deg); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0px) rotate(0deg); } 33% { transform: translateY(15px) rotate(-3deg); } 66% { transform: translateY(-25px) rotate(3deg); } }
        @keyframes float-particle { 0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.3; } 50% { transform: translateY(-20px) translateX(10px) scale(1.2); opacity: 1; } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.05); } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes shine { 0% { transform: translateX(-100%) translateY(-100%) rotate(25deg); } 100% { transform: translateX(100%) translateY(100%) rotate(25deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-particle { animation: float-particle 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .shimmer::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); animation: shimmer 2s infinite; }
        .shine-effect::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%); transform: translateX(-100%) translateY(-100%); transition: transform 0.6s ease-out; }
        .group:hover .shine-effect::before { animation: shine 1.5s ease-out; }
        .card-glow { position: relative; }
        .card-glow::before { content: ''; position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px; background: linear-gradient(45deg, #3b82f6, rgb(214, 214, 220), rgb(238, 228, 228), #3b82f6); border-radius: 18px; opacity: 0; z-index: -1; transition: opacity 0.3s ease; background-size: 200% 200%; animation: gradient-shift 3s ease infinite; }
        .card-glow:hover::before { opacity: 0.7; }
        @keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </section>
  );
}

export default BestSellers;
