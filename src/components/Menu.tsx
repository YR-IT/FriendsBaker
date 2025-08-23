import { categories } from "../../data/categories";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <section className="py-8 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-teal-900 mb-4">
        Menu
      </h2>
      <p className="text-lg text-gray-800 mb-10 italic font-thin">
        What will you wish for?
      </p>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-12 px-8 sm:px-12">
          {/* left spacer */}
          <div className="flex-shrink-0 w-4"></div>

          {categories.map((item, index) => (
            <Link key={index} to={`/menu/${item.slug}`}>
              <div className="flex-shrink-0 flex flex-col items-center w-56 cursor-pointer">
                <div className="w-60 h-72 bg-white rounded-lg overflow-hidden shadow-md mb-4 relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </div>
                <span className="text-lg font-medium text-gray-800 uppercase text-center">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}

          {/* right spacer */}
          <div className="flex-shrink-0 w-4"></div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE/Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Menu;
