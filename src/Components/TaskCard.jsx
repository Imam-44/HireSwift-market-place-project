import React from 'react';

const TaskCard = ({ task }) => {
  const {
    title,
    category,
    description,
    deadline,
    budget,
    userEmail,
    userName,
  } = task;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl mx-auto border-l-4 border-r-4 border-pink-500 min-h-[400px] flex flex-col justify-between">
      <h3 className="text-3xl font-bold text-pink-600 mb-2">{title}</h3>

      <div className="text-gray-600 text-sm mb-1">
        <span className="font-semibold">Category:</span> {category}
      </div>

      <div className="text-gray-700 mt-2 mb-4">
        <span className="font-semibold">Description:</span>
        <p className="mt-1 text-justify">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 ">
        <div>
          <span className="font-semibold">Deadline:</span><br />
          <span>{deadline}</span>
        </div>
        <div>
          <span className="font-semibold">Budget:</span><br />
          <span>${budget}</span>
        </div>
        <div>
          <span className="font-semibold">User Name:</span><br />
          <span>{userName}</span>
        </div>
        <div>
          <span className="font-semibold">User Email:</span><br />
          <span>{userEmail}</span>
        </div>

      </div>

       <button
        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 my-8"
      >
        View Task
      </button>
    </div>
  );
};

export default TaskCard;
