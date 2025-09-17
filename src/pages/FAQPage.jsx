import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "Browse service providers, select one, and fill out the booking form with your details, date, time, and location. You’ll get a confirmation with an appointment ID.",
  },
  {
    question: "Do I need to pay online?",
    answer:
      "Currently, you have to pay online as will be directly by the customer supervisor when they will contact you.",
  },
  {
    question: "Are service providers verified?",
    answer:
      "Yes, all providers are verified through ID checks and skill evaluations before being listed on our platform.",
  },
  {
    question: "Can I cancel or reschedule a booking?",
    answer:
      "Yes, you can cancel or reschedule up to 12 hours before your appointment without any penalty by contacting us by mailing us at sevasetu.services@gmail.com.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We currently operate in Local Areas of Roorkee.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us anytime via mailiing us at sevasetu.services@gmail.com",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-white"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 pt-0 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

