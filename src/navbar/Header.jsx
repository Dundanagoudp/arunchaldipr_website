import React, { useState } from 'react';
import '../navbar/Header.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaHome, FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Header Top Strip */}
      <div className="top-strip">
        <span className="date-time">November 13, 2024 | 4:56 PM</span>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
          <select className="language-select">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <img src="/logo.png" alt="Department Logo" className="logo" />
        <div className="header-content">
          <h1>Department of Information and Public Relations<br /> Government of Arunachal Pradesh</h1>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Sidebar for Mobile Navigation */}
        <nav className={`nav-menu ${isSidebarOpen ? 'open' : ''}`}>
          <a href="#"><FaHome className="home-icon" /></a>
          <a href="#">About Us</a>
          <a href="#">Citizen Services</a>
          <a href="#">Directory</a>
          <a href="#">Tourism</a>
          <a href="#">Publications</a>
          <a href="#">Policies</a>
          <a href="#">Announcements</a>
          <a href="#">Media</a>
          <a href="#">Schemes</a>
          <a href="#">Contact Us</a>
        </nav>
      </header>
    </div>
  );
};


