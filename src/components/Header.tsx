import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter, Phone } from "lucide-react";

function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 px-6 flex justify-between items-center">
        {/* Breadcrumbs */}
        <div className="space-x-2">
          <a href="#" className="hover:underline">Home</a> /
          <a href="#" className="hover:underline"> Career</a> /
          <a href="#" className="hover:underline"> Terms</a> /
          <a href="#" className="hover:underline"> Privacy</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <span>Follow us:</span>
          <a href="#"><Facebook className="w-4 h-4 hover:text-yellow-400" /></a>
          <a href="#"><Twitter className="w-4 h-4 hover:text-yellow-400" /></a>
          <a href="#"><Linkedin className="w-4 h-4 hover:text-yellow-400" /></a>
          <a href="#"><Instagram className="w-4 h-4 hover:text-yellow-400" /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="sticky top-0 backdrop-blur-sm text-white px-6 py-4 flex justify-between items-center z-50">
        {/* Logo */}
        <motion.h1
          className="text-3xl font-bold text-yellow-500"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Baker
        </motion.h1>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-yellow-500 transition">About Us</a>
          <a href="#about" className="hover:text-yellow-500 transition">Products</a>
          <a href="#services" className="hover:text-yellow-500 transition">Speciality Cakes</a>
          <a href="#products" className="hover:text-yellow-500 transition">Find Us</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact Us</a>
        </nav>

        {/* Call Us */}
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
    </header>
  );
}

export default Header;
