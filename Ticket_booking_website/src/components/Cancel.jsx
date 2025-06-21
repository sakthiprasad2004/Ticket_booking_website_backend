import React, { useState } from 'react';
import axios from 'axios';

const Cancel = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleCancel = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/cancel', name);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred while canceling.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto my-6">
      <h2 className="text-2xl font-semibold text-red-600 mb-4 text-center">Cancel Ticket</h2>
      <form onSubmit={handleCancel} className="space-y-4">
        <input
          type="text"
          placeholder="Enter passenger name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition"
        >
          Cancel
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default Cancel;