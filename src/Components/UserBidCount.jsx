import { useEffect, useState } from "react";

const UserBidCount = ({ email, bidChanged }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!email) return;

    setLoading(true);
    setError(null);

    fetch(`https://assignment-10-server-one-sigma.vercel.app/user-bids-count?email=${email}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCount(data.count);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [email, bidChanged]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 bg-white shadow-md rounded-md text-center">
      <h2 className="text-xl font-bold text-gray-800">Your Total Bids</h2>
      <p className="text-3xl text-blue-600 mt-2">{count}</p>
    </div>
  );
};

export default UserBidCount;
