import React from "react";
import "../components/OnlineServices.css"; // Make sure to import the CSS file

export const OnlineServices = () => {
  return (
    <div>
      <section className="online-services">
        <h2>Useful Govt Services</h2>
        <h3>Online Services</h3>
        <div className="service-cards">
          {/* Card 1 */}
          <a href="https://cmeseva.arunachal.gov.in/" className="card">
            <div className="card-content">
              <img src="/O1.webp" alt="CM Arunachal e-Seva" />
              <h4>CM Arunachal e-seva Service</h4>
              <p>Experience the ease of online services with CM Arunachal e-Seva.</p>
              <span>Know More →</span>
            </div>
          </a>
          {/* Card 2 */}
          <a href="https://arunachaltenders.gov.in/" className="card">
            <div className="card-content">
              <img src="/O2.webp" alt="e-Procurement System" />
              <h4>E- Procurement System Service</h4>
              <p>The eProcurement System allows tenders to be downloaded and bids submitted online.</p>
              <span>Know More →</span>
            </div>
          </a>
          {/* Card 3 */}
          <a href="https://nesda.centralindia.cloudapp.azure.com/#/citizen-survey" className="card">
            <div className="card-content">
              <img src="/O4.webp" alt="National e-Governance Service" />
              <h4>National e-Governance Service</h4>
              <p>Citizens survey on e-Governance services implementation in Arunachal Pradesh.</p>
              <span>Know More →</span>
            </div>
          </a>
          {/* Card 4 */}
          <a href="https://eservice.arunachal.gov.in/" className="card">
            <div className="card-content">
              <img src="/O5.webp" alt="e-VIGILANCE Service" />
              <h4>e-VIGILANCE Service</h4>
              <p>Clearance Service in Arunachal Pradesh for Government Officials.</p>
              <span>Know More →</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
