import React from 'react';
import { FaCalendarAlt, FaUserTie, FaDollarSign, FaTasks } from "react-icons/fa";

const DetailsCard = ({ task }) => {
  const {
    title,
    category,
    deadline,
    budget,
    userName,
    userEmail,
    description,
  } = task || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-200 hover:shadow-pink-200 transition-shadow duration-300">
        <h2 className="text-4xl font-extrabold text-pink-500 mb-4 border-b-2 border-pink-100 pb-2">
          {title}
        </h2>
        <div className="space-y-4 text-gray-700 text-[17px]">
          <p className="flex items-center gap-2">
            <FaTasks className="text-indigo-500" />
            <span><strong>Category:</strong> {category}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaDollarSign className="text-green-500" />
            <span><strong>Budget:</strong> ${budget}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-pink-500" />
            <span><strong>Deadline:</strong> {deadline}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaUserTie className="text-yellow-600" />
            <span><strong>Posted By:</strong> {userName} ({userEmail})</span>
          </p>
          <div className="mt-4">
            <strong className="block mb-1 text-lg text-gray-800">Description:</strong>
            <p className="text-justify leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
