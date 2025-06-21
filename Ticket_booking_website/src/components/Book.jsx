import React, { useState } from 'react';
import axios from 'axios';

function Book() {
  const [ticket, setTicket] = useState({
    name: '',
    fromStation: '',
    toStation: '',
    date: ''
  });

  const handleChange = e => setTicket({ ...ticket, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/book', ticket);
      alert(res.data.message);
    } catch (err) {
      alert('Booking failed: ' + err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg space-y-5">
        <h2 className="text-3xl font-bold text-center text-indigo-700">Book a Ticket</h2>

        {['name', 'fromStation', 'toStation'].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field === 'fromStation' ? 'From' : field === 'toStation' ? 'To' : 'Name'}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        ))}

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Book
        </button>
      </form>
    </div>
  );
}

export default Book;