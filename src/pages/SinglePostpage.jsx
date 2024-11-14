import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../pages/SinglePostPage.css";

export const SinglePostPage = () => {
  return (
    <div className="SinglePostPage">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <a href="/">Home</a> » <a href="#">Post page</a>
      </nav>

      {/* Blog Container */}
      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <h1>Arunachal Literature Festival 2024 – Official Booklet Released!</h1>
          <p>November 12, 2024 | gully78globalinnovativeservices@gmail.com</p>
        </div>

        {/* Featured Image */}
        <img
          src="/s1.webp"
          alt="Arunachal Literature Festival 2024"
          className="featured-image"
        />

        {/* Content */}
        <div className="content">
          <p>
            Get ready for an immersive literary experience! The official booklet
            for the Arunachal Literature Festival 2024 is now available, filled
            with details on the session plan, speaker profiles, and festival
            highlights. Discover the cultural richness and literary vibrancy
            that Arunachal Pradesh has to offer.
          </p>
          <p>📄 Access the full booklet here: Arunachal Lit Fest 2024 Booklet</p>
          <p>
            Join us to celebrate storytelling, poetry, and discussions that
            bridge communities and ideas. Mark your calendars and prepare for an
            unforgettable journey into literature and culture! 📚
          </p>
          <p>
            #ArunachalLitFest #LiteratureFestival #ALF2024 #CulturalCelebration
            #Storytelling #ArunachalPradesh
          </p>
        </div>

        {/* Share Buttons */}
        <div className="share-buttons">
          <a href="#" title="Share on Facebook">
            <FaFacebook className="share-icon" />
          </a>
          <a href="#" title="Share on Twitter">
            <FaTwitter className="share-icon" />
          </a>
          <a href="#" title="Share on Instagram">
            <FaInstagram className="share-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
