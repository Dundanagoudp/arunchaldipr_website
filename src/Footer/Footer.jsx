import React from 'react';
import '../Footer/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About State</a></li>
            <li><a href="/whowho">Who's Who</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Citizen Services</h4>
          <ul>
            <li><a href="#">e - ILP</a></li>
            <li><a href="#">e - Service</a></li>
            <li><a href="#">APST Bus Service</a></li>
            <li><a href="#">Application Forms</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>State Links</h4>
          <ul>
            <li><a href="#">Governor of Arunachal Pradesh</a></li>
            <li><a href="#">Government of Arunachal Pradesh</a></li>
            <li><a href="#">Department of Tourism</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>Directorate of Information & Public Relations,<br />Soochna Bhawan, Papu Nahllah, Naharlagun - 791110</li>
            <li><a href="mailto:dipr_arun@rediffmail.com">dipr_arun@rediffmail.com</a></li>
            <li><a href="mailto:diprarunx@gmail.com">diprarunx@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Total Visitors</h4>
          <div className="visitor-counter">87915</div>
        </div>
      </div>
      <div className="footer-bottom">
        Content Owned, Maintained and Updated by Government of Arunachal Pradesh. For any query, please contact concerned departments.
      </div>
    </footer>
  );
};
