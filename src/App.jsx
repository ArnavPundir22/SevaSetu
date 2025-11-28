import { motion } from "framer-motion";
import { AlertTriangle, Wrench, RefreshCw } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-6">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-6 max-w-lg"
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="mx-auto w-24 h-24 flex items-center justify-center rounded-xl
          bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-lg"
        >
          <AlertTriangle className="w-14 h-14 text-black" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
          Server Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-gray-300">
          Our servers are currently undergoing scheduled maintenance to improve performance
          and reliability. We’ll be back shortly — thank you for your patience!
        </p>

        {/* Status Box */}
        <div className="bg-black/30 backdrop-blur-lg p-5 rounded-xl border border-white/10 space-y-3">
          <div className="flex items-center justify-center space-x-3 text-lg">
            <Wrench className="text-yellow-300" />
            <span>Performing system upgrades…</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-300">
            <RefreshCw className="animate-spin" />
            <span>Estimated downtime: 15–25 minutes</span>
          </div>
        </div>

        {/* Button */}
        <a
          href="/"
          className="inline-block mt-4 px-8 py-3 font-semibold rounded-lg bg-pink-400 hover:bg-pink-500 
          transition text-black shadow-lg"
        >
          Try Again
        </a>
      </motion.div>
    </div>
  );
}
