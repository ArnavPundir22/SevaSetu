import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Wrench, Zap, Wind, BatteryCharging, Droplet, Hammer } from "lucide-react";

const services = [
  { name: "Plumber", slug: "plumber", icon: <Wrench size={32} /> },
  { name: "Electrician", slug: "electrician", icon: <Zap size={32} /> },
  { name: "AC Service", slug: "ac-service", icon: <Wind size={32} /> },
  { name: "Inverter Repair", slug: "inverter", icon: <BatteryCharging size={32} /> },
  { name: "RO Service", slug: "ro-service", icon: <Droplet size={32} /> },
  { name: "Labour", slug: "labour", icon: <Hammer size={32} /> },
];

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-6"
    >
      <h1 className="text-4xl font-extrabold mb-10 text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Explore Daily Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={800}
              glareEnable={true}
              glareMaxOpacity={0.25}
              glareColor="cyan"
              glareBorderRadius="16px"
            >
              <div className="relative group">
                {/* Glow background */}
                <div className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-pulse"></div>

                <Link
                  to={`/services/${service.slug}`}
                  className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6 
                             hover:shadow-cyan-500/30 hover:border-cyan-400 
                             transition transform flex flex-col items-center text-center"
                >
                  <div className="text-blue-400 mb-4">{service.icon}</div>
                  <h2 className="text-xl font-semibold text-white">{service.name}</h2>
                  <p className="text-gray-300 text-sm mt-2">
                    Find trusted {service.name}s near you.
                  </p>
                </Link>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

