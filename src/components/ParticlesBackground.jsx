import { motion } from "framer-motion";

export default function ParticlesBackground() {
  // Number of particles
  const particles = Array.from({ length: 30 });

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {particles.map((_, idx) => (
        <motion.div
          key={idx}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: Math.random() * window.innerHeight,
            left: Math.random() * window.innerWidth,
          }}
          animate={{
            y: [0, -50 - Math.random() * 100], // float upwards
            x: [0, Math.random() * 50 - 25],   // slight horizontal drift
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

