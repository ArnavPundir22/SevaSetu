import { motion } from "framer-motion";

export default function GradientParticles() {
  const particles = Array.from({ length: 40 });

  const colors = [
    "bg-purple-400",
    "bg-pink-400",
    "bg-cyan-400",
    "bg-purple-300",
    "bg-pink-300",
    "bg-cyan-300",
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {particles.map((_, idx) => {
        const size = Math.random() * 6 + 3;
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <motion.div
            key={idx}
            className={`absolute rounded-full ${color} opacity-30`}
            style={{
              width: size,
              height: size,
              top: Math.random() * window.innerHeight,
              left: Math.random() * window.innerWidth,
            }}
            animate={{
              y: [0, -50 - Math.random() * 100],
              x: [0, Math.random() * 50 - 25],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}

