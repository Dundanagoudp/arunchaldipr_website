import React from 'react';
import '../pages/Home.css';

export const Home = () => {
    return (
        <div className="home-container">
            {/* Left Profile */}
            <div className="home-profile">
                <img src="/m1.webp" alt="Profile 1" className="home-profile-img" />
                <p className="home-profile-name">Shri Pema Khandu</p>
                <p className="home-profile-role">Hon'ble Chief Minister</p>
            </div>

            {/* Main Image */}
            <div className="home-main-content">
                <div className="home-image-container">
                    <img src="https://via.placeholder.com/600x300" alt="Event Image" className="home-event-img" />
                    
                </div>
            </div>

            {/* Right Profile */}
            <div className="home-profile">
                <img src="/m2.webp" alt="Profile 2" className="home-profile-img" />
                <p className="home-profile-name">Shri Nyato Dukam</p>
                <p className="home-profile-role">Minister of IPR</p>
            </div>
        </div>
    );
};
