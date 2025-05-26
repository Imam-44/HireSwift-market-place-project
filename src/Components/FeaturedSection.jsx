import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';  
import FeaturedTask from './FeaturedTask';

const FeaturedSection = () => {
  const [featuredTasks, setFeaturedTasks] = useState([]);

  useEffect(() => {
    fetch('https://assignment-10-server-one-sigma.vercel.app/tasks/home')
      .then(res => res.json())
      .then(data => setFeaturedTasks(data));
  }, []);

  return (
    <section className="py-16 ">
      <div className="max-w-10/12 mx-auto px-4">
        <h2 className="flex items-center justify-center text-4xl font-bold text-center mb-4">
          <FaStar className="text-pink-500 mr-3" /> Top Featured Tasks
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Discover the best tasks handpicked for you, showcasing essential details with clean design and smooth user interaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTasks.map(task => (
            <FeaturedTask key={task._id} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
