import { div } from "motion/react-client";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseTasks = () => {

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch('https://assignment-10-server-psi-ashen.vercel.app/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);


  return (
   <div className="bg-pink-100">
        <div className="min-h-screen w-11/12 mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-pink-900 mb-6">Browse All Tasks Here</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white rounded-xl  p-6 space-y-3 border border-gray-200 shadow-xl hover:shadow-pink-200 transition-shadow duration-100"
          >
            <h3 className="text-xl font-semibold text-pink-500 border-b-2 border-pink-100">{task.title}</h3>
            <p className="text-gray-700"><span className="font-medium">Category:</span> {task.category}</p>
            <p className="text-gray-700"><span className="font-medium">Budget:</span> ${task.budget}</p>
            <p className="text-gray-700 line-clamp-2">{task.description}</p>

            <Link
              to={`/taskdetails/${task._id}`}
              className="inline-block mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
            >
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default BrowseTasks;
