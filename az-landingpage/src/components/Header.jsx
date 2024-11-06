import React from 'react';
import './Header.css';
import { FaBell, FaCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="head">
        <header className="header">
        <div className="header-content">
          <FaBell className="notification-icon" />
          <FaCircle className="profile-icon" />
        </div>
    </header>
    </div>
  
  );
};

export default Header;