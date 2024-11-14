import React, { useState, useEffect } from 'react';
import '../navbar/Header.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaHome, FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Update the date and time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Updates every second

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format the date and time as "November 13, 2024 | 4:56 PM"
  const formatDateTime = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleString('en-US', options);
  };

  return (
    <div>
      {/* Header Top Strip */}
      <div className="top-strip">
        <span className="date-time">{formatDateTime(currentDateTime)}</span>
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
        <a href="/" className="logo-link">
          <img src="/logo.png" alt="Department Logo" className="logo" />
        </a>
        <div className="header-content">
          <h1>Department of Information and Public Relations<br /> Government of Arunachal Pradesh</h1>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Sidebar for Mobile Navigation */}
        <nav className={`nav-menu ${isSidebarOpen ? 'open' : ''}`}>
          <a href="/"><FaHome className="home-icon" /></a>
          <a href="/about">About Us</a>
          <a href="/whowho">Who’s Who</a>
          <a href="#">Directory</a>
          <a href="#">Tourism</a>
          <a href="#">Publications</a>
          <a href="#">Policies</a>
          <a href="#">Announcements</a>
          <a href="/media">Media</a>
          <a href="#">Schemes</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>
    </div>
  );
};
