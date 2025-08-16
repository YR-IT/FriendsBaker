import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full left-0 z-50">
      {/* Main Navbar (fixed so it never scrolls away) */}
      <div className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md text-white px-6 flex justify-between items-center z-50">
        
        {/* Logo */}
        <motion.h1
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="/logo.png" 
            alt="Friends Baker Logo" 
            className="h-16 sm:h-24 w-auto cursor-pointer pl-0 sm:pl-12"
          />
        </motion.h1>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-yellow-500 transition">About Us</a>
          <a href="#about" className="hover:text-yellow-500 transition">Products</a>
          <a href="#services" className="hover:text-yellow-500 transition">Speciality Cakes</a>
          <a href="#products" className="hover:text-yellow-500 transition">Find Us</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact Us</a>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-2 text-yellow-500" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Call Us (desktop only) */}
        <div className="hidden md:flex items-center gap-3 text-yellow-500 font-bold">
          <div className="flex items-center justify-center border rounded-full p-2 border-yellow-500">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-white font-normal">Call Us</span>
            <span className="text-sm">+012 345 6789</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed top-20 left-0 w-full bg-black/90 text-white flex flex-col items-center gap-6 py-6 md:hidden z-40">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">About Us</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Products</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Speciality Cakes</a>
          <a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Find Us</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Contact Us</a>
          {/* Call Us inside mobile menu */}
          <div className="flex items-center gap-3 text-yellow-500 font-bold">
            <div className="flex items-center justify-center border rounded-full p-2 border-yellow-500">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-white font-normal">Call Us</span>
              <span className="text-sm">+012 345 6789</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
