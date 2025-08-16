
const categories = [
  {
    title: "Classic",
    image: "https://liliyum.com/cdn/shop/products/GreenFloralBirthdayCake_2400x.jpg?v=1676704297",
  },
  {
    title: "Rakhi Cakes and Hampers",
    image: "https://www.thegreenfuels.com/cdn/shop/files/Rakhiopt7.jpg?v=1689332850",
  },
  {
    title: "Cake Jars",
    image: "https://bkmedia.bakingo.com/sq-red-velvet-oreo-chocolate-jar-cake-jar25redvchoc-AA.jpg",
  },
  {
    title: "Pastries",
    image: "https://img.freepik.com/free-photo/assortment-pieces-cake_114579-85732.jpg",
  },
  {
    title: "Snacks",
    image: "https://img.freepik.com/free-photo/samsa-samosas-with-meat_658428-358.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Burger and Sandwiches",
    image: "https://hips.hearstapps.com/hmg-prod/images/banh-mi-turkey-burger-secondary-6578982fea00a.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
  },
  {
    title: "Cupcakes",
    image: "https://thescranline.com/wp-content/uploads/2021/09/FUNFETTI-CUPCAKES-THUMBNAIL-24.jpg",
  },
  {
    title: "Cookies",
    image: "https://media.istockphoto.com/id/1035053764/photo/beautiful-cookies-assorted-close-up-background-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=5blbYcRKIYxN3SFGnUxY4xB9PcEaScd4-HCmyiQvcew=",
  },
  {
    title: "Pasta and Pizza",
    image: "https://static6.depositphotos.com/1042799/616/i/450/depositphotos_6160885-stock-photo-italian-pizza.jpg",
  },
];

const Menu = () => {
  return (
    <section className="py-8 text-center">
  <h2 className="text-3xl md:text-5xl font-semibold text-red-600 mb-4">
    Menu
  </h2>
  <p className="text-lg text-gray-800 mb-10 italic font-thin">What will you wish for?</p>

  {/* horizontal scroll, swipeable, no scrollbar */}
  <div className="overflow-x-auto scrollbar-hide">
    <div className="flex space-x-12 px-12">
      {/* left spacer */}
      <div className="flex-shrink-0 w-4"></div>

      {categories.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col items-center w-56"
        >
          {/* larger rectangle images */}
          <div className="w-60 h-72 bg-white rounded-lg overflow-hidden shadow-md mb-4 relative group">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover cursor-pointer"
  />

  {/* sliding gradient overlay from top */}
  <div className="absolute inset-0 bg-black/20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"/>
</div>


          <span className="text-lg font-medium text-gray-800 uppercase text-center">
            {item.title}
          </span>
        </div>
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
