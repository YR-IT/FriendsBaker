import { useState, useEffect } from 'react';
import { Sparkles, Coffee, Croissant, Award, Users, Clock } from 'lucide-react';

const BakeryHero = () => {
  const [, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-pink-50 to-sky-50">
      {/* Soft Gradient Spots */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { top: '10%', left: '5%', color: 'from-blue-200/40 to-transparent', size: 'w-[350px] h-[350px]' },
          { top: '25%', right: '10%', color: 'from-pink-300/40 to-transparent', size: 'w-[280px] h-[280px]' },
          { bottom: '-8%', left: '15%', color: 'from-sky-200/50 to-transparent', size: 'w-[400px] h-[400px]' }
        ].map((spot, i) => (
          <div
            key={i}
            className={`absolute ${spot.size} rounded-full bg-gradient-to-br ${spot.color} blur-3xl animate-pulse`}
            style={{ top: spot.top, left: spot.left, right: spot.right }}
          />
        ))}
      </div>

      {/* Floating Sprinkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${
              isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-md border border-blue-200 rounded-full shadow-md animate-bounce">
                <Award className="w-5 h-5 text-blue-500 animate-pulse" />
                <span className="text-blue-700 font-medium">Premium Friend's Bakery</span>
                <Sparkles className="w-5 h-5 text-sky-400 animate-spin-slow" />
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span className="block bg-gradient-to-r from-blue-500 via-sky-400 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                    Crafted with Love
                  </span>
                  <span className="block text-blue-700">Baked Fresh Every Day</span>
                </h1>
                <p className="text-lg text-blue-900/80 max-w-lg leading-relaxed">
                  Our bakery blends tradition with creativity — bringing you warm breads, buttery croissants, and desserts that melt in your mouth.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '25+', label: 'Years Experience' },
                  { value: '50k+', label: 'Happy Customers' },
                  { value: '100+', label: 'Daily Varieties' }
                ].map((stat, i) => (
                  <div key={i} className="text-center group cursor-default">
                    <div className="text-3xl font-bold text-blue-700 group-hover:scale-110 transition-transform">{stat.value}</div>
                    <div className="text-sm text-blue-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-400 text-white font-semibold rounded-2xl shadow-lg hover:shadow-blue-300/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  <span className="relative flex items-center gap-2">
                    <Coffee className="w-5 h-5" />
                    Order Fresh Now
                  </span>
                </button>
                <button className="group px-8 py-4 bg-white/70 backdrop-blur-sm text-blue-700 font-semibold rounded-2xl border border-blue-200 hover:bg-white/90 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Croissant className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Explore Menu
                  </span>
                </button>
              </div>
            </div>

            {/* Right Image Card */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="relative group max-w-md mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-sky-300 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-105" />
                
                {/* Image Card */}
                <div className="relative bg-white/70 backdrop-blur-md border border-blue-200 rounded-3xl p-6 shadow-2xl hover:shadow-blue-200/60 transition-shadow duration-500">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 group">
                    {/* New Bakery Image */}
                    <img
                      src="https://images.pexels.com/photos/7491894/pexels-photo-7491894.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Artisan bakery interior with pastries"
                      className="w-full h-full object-cover transform group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-50" />
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {[
                      { icon: Clock, title: 'Fresh Daily', desc: 'Baked every morning at 5 AM' },
                      { icon: Users, title: 'Master Bakers', desc: 'Trained in European traditions' }
                    ].map((f, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-white/80 rounded-xl border border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-sky-400 rounded-xl flex items-center justify-center">
                          <f.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-blue-800 font-semibold">{f.title}</div>
                          <div className="text-blue-500 text-sm">{f.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Accent */}
              <div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-sky-300 to-blue-300 rounded-full shadow-lg flex items-center justify-center animate-bounce-slow">
                <Sparkles className="w-8 h-8 text-white animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BakeryHero;
