import { motion } from "framer-motion";

export default function FeedbackContactPage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-3"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
          Feedback & Contact Us
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a suggestion, question, or project idea?  
          We'd love to hear from you!
        </p>
      </motion.div>

      {/* Feedback Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black/30 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-2xl text-left"
      >
        <form
          action="https://formsubmit.co/arnavp128@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="_subject" value="New Feedback from SevaSetu Website" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value="Thank you for contacting SevaSetu. We’ll get back soon." />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Feedback / Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-black shadow-lg hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}

