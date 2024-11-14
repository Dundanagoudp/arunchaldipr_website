import React from 'react';
import "../components/Homecards.css";

export const Homecards = () => {
    return (
        <div className="homecards-container">
            {/* Left Section: Festivals */}
            <div className="homecards-left-section">
                <h2>Festivals</h2>
                <div className="homecards-festivals-container">
                    <div className="homecards-festival-card">
                        <img src="./s1.webp" alt="Festival Image" />
                        <div className="homecards-festival-content">
                            <h3>CHILDREN'S CORNER</h3>
                            <p>Itanagar, November 13-15, 2024 Parents, get ready to spark your child’s imagination as the Arunachal Literature Festival introduces an enchanting new feature.</p>
                            <a href="#">View More →</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: News and Events */}
            <div className="homecards-middle-section">
                <h2>Government News and Events</h2>
                <h3>Daily News Updates</h3>
                <div className="homecards-news-container">
                    <div className="homecards-news-item">
                        <p>Chief Minister Pema Khandu Hosts Manipur CM N. Biren Singh at Historic Urgyelling Gonpa</p>
                        <a href="#">Read More »</a>
                    </div>
                    <div className="homecards-news-item">
                        <p>CM Pema Khandu Inaugurates Kameng Culture and Heritage Museum in Nyukmadung</p>
                        <a href="#">Read More »</a>
                    </div>
                    <div className="homecards-news-item">
                        <p>CM Pema Khandu Inaugurates Kameng Culture and Heritage Museum in Nyukmadung</p>
                        <a href="#">Read More »</a>
                    </div>
                    <div className="homecards-news-item">
                        <p>CM Pema Khandu Inaugurates Kameng Culture and Heritage Museum in Nyukmadung</p>
                        <a href="#">Read More »</a>
                    </div>
                    <div className="homecards-news-item">
                        <p>Over 200 girls performed a dance choreographed to a song by Bodong Yirang, sung by KGBV teachers.</p>
                        <a href="#">Read More »</a>
                    </div>
                </div>
            </div>

            {/* Right Section: Links */}
            <div className="homecards-right-section">
                <h2>State Government Websites</h2>
                <ul>
                    <li>Departments</li>
                    <li>Directorates</li>
                    <li>Organizations & Boards List</li>
                    <li>Universities</li>
                    <li>Tenders</li>
                </ul>
                <h2>Documents for Citizens</h2>
                <ul>
                    <li>Government Orders</li>
                    <li>Gazettes</li>
                </ul>
            </div>
        </div>
    );
};