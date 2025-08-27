import { Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";

function Footer() {
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-teal-100 via-white to-teal-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo & About */}
        <div className="text-start">
  {/* Logo */}
  <img
    src="/logo.png"
    alt="Friends Baker Logo"
    className="w-20 h-20 mx-auto mb-3 object-contain"
  />

  {/* Heading */}
  <h2 className="text-3xl font-bold text-teal-700 mb-2">
    Friends Baker
  </h2>

  {/* Content */}
  <p className="text-gray-700 text-sm leading-relaxed">
    Freshly baked delights that bring friends and families together. <br />
    Taste the love in every bite.
  </p>
</div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-teal-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-700">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Products", link: "/products" },
              { name: "Speciality Cakes", link: "/speciality-cakes" },
              { name: "Hampers", link: "/hampers" },
              { name: "Contact", link: "/contact-us" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-teal-600 transition-colors duration-200 relative 
             after:content-[''] after:inline-block after:w-0 after:h-[2px] 
             after:bg-teal-600 after:transition-all after:duration-300 
             hover:after:w-full after:absolute after:left-0 after:bottom-0"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-lg font-semibold text-teal-900 mb-4">Support</h3>
          <ul className="space-y-3 text-gray-700">
            {["Help Center", "Privacy Policy", "Terms of Service", "FAQs"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-teal-600 transition-colors duration-200 relative 
             after:content-[''] after:inline-block after:w-0 after:h-[2px] 
             after:bg-teal-600 after:transition-all after:duration-300 
             hover:after:w-full after:absolute after:left-0 after:bottom-0"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 4: Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-teal-900 mb-4">
            Stay Connected
          </h3>
          <p className="text-gray-700 text-sm mb-4">
            Subscribe for the latest bakery specials and sweet recipes!
          </p>
          <form className="flex mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded-r-lg hover:bg-teal-700 transition"
            >
              Join
            </button>
          </form>

          <div className="flex gap-4">
            {[
              { icon: Facebook, name: "Facebook" },
              { icon: Instagram, name: "Instagram" },
              { icon: Twitter, name: "Twitter" },
            ].map(({ icon: Icon, name }) => (
              <a
                key={name}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 shadow-md text-teal-700 hover:bg-teal-600 hover:text-white transition transform hover:scale-110"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mx-6"></div>

      {/* Bottom Bar */}
      <div className="relative py-4 text-center text-gray-700 text-sm">
        © {new Date().getFullYear()} Friends Baker. Made with ❤️ and sugar.
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-700 transition"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
