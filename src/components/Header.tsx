import { motion } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  // ✅ cross-platform timeout type (no NodeJS namespace needed)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200); // delay before closing
  };

  const handleCategoryClick = () => {
    setHoveredMenu(null); // close dropdown immediately on click
  };

  return (
    <header className="w-full left-0 z-50">
      {/* Main Navbar */}
      <div className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md text-white px-6 flex justify-between items-center z-50">
        {/* Logo */}
        <motion.h1
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <img
              src="/logo.png"
              alt="Friends Baker Logo"
              className="h-20 w-auto cursor-pointer pl-0 sm:pl-16 py-2"
            />
          </Link>
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium relative">
          <Link to="/" className="hover:text-teal-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-teal-500 transition">
            About Us
          </Link>

          {/* Categories Dropdown Desktop */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("categories")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-2 hover:text-teal-500 transition">
              Categories
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  hoveredMenu === "categories" ? "rotate-180" : ""
                }`}
              />
            </button>

            {hoveredMenu === "categories" && (
              <div className="absolute left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-lg p-4 w-56 z-40 transition-all duration-300"
              style={{ marginTop: "26px" }} >
                <ul className="space-y-4 text-sm">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <Link
                        to={`/menu/${cat.slug}`}
                        className="hover:text-teal-500 transition"
                        onClick={handleCategoryClick}
                      >
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/contact-us" className="hover:text-teal-500 transition">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-teal-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-0 w-full bg-teal-100 shadow-lg p-6 flex flex-col gap-4 text-gray-800 z-50 md:hidden"
          >
            <Link
              to="/"
              className="hover:text-teal-500 transition font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-teal-500 transition font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Categories Dropdown */}
            <div>
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex justify-between items-center w-full hover:text-teal-500 transition font-semibold"
              >
                Categories
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    categoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {categoriesOpen && (
                <ul className="mt-2 pl-2 space-y-4 text-sm">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <Link
                        to={`/menu/${cat.slug}`}
                        className="hover:text-teal-500 transition block"
                        onClick={() => {
                          setMenuOpen(false);
                          setCategoriesOpen(false);
                        }}
                      >
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link
              to="/contact-us"
              className="hover:text-teal-500 transition font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}

        {/* Call Us */}
       <div className="hidden md:flex items-center gap-3 text-teal-500 font-bold">
  <div className="flex items-center justify-center border rounded-full p-2 border-teal-500">
    <Phone className="w-4 h-4" />
  </div>
  <a 
    href="tel:+918872197774" 
    className="flex flex-col leading-tight hover:underline"
  >
    <span className="text-xs text-white font-normal">Call Us</span>
    <span className="text-sm">+91 8872197774</span>
  </a>
</div>
      </div>
    </header>
  );
}

export default Header;
