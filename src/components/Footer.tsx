import { Mail, Phone, Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-pink-50 border-t border-pink-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center">
        
        {/* Contact Info */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">CONTACT INFO</h3>
            <p className="flex items-center justify-center gap-2 text-gray-700 text-lg">
              <Mail className="w-4 h-4 text-blue-500" />
              <a
                href="mailto:friendsbaker834@gmail.com"
                className="hover:text-blue-800"
              >
                friendsbaker834@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2 text-gray-700 mt-2 text-lg">
              <Phone className="w-4 h-4 text-blue-500" />
              <a href="tel:+919235777011" className="hover:text-blue-800">
                +91 92357 77011
              </a>
            </p>
          </div>
        </div>

        {/* Logo + Social Icons */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/logo.png"
            alt="Friends Baker Logo"
            className="w-24 h-24 mb-2 object-contain"
          />
          <h2 className="text-2xl font-bold text-gray-800 uppercase">
            Friends Baker
          </h2>
          <p className="text-xs text-gray-500">PREMIUM BAKERY</p>

          {/* Social Icons inside logo column */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/share/19jEwH5Ti1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition transform hover:scale-110"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/friends.baker"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-90 shadow-md transition transform hover:scale-110"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Visit Us */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">VISIT US</h3>
            <p className="text-gray-700 text-lg">24/7 Open</p>
            <p className="flex flex-col items-center text-gray-700 mt-2 text-lg">
              Booth 152, Sector-20
              <br /> Panchkula, Haryana 134117
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative py-4 text-center text-gray-600 text-sm bg-gray-100 border-t border-pink-200">
        © {new Date().getFullYear()} Friends Baker. Made with ❤️ and sugar.
      </div>
    </footer>
  );
}

export default Footer;
