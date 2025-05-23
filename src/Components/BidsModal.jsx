const BidsModal = ({ bids, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500">
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-pink-600">Bids on This Task</h2>
        {bids.length === 0 ? (
          <p className="text-center text-gray-600">No bids yet.</p>
        ) : (
          <table className="w-full table-auto border">
            <thead>
              <tr className="bg-pink-100 text-left">
                <th className="p-2">Bidder</th>
                <th className="p-2">Email</th>
                <th className="p-2">Price</th>
                <th className="p-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">{bid.bidderName}</td>
                  <td className="p-2">{bid.bidderEmail}</td>
                  <td className="p-2">${bid.price}</td>
                  <td className="p-2">{bid.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BidsModal;
