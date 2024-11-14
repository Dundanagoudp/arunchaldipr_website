import React from "react";
import "../components/HomeSection.css";
import { PublicationsSection } from "./HomeSection3";
import { OnlineServices } from "./OnlineServices";
import { RecentPhotos } from "./RecentPhotos";

export const HomeSection = () => {
  return (
    <div>
      {/* First Section */}
      <div className="container">
        <div className="box" onClick={() => (window.location.href = "#")}>
          <div className="icon">📰</div>
          <p>Press Release</p>
        </div>
        <div className="box" onClick={() => (window.location.href = "#")}>
          <div className="icon">📄</div>
          <p>Circulars</p>
        </div>
        <div className="box" onClick={() => (window.location.href = "#")}>
          <div className="icon">📋</div>
          <p>Tenders</p>
        </div>
        <div className="box" onClick={() => (window.location.href = "#")}>
          <div className="icon">📢</div>
          <p>Advertisements</p>
        </div>
      </div>

      {/* Second Section: Publications */}
      <div className="publications-section">
       <PublicationsSection/>
      </div>
      <div className="online-services1">
       <OnlineServices/>
      </div>
      <div className="RecentPhotos1">
       <RecentPhotos/>
      </div>
    </div>
  );
};
