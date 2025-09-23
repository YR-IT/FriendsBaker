import React from 'react';
import { 
  Cookie, 
  Cake, 
  Coffee, 
  Croissant, 
  IceCream, 
  Cherry, 
  Wheat, 
  Gift,
  Heart,
  Star,
  Crown,
  Zap} from 'lucide-react';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  count: number;
  color: string;
  glitterColor: string;
  image: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Artisan Breads",
    description: "Freshly baked daily with premium ingredients",
    icon: Wheat,
    count: 24,
    color: "from-amber-400 via-orange-400 to-yellow-500",
    glitterColor: "from-yellow-300 to-amber-300",
    image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Wedding Cakes",
    description: "Custom designed for your special day",
    icon: Cake,
    count: 18,
    color: "from-pink-400 via-rose-400 to-pink-500",
    glitterColor: "from-pink-200 to-rose-200",
    image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Gourmet Cookies",
    description: "Handcrafted with love and finest ingredients",
    icon: Cookie,
    count: 32,
    color: "from-blue-400 via-indigo-400 to-purple-500",
    glitterColor: "from-blue-200 to-indigo-200",
    image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    name: "French Pastries",
    description: "Authentic recipes from master bakers",
    icon: Croissant,
    count: 28,
    color: "from-emerald-400 via-teal-400 to-cyan-500",
    glitterColor: "from-emerald-200 to-teal-200",
    image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    name: "Artisan Coffee",
    description: "Premium blends to complement our pastries",
    icon: Coffee,
    count: 15,
    color: "from-orange-400 via-red-400 to-pink-500",
    glitterColor: "from-orange-200 to-red-200",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    name: "Ice Cream & Gelato",
    description: "Creamy delights made fresh daily",
    icon: IceCream,
    count: 22,
    color: "from-cyan-400 via-blue-400 to-indigo-500",
    glitterColor: "from-cyan-200 to-blue-200",
    image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 7,
    name: "Seasonal Treats",
    description: "Limited edition flavors and designs",
    icon: Cherry,
    count: 16,
    color: "from-purple-400 via-violet-400 to-purple-500",
    glitterColor: "from-purple-200 to-violet-200",
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 8,
    name: "Gift Boxes",
    description: "Beautifully packaged assortments",
    icon: Gift,
    count: 12,
    color: "from-rose-400 via-pink-400 to-red-500",
    glitterColor: "from-rose-200 to-pink-200",
    image: "https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 9,
    name: "Birthday Cakes",
    description: "Make every celebration memorable",
    icon: Star,
    count: 26,
    color: "from-yellow-400 via-amber-400 to-orange-500",
    glitterColor: "from-yellow-200 to-amber-200",
    image: "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 10,
    name: "Premium Chocolates",
    description: "Handcrafted Belgian chocolate creations",
    icon: Heart,
    count: 19,
    color: "from-indigo-400 via-purple-400 to-pink-500",
    glitterColor: "from-indigo-200 to-purple-200",
    image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 11,
    name: "Luxury Desserts",
    description: "Exquisite creations for special occasions",
    icon: Crown,
    count: 14,
    color: "from-teal-400 via-emerald-400 to-green-500",
    glitterColor: "from-teal-200 to-emerald-200",
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 12,
    name: "Energy Bites",
    description: "Healthy and delicious power snacks",
    icon: Zap,
    count: 21,
    color: "from-lime-400 via-green-400 to-emerald-500",
    glitterColor: "from-lime-200 to-green-200",
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

function CategoryCard({ category, index }: { category: Category; index: number }) {
  
  return (
    <div 
      className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:rotate-1 cursor-pointer h-full flex flex-col"
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Image Section */}
      <div className="relative h-40 overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-500">
            {category.name}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm">
            {category.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${category.color}`}>
            {category.count} items
          </span>
          <div className={`w-9 h-9 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-white">Sweet <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">Delights</span></h1>
          <p className="text-lg text-purple-100 mt-4">Discover our exquisite collection of handcrafted bakery items.</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Bakery Categories
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
