import React from "react";
import "../components/RecentPhotos.css";

export const RecentPhotos = () => {
  return (
    <div className="recent-photos-section">
      <h2>Recent Photos</h2>
      <a href="#" className="gallery-link">Go to gallery</a>
      <div className="photo-grid">
        <div className="photo-item">
          <img src="/r1.webp" alt="Itanagar Prepares for Grand Silver Jubilee Celebration of Indigenous Culture" />
          <p>Itanagar Prepares for Grand Silver Jubilee Celebration of Indigenous Culture</p>
        </div>
        <div className="photo-item">
          <img src="/r2.webp" alt="Chief Minister Pema Khandu Welcomes 100 New MBBS Students at TRIHMS, Announces Expansive Healthcare Initiatives" />
          <p>Chief Minister Pema Khandu Welcomes 100 New MBBS Students at TRIHMS, Announces Expansive Healthcare Initiatives</p>
        </div>
        <div className="photo-item">
          <img src="/r3.webp" alt="Deputy Chief Minister Chowna Mein Reviews Development of Parshuram Kund Ahead of 2025 Mela" />
          <p>Deputy Chief Minister Chowna Mein Reviews Development of Parshuram Kund Ahead of 2025 Mela</p>
        </div>
        <div className="photo-item">
          <img src="/r4.webp" alt="Chief Minister Pema Khandu Hosts Manipur CM N. Biren Singh at Historic Urgyelling Gonpa" />
          <p>Chief Minister Pema Khandu Hosts Manipur CM N. Biren Singh at Historic Urgyelling Gonpa</p>
        </div>
      </div>
    </div>
  );
};
