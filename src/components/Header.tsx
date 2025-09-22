import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Search,
  ShoppingBag,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../data/products";
import type { IProduct } from "../../data/products";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [productCategories, setProductCategories] = useState<string[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const products: IProduct[] = await getProducts();
        const uniqueCategories = Array.from(
          new Set(products.map((p) => p.category))
        );
        setProductCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHoveredMenu(null), 200);
  };

  const handleCategoryClick = () => setHoveredMenu(null);

  // ✅ Dynamic column calculation
  const getGridCols = (count: number) => {
    if (count > 12) return "grid-cols-4";
    if (count > 6) return "grid-cols-3";
    return "grid-cols-2";
  };

  // ✅ Typed Variants
  const navVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const menuItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="Friends Baker Logo"
                    className="h-12 w-auto"
                  />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Friends Baker
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">
                    Fresh • Delicious • Daily
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { name: "Home", path: "/" },
                { name: "Our Story", path: "/about" },
                { name: "News", path: "/news" }, 
                { name: "Contact", path: "/contact-us" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                  >
                    {item.name}
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}

              {/* Categories Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("categories")}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
                >
                  Categories
                  <motion.div
                    animate={{ rotate: hoveredMenu === "categories" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {hoveredMenu === "categories" && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className={`absolute left-0 mt-4 bg-white shadow-xl rounded-2xl p-6 w-[28rem] border border-gray-100 grid gap-3 ${getGridCols(
                        productCategories.length
                      )}`}
                    >
                      {productCategories.map((cat, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ x: 8, backgroundColor: "#eff6ff" }}
                          className="rounded-lg p-3 transition-all duration-200"
                        >
                          <Link
                            to={`/menu/${cat}`}
                            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={handleCategoryClick}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
                            <span className="font-medium">{cat}</span>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300"
              >
                <Search className="w-5 h-5" />
              </motion.button>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300 relative"
              >
                <ShoppingBag className="w-5 h-5" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
                >
                  3
                </motion.div>
              </motion.button>

              {/* Call Button */}
              <motion.a
                href="tel:+918872197774"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs opacity-90">Call Now</span>
                  <span className="text-sm">+91 8872197774</span>
                </div>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-all duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-gray-100 py-4"
              >
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for delicious treats..."
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-6 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none"
                  />
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Our Story", path: "/about" },
                    { name: "Contact", path: "/contact-us" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-300"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Categories */}
                  <div>
                    <button
                      onClick={() => setCategoriesOpen(!categoriesOpen)}
                      className="flex justify-between items-center w-full py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-all duration-300"
                    >
                      Categories
                      <motion.div
                        animate={{ rotate: categoriesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {categoriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className={`ml-4 mt-2 grid gap-2 ${getGridCols(
                            productCategories.length
                          )}`}
                        >
                          {productCategories.map((cat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Link
                                to={`/menu/${cat}`}
                                className="block py-2 px-4 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                                onClick={() => {
                                  setMenuOpen(false);
                                  setCategoriesOpen(false);
                                }}
                              >
                                {cat}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 w-full py-3 px-4 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-all duration-300"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="font-medium">Cart</span>
                  </motion.button>

                  <motion.a
                    href="tel:+918872197774"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 8872197774</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;
