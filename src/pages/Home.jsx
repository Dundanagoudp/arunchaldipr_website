import React, { useEffect, useState } from 'react';
import '../pages/Home.css';


const movieImages = [
      "./b1.webp",
      "./B2.webp",
      "./b3.webp",
      "./b4.webp",
      "./b5.webp",
    ];

export const Home = () => {

      const [slideIndex, setSlideIndex] = useState(0);

      const createSlide = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % movieImages.length);
          };
        
          useEffect(() => {
            const interval = setInterval(createSlide, 8000);
            return () => clearInterval(interval);
          }, []);
        

    return (
        <div className="home-container">
            {/* Left Profile */}
            <div className="home-profile">
                <img src="/m1.webp" alt="Profile 1" className="home-profile-img" />
                <p className="home-profile-name">Shri Pema Khandu</p>
                <p className="home-profile-role">Hon'ble Chief Minister</p>
            </div>

            <div className='home-main-content'>
            <div className="carousel-container">
        <div className="home-image-container">
          <div className="slider" key={slideIndex}>
            <img src={movieImages[slideIndex]} alt="carousel slide" />
          </div>
        </div>
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
