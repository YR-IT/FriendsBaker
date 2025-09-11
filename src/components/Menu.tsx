import { useState, useEffect } from "react";
import { getProducts } from "../../data/products";
import type { IProduct } from "../../data/products";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Sparkles, ChefHat, ArrowRight, Utensils } from "lucide-react";

interface MenuCategory {
  name: string;
  image: string;
}

const Menu = () => {
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [particles] = useState(
    () =>
      [...Array(12)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${3 + Math.random() * 2}s`,
      }))
  );

  useEffect(() => {
    const fetchAndSetMenuCategories = async () => {
      try {
        const products: IProduct[] = await getProducts();
        const categoriesMap = new Map<string, string>();
        products.forEach((p) => {
          if (!categoriesMap.has(p.category)) {
            categoriesMap.set(p.category, p.image);
          }
        });
        const categories = Array.from(categoriesMap, ([name, image]) => ({
          name,
          image,
        }));
        setMenuCategories(categories);
      } catch (error) {
        console.error("Failed to fetch menu categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetMenuCategories();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const LoadingCard = () => (
    <div className="flex-shrink-0 w-80">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-200/50 h-96">
        <div className="animate-pulse">
          <div className="w-full h-64 bg-gradient-to-br from-blue-200/60 to-indigo-200/60"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-blue-200/60 rounded-lg w-3/4 mx-auto"></div>
            <div className="h-4 bg-blue-200/40 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="menu"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/30"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <ChefHat className="w-6 h-6 text-blue-500 mr-2" />
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
              Explore Our
            </span>
            <Sparkles className="w-6 h-6 text-blue-500 ml-2" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
            Menu Categories
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of delicious categories,
            each crafted with passion and expertise
          </p>
        </motion.div>

        <div className="overflow-x-auto scrollbar-hide py-4">
          {loading ? (
            <div className="flex space-x-8 px-8">
              {[...Array(4)].map((_, index) => (
                <LoadingCard key={index} />
              ))}
            </div>
          ) : (
            <motion.div
              className="flex space-x-8 px-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {menuCategories.map((item, index) => (
                <Link key={index} to={`/menu/${item.name}`}>
                  <motion.div
                    variants={cardVariants}
                    className="flex-shrink-0 w-80 group cursor-pointer"
                    onHoverStart={() => setHoveredCard(item.name)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ y: -15, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex-shrink-0 w-80 group cursor-pointer">
  {/* Image Card */}
  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100/50 hover:border-blue-300/50 card-glow h-80">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="absolute top-4 left-4 z-20">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
        <Utensils className="w-3 h-3 mr-1" />
        Category
      </div>
    </div>

    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
      <div className="bg-white p-2 rounded-full shadow-lg">
        <ArrowRight className="w-4 h-4 text-blue-600" />
      </div>
    </div>

    <div className="relative h-full overflow-hidden">
      <img
        src={`data:image/jpeg;base64,${item.image}`}
        alt={item.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shine-effect"></div>

      <AnimatePresence>
        {hoveredCard === item.name && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                initial={{
                  x: Math.random() * 320,
                  y: Math.random() * 250,
                  opacity: 0,
                }}
                animate={{
                  y: [null, -60],
                  opacity: [0, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>

  {/* Text Section (Separate Block) */}
  <div className="mt-4 text-center">
    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-all duration-300 uppercase tracking-wide break-words">
      {item.name}
    </h3>
  </div>
</div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes float { 0%,100%{transform:translateY(0) rotate(0)} 33%{transform:translateY(-20px) rotate(5deg)} 66%{transform:translateY(10px) rotate(-5deg)} }
        @keyframes float-delayed { 0%,100%{transform:translateY(0) rotate(0)} 33%{transform:translateY(15px) rotate(-3deg)} 66%{transform:translateY(-25px) rotate(3deg)} }
        @keyframes float-particle { 0%,100%{transform:translateY(0) translateX(0) scale(1);opacity:.3} 50%{transform:translateY(-20px) translateX(10px) scale(1.2);opacity:1} }
        @keyframes pulse-slow { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.6;transform:scale(1.05)} }
        @keyframes shine { 0%{transform:translateX(-100%) translateY(-100%) rotate(25deg)} 100%{transform:translateX(100%) translateY(100%) rotate(25deg)} }

        .shine-effect::before {
          content: '';position: absolute;top: -50%;left: -50%;width: 200%;height: 200%;
          background: linear-gradient(45deg,transparent 40%,rgba(255,255,255,.3) 50%,transparent 60%);
          transform: translateX(-100%) translateY(-100%);
        }
        .group:hover .shine-effect::before { animation: shine 1.5s ease-out; }

        .card-glow::before {
          content:'';position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;
          background:linear-gradient(45deg,#3b82f6,#6366f1,#8b5cf6,#3b82f6);
          border-radius:26px;opacity:0;z-index:-1;background-size:200% 200%;
          animation:gradient-shift 3s ease infinite;
        }
        .card-glow:hover::before { opacity:.7; }
        @keyframes gradient-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}</style>
    </section>
  );
};

export default Menu;
