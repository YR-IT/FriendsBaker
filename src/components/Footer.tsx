import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-300 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">🍰 Friends Baker</h2>
          <p className="text-gray-600 text-sm">
            Bringing friends together with homemade goodness, baked fresh and
            shared with love.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#home" className="hover:text-pink-600">Home</a></li>
            <li><a href="#features" className="hover:text-pink-600">Features</a></li>
            <li><a href="#recipes" className="hover:text-pink-600">Recipes</a></li>
            <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-pink-600">Help Center</a></li>
            <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
            <li><a href="#" className="hover:text-pink-600">FAQs</a></li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-pink-600 flex items-center gap-1">
              <Facebook size={18} /> Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 flex items-center gap-1">
              <Instagram size={18} /> Instagram
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600 flex items-center gap-1">
              <Twitter size={18} /> Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-300 py-4 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()} Friends Baker. Made with ❤️ and sugar.
      </div>
    </footer>
  );
}

export default Footer;
