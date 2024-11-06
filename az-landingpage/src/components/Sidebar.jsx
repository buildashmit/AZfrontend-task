import React, { useState } from 'react';
import './Sidebar.css';
import { FaTachometerAlt, FaBook, FaComments, FaChartLine, FaTrophy, FaMedal } from 'react-icons/fa';
import { BiGridAlt } from "react-icons/bi";


const Sidebar = ({ setActiveTab }) => {
  const [isAlgoZenithOpen, setIsAlgoZenithOpen] = useState(false);
  const [activeSidebarTab, setActiveSidebarTab] = useState('');


  const toggleAlgoZenithMenu = () => {
    setIsAlgoZenithOpen(!isAlgoZenithOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveSidebarTab(tab);
  };

  return (
    <aside className="sidebar">
      <ul>
        <li className="menu-item" onClick={toggleAlgoZenithMenu}>
          <div className="hamburger-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <strong>AlgoZenith</strong>
        </li>
        {isAlgoZenithOpen && (
          <ul className="submenu">
            <li className={activeSidebarTab === 'Dashboard' ? 'active' : ''} onClick={() => handleTabClick('Dashboard')}>
              <BiGridAlt className="submenu-icon" /> Dashboard
            </li>
            <li className={activeSidebarTab === 'Learn' ? 'active' : ''} onClick={() => handleTabClick('Learn')}>
              <FaBook className="submenu-icon" /> Learn
            </li>
            <li className={activeSidebarTab === 'Forums' ? 'active' : ''} onClick={() => handleTabClick('Forums')}>
              <FaComments className="submenu-icon" /> Forums
            </li>
            <li className={activeSidebarTab === 'Upskill' ? 'active' : ''} onClick={() => handleTabClick('Upskill')}>
              <FaChartLine className="submenu-icon" /> Upskill
            </li>
            <li className={activeSidebarTab === 'Contest' ? 'active' : ''} onClick={() => handleTabClick('Contest')}>
              <FaTrophy className="submenu-icon" /> Contest
            </li>
            <li className={activeSidebarTab === 'Leaderboard' ? 'active' : ''} onClick={() => handleTabClick('Leaderboard')}>
              <FaMedal className="submenu-icon" /> Leaderboard
            </li>
          </ul>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;