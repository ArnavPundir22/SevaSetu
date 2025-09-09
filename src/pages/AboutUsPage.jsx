import { motion, AnimatePresence } from "framer-motion";
import { Users, Globe, Heart, X } from "lucide-react";
import { useState } from "react";

const teamMembers = [
   { 
    name: "Dr. Shubham Dangwal", 
    role: "Assistant Professor",
    bio: "Skills" 
  },
  { 
    name: "Yuvraj Singh Chauhan", 
    role: "Student at COER University",
    bio: "Skills" 
  },
  { 
    name: "Arnav Pundir", 
    role: "Student at COER University",
    bio: "Web Developer & AI and Computer Vision Engineer" 
  },
  { 
    name: "Rohan Tomar", 
    role: "Student at COER University",
    bio: "Skills" 
  },
];

export default function AboutUsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-10 space-y-20">
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About SevaSetu
        </h1>
        <p className="text-gray-300 text-lg">
          SevaSetu is your one-stop platform to connect with trusted service professionals. Our mission is to make daily services fast, reliable, and accessible for everyone.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className="bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <Globe size={32} className="text-purple-400 mb-3"/>
          <h3 className="font-semibold text-xl">Our Vision</h3>
          <p className="text-gray-400 mt-2">
            To create a world where quality services are just a click away for everyone.
          </p>
        </motion.div>
        <motion.div
          className="bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <Heart size={32} className="text-pink-400 mb-3"/>
          <h3 className="font-semibold text-xl">Our Mission</h3>
          <p className="text-gray-400 mt-2">
            To connect users with trusted, verified professionals, making everyday tasks easier and faster.
          </p>
        </motion.div>
        <motion.div
          className="bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <Users size={32} className="text-cyan-400 mb-3"/>
          <h3 className="font-semibold text-xl">Our Values</h3>
          <p className="text-gray-400 mt-2">
            Trust, quality, and speed. We value both our professionals and our users.
          </p>
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              onClick={() => setSelected(member)}
              className="cursor-pointer bg-black/20 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="h-24 w-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-xl">{member.name}</h3>
              <p className="text-gray-400 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Member Bio */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-8 rounded-2xl shadow-xl max-w-lg text-center relative"
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24}/>
              </button>
              <div className="h-24 w-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                {selected.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="text-2xl font-bold">{selected.name}</h3>
              <p className="text-pink-400">{selected.role}</p>
              <p className="text-gray-300 mt-4">{selected.bio}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

