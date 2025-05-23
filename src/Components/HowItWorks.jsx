import { motion } from "framer-motion";
import { FaTasks, FaGavel, FaHandshake, FaCheckCircle, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaTasks size={40} />,
    title: "Post a Task",
    description: "Easily create your task with necessary details like budget, deadline, and description.",
  },
  {
    icon: <FaGavel size={40} />,
    title: "Get Bids",
    description: "Freelancers will browse and bid on your task based on their skills and availability.",
  },
  {
    icon: <FaHandshake size={40} />,
    title: "Hire the Best",
    description: "Review the bids, compare profiles and hire the most suitable freelancer for your task.",
  },
  {
    icon: <FaCheckCircle size={40} />,
    title: "Task Completed",
    description: "Collaborate and complete the task. Give ratings to maintain platform quality.",
  },
];

const HowItWorks = () => (
  <section className="py-16 bg-white">
    <div className="flex justify-center items-center gap-3 mb-2">
      <FaRocket size={32} className="text-pink-600" />
      <h2 className="text-4xl font-bold text-black">How It Works</h2>
    </div>
    <p className="text-center text-gray-600 mb-12">A simple four-step process to get your job done easily.</p>
    
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="bg-white rounded-2xl shadow-lg  p-6 text-center border border-pink-300 hover:shadow-pink-300 hover:shadow-2xl"
        >
          <div className="text-pink-600 mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-pink-600">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
