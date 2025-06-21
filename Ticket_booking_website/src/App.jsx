import React , { useState } from 'react';
import Book from './components/Book';
import Cancel from './components/Cancel';
import View from './components/View';
import ViewAll from './components/ViewAll';

const App = () => {
  const [activeTab, setActiveTab] = useState('book');

  const renderTab = () => {
    switch (activeTab) {
      case 'book':
        return <Book />;
      case 'cancel':
        return <Cancel />;
      case 'view':
        return <View />;
      case 'viewAll':
        return <ViewAll />;
      default:
        return <Book />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">🎫 Ticket Booking System</h1>
          <nav className="flex space-x-4">
            <button
              onClick={() => setActiveTab('book')}
              className={`px-4 py-2 rounded-xl font-medium ${
                activeTab === 'book'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-indigo-100'
              }`}
            >
              Book
            </button>
            <button
              onClick={() => setActiveTab('cancel')}
              className={`px-4 py-2 rounded-xl font-medium ${
                activeTab === 'cancel'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-indigo-100'
              }`}
            >
              Cancel
            </button>
            <button
              onClick={() => setActiveTab('view')}
              className={`px-4 py-2 rounded-xl font-medium ${
                activeTab === 'view'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-indigo-100'
              }`}
            >
              View
            </button>
            <button
              onClick={() => setActiveTab('viewAll')}
              className={`px-4 py-2 rounded-xl font-medium ${
                activeTab === 'viewAll'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-indigo-100'
              }`}
            >
              View All
            </button>
          </nav>
        </div>
      </header>

      <main className="p-6">{renderTab()}</main>
    </div>
  );
};

export default App;