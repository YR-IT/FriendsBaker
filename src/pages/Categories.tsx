
import { motion } from "framer-motion";

// ✅ Menu data (your full menu)
const menuData: Record<string, { name: string; price: string }[]> = {
  "Cream Cakes": [
    { name: "Pineapple", price: "450/- (500gm), 850/- (1kg)" },
    { name: "Vanilla", price: "450/- (500gm), 850/- (1kg)" },
    { name: "Butter Scotch", price: "500/- / 950/-" },
    { name: "Red Velvet", price: "600/- / 1200/-" },
    { name: "Fresh Fruit", price: "600/- / 1200/-" },
    { name: "Vanilla Strawberry", price: "500/- / 950/-" },
    { name: "Vanilla Blueberry", price: "500/- / 950/-" },
    { name: "Coconut Pineapple", price: "500/- / 950/-" },
    { name: "Rainbow Cake", price: "650/- / 1300/-" },
    { name: "Choco Vanilla", price: "500/- / 950/-" },
    { name: "Chocolate Truffle", price: "600/- / 1200/-" },
    { name: "Chocolate Mousse", price: "500/- / 950/-" },
    { name: "Choco Blueberry", price: "500/- / 950/-" },
    { name: "Choco Strawberry", price: "500/- / 950/-" },
    { name: "Black Forest", price: "500/- / 950/-" },
    { name: "Kit Kat Cake", price: "600/- / 1200/-" },
    { name: "Praline Cake", price: "650/- / 1300/-" },
    { name: "Coffee Cake", price: "500/- / 950/-" },
    { name: "Mango Cake", price: "500/- / 950/-" },
    { name: "Carrot Cake", price: "500/- / 1000/-" },
    { name: "Rasmalai Cake", price: "500/- / 1000/-" },
    { name: "White Forest Cake", price: "500/- / 1000/-" },
    { name: "Sugarless Chocolate Cake", price: "700/- / 1400/-" },
  ],
  "Tea Time Cakes": [
    { name: "Rich Fruit Cake", price: "180/- (250gm), 450/- (500gm)" },
    { name: "Honey Almond Cake", price: "180/- / 450/-" },
    { name: "Dates Walnut Cake", price: "180/- / 450/-" },
    { name: "Mom-Made Cake", price: "180/- / 450/-" },
    { name: "Atta Jaggery Cake", price: "180/- / 450/-" },
    { name: "Lemon Cake", price: "180/- / 450/-" },
    { name: "Mango Cake", price: "180/- / 450/-" },
    { name: "Marble Cake", price: "200/- / 450/-" },
    { name: "Choco Walnut Cake", price: "200/- / 450/-" },
    { name: "Choco Vanilla Cake", price: "250/-" },
    { name: "Vanilla Cake", price: "210/-" },
    { name: "Plain Vanilla Cake", price: "210/-" },
    { name: "Walnut S.Free Cake", price: "200/- / 450/-" },
    { name: "Choco Chips Cake", price: "200/- / 450/-" },
    { name: "Red Velvet Cake", price: "250/- / 500/-" },
    { name: "Banana Walnut Cake", price: "200/- / 450/-" },
    { name: "Coconut Pista Almond Cake", price: "200/- / 450/-" },
    { name: "Pineapple Cake", price: "200/- / 450/-" },
    { name: "Chocolate Orange Cake", price: "200/- / 450/-" },
    { name: "Pineapple Upside Down Cake", price: "200/- / 450/-" },
    { name: "Plum Cake", price: "260/-" },
    { name: "Brownie", price: "200/-" },
  ],
  Puddings: [
    { name: "Chocolate Truffle Pudding", price: "100/-" },
    { name: "Fruit Pudding", price: "80/-" },
    { name: "Choco Mousse Pudding", price: "80/-" },
    { name: "Tiramisu Pudding (Jar)", price: "100/-" },
    { name: "Banoffee Pudding (Jar)", price: "100/-" },
    { name: "Twin Choco Mousse Pudding (Jar)", price: "100/-" },
    { name: "Red Velvet Pudding (Jar)", price: "100/-" },
    { name: "Caramel Crunch Pudding (Jar)", price: "100/-" },
  ],
  "Sugarless Cookies": [
    { name: "Oats Sugar Less", price: "300gm 270/-" },
    { name: "Multigrain S-Free", price: "300gm 250/-" },
    { name: "Sugarless Italian Biscotti", price: "300gm 280/-" },
    { name: "Sugarless Rock Almond", price: "300gm 280/-" },
    { name: "Atta Desi Ghee Sugarless", price: "400gm 320/-" },
  ],
  Titbits: [
    { name: "Brownie/Doughnut", price: "60/-" },
    { name: "Choco Muffin", price: "40/-" },
    { name: "Vanilla Muffin", price: "40/-" },
    { name: "Choco Lava", price: "60/-" },
    { name: "Cake Pops", price: "40/-" },
    { name: "Ice Cream Cake Pops", price: "40/-" },
    { name: "Caramel Square", price: "30/-" },
    { name: "Caramel Toffee", price: "30/-" },
    { name: "Apple Pie", price: "40/-" },
    { name: "Choco Cup Cake", price: "40/-" },
    { name: "Vanilla Cup Cake", price: "40/-" },
    { name: "Swiss Roll", price: "40/-" },
    { name: "Chocolate Ball", price: "40/-" },
    { name: "Tart", price: "70/-" },
    { name: "Cream Roll (pack of 2)", price: "100/-" },
    { name: "Vanilla Cream in a cone", price: "50/-" },
    { name: "Plum Muffin/Atta", price: "40/-" },
    { name: "Jaggery Muffins", price: "40/-" },
  ],
  "Chips And Namkeen": [
    { name: "Beetroot Chips", price: "200gm 120/-" },
    { name: "Masala Chips", price: "200gm 120/-" },
    { name: "Green Chips", price: "200gm 120/-" },
    { name: "Millet Chips", price: "200gm 150/-" },
    { name: "Banana Chips", price: "210gm 150/-" },
    { name: "Pita Chips With Dip", price: "200gm 150/-" },
    { name: "Lavash With Dip", price: "200gm 150/-" },
    { name: "Karela Chips", price: "200gm 120/-" },
    { name: "Beetroot Bhujia", price: "200gm 150/-" },
    { name: "Chakli (Murukku)", price: "350gm 150/-" },
    { name: "Bhakarwadi", price: "200gm 150/-" },
    { name: "Oats Bhujia", price: "200gm 150/-" },
    { name: "Ajwain Fursi", price: "200gm 150/-" },
    { name: "Cheese Straws", price: "200gm 150/-" },
    { name: "Kachori", price: "483gm 140/-" },
  ],
  "Misc. Meetha": [
    { name: "Rock Almond Chocolate", price: "Glass Jar 200/-" },
    { name: "Glass Jar Choco Cookies", price: "Glass Jar 200/-" },
    { name: "Jam Papad Jar", price: "Glass Jar 100/-" },
    { name: "Jelly Cubes", price: "Glass Jar 100/-" },
    { name: "Colourful Candy", price: "Glass Jar 100/-" },
    { name: "Chocolate Ladoo", price: "Glass Jar 200/-" },
    { name: "Choco Mahbana", price: "Glass Jar 250/-" },
    { name: "Fruit Loops", price: "160gm 80/-" },
    { name: "Choco Sticks", price: "200gm 120/-" },
    { name: "Mango Puff", price: "200gm 120/-" },
  ],
  "Biscuits And Cookies": [
    { name: "Italian Biscotti", price: "300gm 240/-" },
    { name: "Rock Almond", price: "300gm 260/-" },
    { name: "Choco Chips", price: "300gm 240/-" },
    { name: "Butter Almond", price: "250gm 200/-" },
    { name: "Butter Coconut", price: "250gm 200/-" },
    { name: "Butter Corn Flakes", price: "250gm 200/-" },
    { name: "Butter Kaju Cookies", price: "300gm 240/-" },
    { name: "Jeera Biscuits", price: "300gm 200/-" },
    { name: "Butter Salted", price: "300gm 200/-" },
    { name: "Besan Khatai", price: "250gm 200/-" },
    { name: "Desi Ghee Besan Pista Khatai", price: "1kg 600/-" },
    { name: "Almond Khatai", price: "700gm 400/-" },
    { name: "Sweet Khatai", price: "700gm 400/-" },
    { name: "Cake Rusk", price: "200gm 120/-" },
    { name: "Cinnamon Toast", price: "200gm 120/-" },
    { name: "Suji Rusk", price: "450gm 120/-" },
  ],
  "Atta And Multigrain Cookies": [
    { name: "Atta Jaggery Almond", price: "300gm 240/-" },
    { name: "Atta Muesli", price: "300gm 270/-" },
    { name: "Atta Desi Ghee", price: "300gm 250/-" },
    { name: "Atta Cow Desi Ghee", price: "300gm 260/-" },
    { name: "Oats Cookies", price: "300gm 240/-" },
    { name: "Atta Desi Ghee Salted", price: "300gm 250/-" },
    { name: "Atta Jaggery Sesame", price: "300gm 270/-" },
    { name: "Almond Rock Millet Cookies", price: "300gm 280/-" },
    { name: "Multi Grain", price: "300gm 240/-" },
    { name: "Atta Dates Banana", price: "300gm 270/-" },
  ],
  "NY Cheese Cakes": [
    { name: "Tiramisu Cheese Cake", price: "700/- / 1400/-" },
    { name: "Blueberry Cheese Cake", price: "700/- / 1400/-" },
    { name: "Lotus Biscoff Cheese Cake", price: "800/- / 1600/-" },
    { name: "Nutella Cheesecake", price: "750/- / 1500/-" },
    { name: "Frozen Blueberry Cheesecake", price: "700/- / 1400/-" },
  ],
  "Bento Cakes": [
    { name: "Pineapple", price: "250/- (Small), 350/- (Large)" },
    { name: "Chocolate Mousse", price: "350/-" },
    { name: "Chocolate Truffle", price: "350/- / 450/-" },
  ],
};

