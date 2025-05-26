import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

const freelancers = [
  {
    name: "Ayesha Khan",
    role: "Graphic Designer",
    rating: "⭐ 4.9",
    avatar: "https://i.ibb.co/JwRJ9x2K/beautiful-happy-young-woman-writer-wearing-stylish-glasses-typing-keyboard-her-modern-laptop-pc-2736.jpg",
  },
  {
    name: "Junaid Rahman",
    role: "Web Developer",
    rating: "⭐ 4.8",
    avatar: "https://i.ibb.co/FLLdsX3W/indian-programmer-sits-desk-with-laptop-look-camera-with-thoughtful-look-studio-photo-against-dark-t.jpg",
  },
  {
    name: "Meher Afroz",
    role: "Content Writer",
    rating: "⭐ 4.7",
    avatar: "https://i.ibb.co/B2g8VbtB/pretty-korean-female-scholar-green-sweater-holds-takeaway-coffee-cup-prepares-research-home-poses-ag.jpg",
  },
  {
    name: "Rayhan Ahmed",
    role: "Digital Marketer",
    rating: "⭐ 4.9",
    avatar: "https://i.ibb.co/ymRQpmFj/business-man-with-headphone-working-23-2148446276.jpg",
  },
];

const TopFreelancers = () => (
  <section className="py-16 mb-15 ">
    <div className="flex justify-center items-center gap-3 mb-2">
      <FaMedal size={32} className="text-pink-600" />
      <h2 className="text-4xl font-bold ">Top Freelancers</h2>
    </div>
    <p className="text-center  mb-12">
      Meet our top-rated freelancers, trusted by hundreds of clients.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
      {freelancers.map((freelancer, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden text-center p-6 border border-pink-300 hover:shadow-xl hover:shadow-pink-300"
        >
          <img
            src={freelancer.avatar}
            alt={freelancer.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-lg font-semibold text-pink-600">{freelancer.name}</h3>
          <p className="text-sm text-gray-500">{freelancer.role}</p>
          <p className="mt-2 text-pink-500 font-semibold">{freelancer.rating}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TopFreelancers;
