import React from "react";
import "../components/HomeSection3.css";

export const PublicationsSection = () => {
    return (
        <div className="publications-section">
            <h2>Publications</h2>
            <div className="publications-container">
                <div className="publication">
                    <img src="N1.png" alt="The Arunachal Information" />
                    <p>The Arunachal Information</p>
                </div>
                <div className="publication">
                    <img src="N3.webp" alt="Arunachal Review" />
                    <p>Arunachal Review</p>
                </div>
                <div className="publication horizontal-scroll">
                    <div className="scroll-item">
                        <img src="N2.png" alt="Development Highlights" />
                        <p>Development Highlights</p>
                    </div>
                    
                    {/* Add more scroll items as needed */}
                </div>
            </div>
        </div>
    );
};
