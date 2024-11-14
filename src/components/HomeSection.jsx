import React from "react";
import "../components/HomeSection.css";

export const HomeSection = () => {
  return (
    <div className="container">
      <div className="box" onClick={() => window.location.href = '#'}>
        <div className="icon">📰</div>
        <p>Press Release</p>
      </div>
      <div className="box" onClick={() => window.location.href = '#'}>
        <div className="icon">📄</div>
        <p>Circulars</p>
      </div>
      <div className="box" onClick={() => window.location.href = '#'}>
        <div className="icon">📋</div>
        <p>Tenders</p>
      </div>
      <div className="box" onClick={() => window.location.href = '#'}>
        <div className="icon">📢</div>
        <p>Advertisements</p>
      </div>
    </div>
  );
};
