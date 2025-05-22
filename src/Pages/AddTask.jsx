import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/authContext';

const AddTask = () => {
 const {user} = useContext(AuthContext)
  const handleAddTask = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTaskData = Object.fromEntries(formData.entries())
    console.log(newTaskData);

    //send task data to the db
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTaskData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          console.log('added successfully');
          Swal.fire({
            
            icon: "success",
            title: "Your task added successfully",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#d52a91]">Add New Task</h2>

        <form onSubmit={handleAddTask} className="space-y-4">
          <div className='flex flex-col md:flex-row gap-5'>
            {/* Task Title */}
            <div>
              <label className=" mb-1 font-medium">Task Title</label>
              <input type="text" name='title' placeholder="Enter task title" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#302b63]" required />
            </div>

            {/* Category */}
            <div>
              <label className="mb-1 font-medium">Category</label>
              <select name='category' className="w-full pr-9 pl-2 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#302b63]">
                <option>Web Development</option>
                <option>Design</option>
                <option>Writing</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>



          {/* Deadline */}
          <div>
            <label className="block mb-1 font-medium">Deadline</label>
            <input type="date" name='deadline' className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#302b63]" required  />
          </div>

          {/* Budget */}
          <div>
            <label className="block mb-1 font-medium">Budget ($)</label>
            <input type="number" name='budget' placeholder="Enter budget" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#302b63]" required  />
          </div>

          {/* User Info (Read Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">User Name</label>
              <input type="text" name='userName'     defaultValue={user?.displayName || ""} readOnly className="w-full px-4 py-2 bg-gray-100 border rounded-xl" required  />
            </div>
            <div>
              <label className="block mb-1 font-medium">User Email</label>
              <input type="email" name='userEmail' defaultValue={user?.email || ""} readOnly className="w-full px-4 py-2 bg-gray-100 border rounded-xl" required  />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea name='description' placeholder="What needs to be done..." rows="4" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#302b63]" required ></textarea>
          </div>

          {/* Add Button */}
          <div className="text-center ">
            <button type="submit" className="bg-[#db0fa5] hover:bg-[#b168b3] text-white px-6 py-2 rounded-xl text-lg font-semibold transition-all duration-300 w-full cursor-pointer">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;