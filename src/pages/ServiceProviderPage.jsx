import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

// --- Define service providers ---
const providers = {
  plumber: [
    { id: "PL-7X2A", name: "Bablu", experience: "15 yrs" },
    { id: "PL-9B6Q", name: "Om veer", experience: "12-15 yrs" },
    { id: "PL-4M1T", name: "Yash pal", experience: "20 yrs (minimum)" },
    { id: "PL-8Z5W", name: "Vishal", experience: "8-10 yrs" },
  ],
  electrician: [
    { id: "EL-5K9N", name: "Tinku", experience: "12-15 yrs" },
    { id: "EL-3H7Q", name: "Devi Singh", experience: "20-22 yrs" },
    { id: "EL-6J2X", name: "Shubham Kumar", experience: "7-9 yrs" },
    { id: "EL-2R8P", name: "Rajnish", experience: "10 yrs" },
    { id: "EL-1T5Y", name: "Nitin", experience: "8-10 yrs" },
  ],
  carpenter: [
    { id: "CA-9V3Z", name: "Ravi", experience: "20-25 yrs" },
    { id: "CA-4L6W", name: "Rinku Kumar", experience: "15 yrs" },
  ],
  "ac-service": [{ id: "AC-7F2Q", name: "Nitin", experience: "8-10 yrs" }],
  "appliance": [{ id: "AP-5M8K", name: "Vivek", experience: "8-10 yrs" }],
};

export default function ServiceProviderPage() {
  const { category } = useParams();
  const serviceProviders = providers[category] || [];

  const [selectedProvider, setSelectedProvider] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    service: category,
    date: "",
    time: "",
    location: "",
    job: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.location) {
      setMessage("Please enter your address.");
      return;
    }

    if (!selectedProvider) {
      setMessage("Please select a provider.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://5c13f2ea-79a4-4264-9a07-2f6199fd6f46-00-2yqcgzqyqeaa4.pike.replit.dev/send-booking",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            provider: selectedProvider.name,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setMessage(
          `✅ Booking Confirmed! Your Appointment ID is ${result.appointment_id}`
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          service: category,
          date: "",
          time: "",
          location: "",
          job: "",
        });
      } else {
        setMessage(`❌ ${result.message}`);
      }
    } catch (err) {
      console.error("Booking error:", err);
      setMessage(
        "❌ Error sending booking. Make sure your device can reach the server."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedProvider(null);
    setMessage("");
  };

  return (
    <motion.div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {category} Providers
      </h1>

      {serviceProviders.length === 0 ? (
        <p className="text-gray-400">No providers available in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceProviders.map((p) => (
            <motion.div
              key={p.id}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer"
              onClick={() => {
                setSelectedProvider(p);
                setMessage("");
              }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="mt-2">Experience: {p.experience}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Booking Modal */}
      {selectedProvider && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-auto p-4">
          <motion.div
            className="bg-gray-900 p-6 rounded-2xl w-full max-w-md shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4">
              Booking with {selectedProvider.name} ({category})
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black/30 text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black/30 text-white"
              />
              <input
                type="text"
                name="phone"
                placeholder="Contact Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black/30 text-white"
              />
              <input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black/30 text-white"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black/30 text-white"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-black/30 text-white"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter your address"
                required
                className="w-full p-2 rounded bg-black/30 text-white"
              />
              <textarea
                name="job"
                value={formData.job}
                onChange={handleChange}
                placeholder="Describe the problem/job"
                required
                className="w-full p-2 rounded bg-black/30 text-white"
              ></textarea>

              <button
                type="submit"
                className="bg-pink-500 w-full p-2 rounded text-black font-bold mt-2 hover:bg-pink-600 transition"
              >
                {loading ? "Sending Booking..." : "Confirm Booking"}
              </button>
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-gray-600 w-full p-2 rounded text-white font-bold mt-2 hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </form>

            {message && (
              <motion.p
                className="mt-3 text-center font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {message}
              </motion.p>
            )}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
