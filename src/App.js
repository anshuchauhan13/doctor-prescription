import React from 'react';
import Sidebar from './components/Sidebar.js';
import Dashboard from './components/Dashboard.js';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      {/* Main content */}
      <Dashboard/>
    </div>
  );
};

export default App;