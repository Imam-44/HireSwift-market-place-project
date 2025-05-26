import React, { useContext } from 'react';
import { FaCalendarAlt, FaUserTie, FaDollarSign, FaTasks } from "react-icons/fa";
import Swal from 'sweetalert2';
import { AuthContext } from '../context/authContext';

const DetailsCard = ({ task, setBidChanged }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    category,
    deadline,
    budget,
    userName,
    userEmail,
    description,
  } = task || {};

  const isOwner = user?.email === userEmail; 

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const bid = {
      taskId: _id,
      bidderEmail: user.email,
      bidderName: user.displayName,
      price: parseInt(form.price.value),
      message: form.message.value,
      createdAt: new Date(),
    };

    try {
      const res = await fetch('https://assignment-10-server-one-sigma.vercel.app/bids', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bid),
      });

      const data = await res.json(); 

      if (data.insertedId) {
        Swal.fire('Success!', 'Bid placed successfully', 'success');
        form.reset();
        setBidChanged(prev => !prev);
      }
    } catch (err) {
      Swal.fire('Error', 'Something went wrong!', 'error');
    }
  };

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

        {/* Bid Form Section */}
        {user ? (
          isOwner ? (
            <p className="mt-6 text-yellow-500 font-medium">
              You cannot bid on your own task.
            </p>
          ) : (
            <form
              onSubmit={handleBidSubmit}
              className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Place a Bid</h3>

              <input
                type="number"
                name="price"
                placeholder="Your Bid Price"
                required
                className="input input-bordered w-full"
              />

              <textarea
                name="message"
                placeholder="Write your message here..."
                required
                className="textarea textarea-bordered w-full"
              ></textarea>

              <button type="submit" className="btn btn-success w-full">
                Submit Bid
              </button>
            </form>
          )
        ) : (
          <p className="mt-6 text-red-500 font-medium">
            You must be logged in to place a bid.
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
