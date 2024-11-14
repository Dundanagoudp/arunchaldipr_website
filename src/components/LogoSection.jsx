import "../components/LogoSection.css"; // Import the CSS file

export const LogoSection = () => {
  return (
    <div className="logo-section-container">
      <div className="logo-section-sub-title">
        <a href="#">Arunachal Pradesh</a>
      </div>
      <div className="logo-section-title">Important Links</div>
      <div className="logo-section-carousel">
        <div className="logo-section-carousel-track">
          <div className="logo-section-carousel-item">
            <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
              <img src="/l1.webp" alt="Logo 1" />
            </a>
          </div>
          <div className="logo-section-carousel-item">
            <a href="https://www.india.gov.in/" target="_blank" rel="noopener noreferrer">
              <img src="/l2.webp" alt="Logo 2" />
            </a>
          </div>
          <div className="logo-section-carousel-item">
            <a href="https://apssb.nic.in/Index/institute_home/ins/RECINS001" target="_blank" rel="noopener noreferrer">
              <img src="/l3.webp" alt="Logo 3" />
            </a>
          </div>
          <div className="logo-section-carousel-item">
            <a href="https://www.digilocker.gov.in/" target="_blank" rel="noopener noreferrer">
              <img src="/l4.webp" alt="Logo 4" />
            </a>
          </div>
          <div className="logo-section-carousel-item">
            <a href="https://appsc.gov.in/Index/institute_home/ins/RECINS001" target="_blank" rel="noopener noreferrer">
              <img src="/l5.webp" alt="Logo 5" />
            </a>
          </div>
          {/* Repeat items for the seamless scrolling effect */}
          <div className="logo-section-carousel-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/l6.webp" alt="Logo 1" />
            </a>
          </div>
          <div className="logo-section-carousel-item">
            <a href="https://arunachaltourism.com/" target="_blank" rel="noopener noreferrer">
              <img src="/l7.webp" alt="Logo 2" />
            </a>
          </div>
          <div className="logo-section-carousel-item">
            <a href="https://ditc.arunachal.gov.in/" target="_blank" rel="noopener noreferrer">
              <img src="/l8.webp" alt="Logo 3" />
            </a>
          </div>
          <div className="logo-section-carousel-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/l1.webp" alt="Logo 4" />
            </a>
          </div>
          <div className="logo-section-carousel-item">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/l2.webp" alt="Logo 5" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};
