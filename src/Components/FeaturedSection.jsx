
import React, { useEffect, useState } from 'react';
import FeaturedTask from './FeaturedTask';

const FeaturedSection = () => {
  const [featuredTasks, setFeaturedTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/tasks/home')
      .then(res => res.json())
      .then(data => setFeaturedTasks(data));
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">Featured Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredTasks.map(task => (
            <FeaturedTask key={task._id} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
