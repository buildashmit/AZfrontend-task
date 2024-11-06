import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [activeTab, setActiveTab] = useState('');

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar setActiveTab={setActiveTab} />
        {activeTab === 'Upskill' && <MainContent />}
      </div>
    </div>
  );
}

export default App;