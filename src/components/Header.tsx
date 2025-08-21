import { motion } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const submenus: Record<string, { title: string; items: string[] }[]> = {
    products: [
      { title: "Kids Cakes", items: ["1st Birthday Cakes", "Princess Cakes", "Animal Cakes","Cakes for Girls", "Cakes for Boys", "Baby Shark Cakes", "All Kids Cakes"] },
      { title: "Anniversary Cakes", items: ["1st Anniversary Cakes", "25th Anniversary Cakes", "Anniversary Cakes for Parents", "50th Anniversary Cakes", "All Anniversary Cakes"] },
      { title: "Character Cakes", items: ["Spiderman Cakes", "Unicorn Cakes", "Barbie Cakes", "Harry Potter Cakes", "Avenger Cakes", "Peppa Pig Cakes","Doraemon Cakes", "Naruto Cakes"] },
      { title: "More Cakes", items: ["Rainbow Cakes", "Butterfly Cakes", "Football Cakes", "Basketball Cakes", "Rainbow Cakes", "Butterfly Cakes","Shinchan Cakes"] },
    ],
    speciality: [
      { title: "Designer Cakes", items: ["3D Cakes", "Photo Cakes", "Theme Cakes"] },
      { title: "Occasion Cakes", items: ["Birthday", "Anniversary", "Baby Shower"] },
      { title: "Trendy Cakes", items: ["Pinata Cakes", "Pull-Me-Up Cakes", "Jar Cakes"] },
    ],
     hampers: [
      { title: "", items: ["Gift Hampers", "Make Your Own Hamper", "Assorted Pastry Box", "Cupcake Delight Box", "Make Your Dessert Box"] },
    ],
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
          <a href="/about" className="hover:text-blue-500 transition">
            About Us
          </a>

          {/* Products */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("products")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-blue-500 transition">
              Products
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  hoveredMenu === "products" ? "rotate-180" : ""
                }`}
              />
            </button>

            {hoveredMenu === "products" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-b-lg overflow-hidden p-6 grid grid-cols-4 gap-6 w-[700px] z-40"
                style={{ top: "210%" }}
              >
                {submenus.products.map((col, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-blue-600 mb-2">{col.title}</h3>
                    <ul className="space-y-4 text-sm">
                      {col.items.map((item, j) => (
                        <li key={j} className="hover:text-blue-500 cursor-pointer transition">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Speciality */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("speciality")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-blue-500 transition">
              Speciality Cakes
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  hoveredMenu === "speciality" ? "rotate-180" : ""
                }`}
              />
            </button>

            {hoveredMenu === "speciality" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-b-lg overflow-hidden p-6 grid grid-cols-3 gap-6 w-[700px] z-40"
                style={{ top: "210%" }}
              >
                {submenus.speciality.map((col, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-blue-600 mb-2">{col.title}</h3>
                    <ul className="space-y-4 text-sm">
                      {col.items.map((item, j) => (
                        <li key={j} className="hover:text-blue-500 cursor-pointer transition">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Hampers */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredMenu("hampers")}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <button className="flex items-center gap-1 hover:text-blue-500 transition">
              Hampers
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  hoveredMenu === "hampers" ? "rotate-180" : ""
                }`}
              />
            </button>

            {hoveredMenu === "hampers" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-b-lg overflow-hidden p-6 grid grid-cols-1 gap-4 w-[250px] z-40"
                style={{ top: "210%" }}
              >
                {submenus.hampers.map((col, i) => (
                  <div key={i}>
                    <ul className="space-y-4 text-sm">
                      {col.items.map((item, j) => (
                        <li key={j} className="hover:text-blue-500 cursor-pointer transition">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          <a href="/contact-us" className="hover:text-blue-500 transition">
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-yellow-500"
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
            className="absolute top-20 right-0 w-[20vh] bg-blue-100 shadow-lg p-6 flex flex-col gap-4 text-gray-800 z-50 md:hidden"
          >
            <a href="/about" className="hover:text-blue-500 transition">About Us</a>
            <a href="/products" className="hover:text-blue-500 transition">Products</a>
            <a href="/speciality" className="hover:text-blue-500 transition">Speciality Cakes</a>
            <a href="/hampers" className="hover:text-blue-500 transition">Hampers</a>
            <a href="/contact-us" className="hover:text-blue-500 transition">Contact Us</a>
          </motion.div>
        )}

        {/* Call Us */}
        <div className="hidden md:flex items-center gap-3 text-blue-500 font-bold">
          <div className="flex items-center justify-center border rounded-full p-2 border-blue-500">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-white font-normal">Call Us</span>
            <span className="text-sm">+91 8872197774</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
