import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAll = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/viewall")
      .then(response => setTickets(response.data))
      .catch(err => {
        setError("Could not fetch tickets");
        console.error(err);
      });
  }, []);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-6xl mx-auto my-6">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">All Tickets</h2>
      
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {tickets.length === 0 ? (
        <p className="text-center text-gray-500">No tickets found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-blue-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 border">Name</th>
                <th className="px-6 py-3 border">From</th>
                <th className="px-6 py-3 border">To</th>
                <th className="px-6 py-3 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, idx) => (
                <tr key={idx} className="text-center hover:bg-gray-50">
                  <td className="px-6 py-2 border">{ticket.name}</td>
                  <td className="px-6 py-2 border">{ticket.fromStation}</td>
                  <td className="px-6 py-2 border">{ticket.toStation}</td>
                  <td className="px-6 py-2 border">{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewAll;