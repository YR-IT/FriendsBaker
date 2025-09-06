import { motion } from "framer-motion";
import React from "react";

interface LoaderProps {
  logoSrc?: string;
  duration?: number;
}

const Loader: React.FC<LoaderProps> = ({ logoSrc, duration = 3 }) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const floatingObjects = Array.from({ length: 15 }).map(() => ({
    size: 8 + Math.random() * 20,
    x: Math.random() * window.innerWidth,
    startY: window.innerHeight + 20,
    endY: -50,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 4,
    color: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.5})`,
  }));

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Floating objects */}
      {floatingObjects.map((obj, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: obj.size,
            height: obj.size,
            backgroundColor: obj.color,
            boxShadow: `0 0 ${obj.size / 2}px ${obj.color}`,
          }}
          initial={{ y: obj.startY, x: obj.x, opacity: 0, scale: 0 }}
          animate={{ y: obj.endY, opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: obj.duration,
            repeat: Infinity,
            delay: obj.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Logo */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], rotate: [0, 360, 0], opacity: [0, 1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="w-24 h-24 sm:w-32 sm:h-32"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
