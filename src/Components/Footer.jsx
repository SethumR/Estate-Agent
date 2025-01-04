import './Footer.css';
import { FaFacebook, FaInstagram, FaGlobe, FaMapPin, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Link } from "react-router-dom";  

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Left Column */}
          <div className="space-y-6 sm:ml-10">
            <h2 className="footer-title">LuxuryEstates</h2>
            <p className="footer-description">
              LuxuryEstates is a premier real estate company offering a curated selection of high-end residential, 
              commercial, and vacation properties. With a focus on quality and elegance, it provides an exclusive experience for clients seeking luxurious living spaces.
            </p>
            <div className="footer-social-links">
              <Link href="#" className="footer-social-link">
                <FaFacebook className="footer-icon" />
              </Link>
              <Link href="#" className="footer-social-link">
                <FaInstagram className="footer-icon" />
              </Link>
              <Link href="#" className="footer-social-link">
                <FaGlobe className="footer-icon" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-info">
            <h2 className="footer-title mb-4">Contact Info</h2>
            <div className="space-y-4">
              <div className="contact-details">
                <div className="contact-icon-wrapper">
                  <FaMapPin className="footer-icon" />
                </div>
                <div>
                  <p className="contact-text">Address:</p>
                  <p className="contact-detail">Colombo, Sri Lanka</p>
                </div>
              </div>
              <div className="contact-details">
                <div className="contact-icon-wrapper">
                  <FaPhone className="footer-icon" />
                </div>
                <div>
                  <p className="contact-text">Mobile:</p>
                  <p className="contact-detail">+94 756413574</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />
        <div className="footer-copyright">
          <p>Copyright © 2025 LuxuryEstates</p>
        </div>
      </div>
    </footer>
  );
}
