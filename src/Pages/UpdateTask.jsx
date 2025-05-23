import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const task = useLoaderData();
  console.log(task);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const budget = form.budget.value;

    const updatedTask = {
      title,
      category,
      description,
      deadline,
      budget
    };

    fetch(`https://assignment-10-server-psi-ashen.vercel.app/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Task updated successfully.", "success");
          navigate("/myPostedTasks");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-pink-200 to-pink-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-700">✍️ Update Task</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input type="text" name="title" defaultValue={task.title} className="w-full p-3 border rounded" placeholder="Title" required />
          <select name="category" defaultValue={task.category} className="w-full p-3 border rounded" required>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Marketing">Marketing</option>
          </select>
          <textarea name="description" defaultValue={task.description} className="w-full p-3 border rounded" rows="4" required />
          <input
            type="date"
            name="deadline"
            defaultValue={new Date(task.deadline).toISOString().split("T")[0]}
           
            className="w-full p-3 border rounded"
            required
          />
          <input type="number" name="budget" defaultValue={task.budget} className="w-full p-3 border rounded" required />

          <div className="grid grid-cols-2 gap-4">
            <input type="text" readOnly value={user?.displayName} className="w-full p-3 border rounded bg-gray-100" />
            <input type="email" readOnly value={user?.email} className="w-full p-3 border rounded bg-gray-100" />
          </div>

          <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded w-full mt-4 font-semibold cursor-pointer">
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
