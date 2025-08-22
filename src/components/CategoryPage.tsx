import { useParams } from "react-router-dom";
import { categories } from "../../data/categories";
import { Heart } from "lucide-react";
import { useState } from "react";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categories.find((cat) => cat.slug === slug);

  // State to handle favourites
  const [favourites, setFavourites] = useState<number[]>([]);

  const toggleFavourite = (index: number) => {
    setFavourites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!category) {
    return <p className="text-center text-xl mt-10">Category not found</p>;
  }

  return (
    <section className="sm:py-28 py-20 sm:px-20 px-6">
      <h2 className="text-3xl md:text-5xl font-semibold text-blue-900 mb-10 text-center">
        {category.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {category.items.map((item, index) => (
          <div key={index} className="text-left">
            {/* Image Card */}
            <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105">
              {/* Veg symbol */}
              <div className="absolute top-4 left-4 w-6 h-6 border-2 border-green-600 flex items-center justify-center bg-white">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              </div>

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Text below image */}
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">
                    {item.price}
                  </p>

                  {/* Reviews */}
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold text-black">
                      {item.rating}
                    </span>
                    <span className="text-green-600 ml-1">★</span>
                    {/* <span className="ml-1">({item.reviews} Reviews)</span> */}
                  </div>
                </div>

                {/* Heart (Favourite) Icon beside text */}
                <button
                  onClick={() => toggleFavourite(index)}
                  className="ml-3 bg-white p-1 rounded-full shadow hover:bg-pink-100 transition"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favourites.includes(index)
                        ? "text-red-600 fill-pink-600"
                        : "text-gray-800 fill-none"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
