import React from "react";
import "../pages/Contact.css";

export const Contact = () => {
    return (
        <div className="contact">
            <nav className="breadcrumb">
                <a href="/">Home</a> » <a href="#">Contact</a>
            </nav>    

            <section className="contact-section">
                <h1>Contact Us</h1>

                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Get In Touch With Us</h2>
                        <p>For any inquiries or information, please reach out to us at the following address:</p>
                        
                        <div className="address">
                            <p><strong>Directorate of Information and Public Relations</strong></p>
                            <p>Sochna Bhawan, Papu Nallah, Naharlagun, 791110</p>
                        </div>

                        <div className="email">
                            <p><span>&#9993;</span> Mail: <a href="mailto:diprarunx@gmail.com">diprarunx@gmail.com</a></p>
                            <p><span>&#9993;</span> Mail: <a href="mailto:dipr_arun@rediffmail.com">dipr_arun@rediffmail.com</a></p>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5450891332496!2d91.3913247148143!3d27.087588083032725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7af4df40c02a6e0a!2sDirectorate%20of%20Information%20and%20Public%20Relations!5e0!3m2!1sen!2sin!4v1609325042748!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            aria-hidden="false" 
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>

                <div className="also-check">
                    <h3>Also Check</h3>
                    <ul>
                        <li><a href="#">Contact Details of COUNCIL OF MINISTERS</a></li>
                        <li><a href="#">Contact Directory of Key Government Officials</a></li>
                        <li><a href="#">Advisors to Hon’ble Ministers</a></li>
                    </ul>
                </div>
            </section>
        </div>
    );
};
