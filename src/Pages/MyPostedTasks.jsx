import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router";
import BidsModal from "../Components/BidsModal"; // Modal কম্পোনেন্ট import

const MyPostedTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [bids, setBids] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://assignment-10-server-psi-ashen.vercel.app/my-tasks?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This task will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6366f1",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-psi-ashen.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Task has been deleted.", "success");
              setTasks((prev) => prev.filter((task) => task._id !== id));
            }
          });
      }
    });
  };

  const handleViewBids = (taskId) => {
    fetch(`https://assignment-10-server-psi-ashen.vercel.app/bids/${taskId}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
        setShowModal(true);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b10ebd] via-[#8300a4] to-[#ff2e9a] p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-8 drop-shadow-lg">
          🎯 My Posted Tasks
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-2xl border border-pink-300">
          <table className="min-w-full divide-y divide-pink-200 bg-white rounded-xl overflow-hidden">
            <thead className="bg-[#8e24aa] text-white text-sm uppercase">
              <tr>
                <th className="px-3 py-3 text-left tracking-wider">Title</th>
                <th className="px-3 py-3 text-left tracking-wider">Deadline</th>
                <th className="px-3 py-3 text-left tracking-wider">Budget</th>
                <th className="px-3 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-sm">
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr
                    key={task._id}
                    className="hover:bg-pink-50 transition duration-150"
                  >
                    <td className="px-3 py-4 font-medium text-gray-800">
                      {task.title}
                    </td>
                    <td className="px-3 py-4 text-gray-600">
                      {new Date(task.deadline).toLocaleDateString()}
                    </td>
                    <td className="px-3 py-4 text-gray-600">${task.budget}</td>
                    <td className="px-3 py-4 text-center">
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                        <button
                          onClick={() => navigate(`/update-task/${task._id}`)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-xs font-semibold transition cursor-pointer"
                        >
                          Update
                        </button>

                        <button
                          onClick={() => handleDelete(task._id)}
                          className="bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded text-xs font-semibold transition w-full sm:w-auto cursor-pointer"
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => handleViewBids(task._id)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded text-xs font-semibold transition w-full sm:w-auto cursor-pointer"
                        >
                          Bids
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No tasks found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* এখানে modal show করানো হবে */}
          {showModal && <BidsModal bids={bids} onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </div>
  );
};

export default MyPostedTasks;