// 🎨 Section animation
const sectionVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// 🎨 Item animation
const itemVariants: any = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  hover: { x: 5, color: "#0284c7", transition: { duration: 0.2 } },
};

// ✨ Floating bubbles background
const Bubbles = () => {
  const bubbles = Array.from({ length: 12 });
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-sky-300/30"
          style={{
            width: Math.random() * 40 + 20,
            height: Math.random() * 40 + 20,
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 50}px`,
          }}
          animate={{
            y: ["0%", "-120vh"],
            opacity: [0.4, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ✅ Main Menu Page
export default function MenuPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-50 via-blue-100 to-sky-200 py-30 px-6">
      <Bubbles />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-14 drop-shadow-md"
      >
        🍰 Friends Bakers Menu
      </motion.h1>

      {/* Menu Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(menuData).map(([category, items], i) => (
          <motion.div
            key={category}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-6 border-t-4 border-sky-500 hover:shadow-2xl hover:border-blue-600 transition-all duration-300"
          >
            {/* Category Heading */}
            <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b pb-2">
              {category}
            </h2>

            {/* Items */}
            <ul className="space-y-2 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
              {items.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="flex justify-between items-center text-gray-700 text-sm px-2 py-1 rounded-md hover:bg-blue-50"
                >
                  <span>{item.name}</span>
                  <span className="font-medium text-blue-600">
                    {item.price}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
