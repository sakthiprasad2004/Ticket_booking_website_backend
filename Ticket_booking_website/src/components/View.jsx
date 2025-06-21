import React, { useState } from 'react';
import axios from 'axios';

function View() {
  const [name, setName] = useState('');
  const [ticket, setTicket] = useState(null);

  const handleView = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/view', {
        params: { name }
      });
      setTicket(res.data);
    } catch (err) {
      alert('Ticket not found: ' + err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto my-6">
      <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">View Ticket</h2>
      <div className="flex gap-2">
        <input
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleView}
          className="bg-green-500 text-white px-4 py-3 rounded-xl hover:bg-green-600 transition"
        >
          View
        </button>
      </div>
      {ticket && (
        <div className="mt-4 bg-gray-100 p-4 rounded-xl">
          <pre className="whitespace-pre-wrap">{JSON.stringify(ticket, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default View;