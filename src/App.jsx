import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Wrench, Zap, Droplet, Hammer, Sparkles } from "lucide-react";
import { Analytics } from "@vercel/analytics/react"

import ServicesPage from "./pages/ServicesPage";
import ServiceProviderPage from "./pages/ServiceProviderPage";
import AboutUsPage from "./pages/AboutUsPage";
import FAQPage from "./pages/FAQPage";
import FeedbackContactPage from "./pages/FeedbackContactPage";


// ---------------- Data ----------------
const services = [
  { name: "Plumbing", icon: <Wrench size={28} /> },
  { name: "Electrical", icon: <Zap size={28} /> },
  { name: "AC & Cooling", icon: <Droplet size={28} /> },
  { name: "Carpentry", icon: <Hammer size={28} /> },
];

const featuredPros = [
  { name: "Rahul Sharma", service: "Plumbing" },
  { name: "Amit Verma", service: "Electrical" },
  { name: "Neha Singh", service: "AC & Cooling" },
  { name: "Rohan Singh", service: "RO Service" },
];

// ---------------- Navbar ----------------
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
     {name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <nav className="bg-black/40 backdrop-blur-lg p-4 shadow-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-md group-hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6 text-black" />
          </div>
          <span className="font-extrabold text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            SevaSetu
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative group text-lg font-semibold px-2 py-1 ${
                location.pathname === link.path ? "text-white" : "text-gray-300"
              } hover:text-white transition-colors`}
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 w-64 h-full bg-black/90 backdrop-blur-lg shadow-lg z-50 flex flex-col p-6 space-y-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold ${
                  location.pathname === link.path ? "text-white" : "text-gray-300"
                } hover:text-white transition`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ---------------- Splash Screen ----------------
function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: [0, 1.2, 1], rotate: [0, 360, 360] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex items-center space-x-3"
      >
        <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-lg flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-black" />
        </div>
        <span className="font-extrabold text-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          SevaSetu
        </span>
      </motion.div>
    </motion.div>
  );
}

// ---------------- Home Page ----------------
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
          Find Trusted Professionals Instantly
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Connect with verified service experts in your area. From plumbing and electrical work to carpentry and AC repairs, get your tasks done quickly and efficiently.
        </p>
        <Link
          to="/services"
          className="inline-block mt-6 px-8 py-3 font-semibold rounded-lg bg-pink-400 hover:bg-pink-500 transition text-black shadow-lg motion-safe:animate-pulse"
        >
          Browse Services
        </Link>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-black/20 backdrop-blur-md p-6 rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
            whileHover={{ scale: 1.1, y: -5 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <div className="text-white mb-3">{service.icon}</div>
            <h3 className="font-semibold text-xl text-white">{service.name}</h3>
            <p className="text-gray-300 text-sm mt-2">
              Connect with top {service.name.toLowerCase()} professionals near you.
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Professionals */}
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">Top Professionals</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {featuredPros.map((pro, idx) => (
            <motion.div
              key={idx}
              className="bg-black/20 backdrop-blur-md p-5 rounded-xl shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="font-semibold text-xl text-white">{pro.name}</h3>
              <p className="text-gray-300">{pro.service}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full max-w-5xl mt-20 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Why Choose SevaSetu?</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          We connect you with verified professionals, ensure timely service, and provide a hassle-free experience for all your household and technical needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Verified Experts", desc: "All professionals are screened and trusted." },
            { title: "On-Time Service", desc: "We respect your time and deadlines." },
            { title: "Affordable Pricing", desc: "Transparent rates with no hidden charges." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-transform hover:bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold text-xl text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------- App ----------------
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <AnimatePresence>
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <>
            <Navbar />
            <main className="max-w-6xl mx-auto py-10 px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/:category" element={<ServiceProviderPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/faqs" element={<FAQPage />} />
                    <Route path="/contact" element={<FeedbackContactPage />} />

                  </Routes>
                </motion.div>
              </AnimatePresence>
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

