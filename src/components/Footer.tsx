import { Facebook, Instagram, ArrowUp, Youtube } from "lucide-react";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-teal-100 via-white to-teal-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 mt-auto transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo & About */}
        <div className="text-start">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Friends Baker Logo"
            className="w-16 h-16 mb-3 object-contain"
          />

          {/* Heading */}
          <h2 className="text-3xl font-bold text-teal-700 dark:text-teal-400 mb-2">
            Friend's Baker
          </h2>

          {/* Content */}
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Freshly baked delights that bring friends and families together.{" "}
            <br />
            Taste the love in every bite.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/about" },
              { name: "Contact", link: "/contact-us" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200 relative 
             after:content-[''] after:inline-block after:w-0 after:h-[2px] 
             after:bg-teal-600 dark:after:bg-teal-400 after:transition-all after:duration-300 
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
          <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-400 mb-4">
            Support
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {["Help Center", "Privacy Policy", "Terms of Service", "FAQs"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200 relative 
             after:content-[''] after:inline-block after:w-0 after:h-[2px] 
             after:bg-teal-600 dark:after:bg-teal-400 after:transition-all after:duration-300 
             hover:after:w-full after:absolute after:left-0 after:bottom-0"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 4: Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-teal-900 dark:text-teal-400 mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 mb-6 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <a
                href="https://www.google.com/maps/place/friends+baker/data=!4m2!3m1!1s0x390f8eedb82b11fb:0xc220acfb0050c85a?sa=X&ved=1t:242&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-600 dark:hover:text-teal-300 transition"
              >
                Booth 152, Sector 20, <br /> Panchkula, Haryana 134117
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <a
                href="tel:9257297773"
                className="hover:text-teal-600 dark:hover:text-teal-300 transition"
              >
                +91 9257297773
              </a>
            </p>

            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <a
                href="mailto:friendsbaker834@gmail.com"
                className="hover:text-teal-600 dark:hover:text-teal-300 transition"
              >
                friendsbaker834@gmail.com
              </a>
            </p>
          </div>

          <div className="flex gap-4">
            {[
              {
                icon: Facebook,
                name: "Facebook",
                url: "https://www.facebook.com/share/19jEwH5Ti1/",
                hoverColor: "hover:bg-[#1877F2] hover:text-white",
              },
              {
                icon: Instagram,
                name: "Instagram",
                url: "https://www.instagram.com/friends.baker?igsh=MWVhZTNsNWg2azRkZQ==",
                hoverColor: "hover:bg-[#E4405F] hover:text-white",
              },
              {
                icon: Youtube,
                name: "Youtube",
                url: "https://youtube.com",
                hoverColor: "hover:bg-[#FF0000] hover:text-white",
              },
            ].map(({ icon: Icon, name, url, hoverColor }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 dark:bg-gray-800 shadow-md text-teal-700 dark:text-teal-400 transition transform hover:scale-110 ${hoverColor}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mx-6"></div>

      {/* Bottom Bar */}
      <div className="relative py-4 text-center text-gray-700 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Friends Baker. Made with ❤️ and sugar.
        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-teal-600 dark:bg-teal-500 text-white p-2 rounded-full shadow-md hover:bg-teal-700 dark:hover:bg-teal-400 transition"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
