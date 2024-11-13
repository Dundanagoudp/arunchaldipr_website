import React from 'react';
import '../navbar/Header.css';  

export const Header = () => {
  return (
    <div>
      {/* Header Top Strip */}
      <div className="top-strip">
        <span className="date-time">November 13, 2024 | 4:56 PM</span>
        <div className="social-icons">
          <a href="#"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="youtube-icon.png" alt="YouTube" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" /></a>
        </div>
        <select className="language-select">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <img src="department-logo.png" alt="Department Logo" className="logo" />
        <div className="header-content">
          <h1>Department of Information and Public Relations<br /> Government of Arunachal Pradesh</h1>
        </div>
        <nav className="nav-menu">
          <a href="#"><img src="home-icon.png" alt="Home" className="home-icon" /></a>
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
}

