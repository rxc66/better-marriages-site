import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Better Marriages Georgia</h3>
            <p>Real couples. Real connection. Real support.<br />
            Reach out — we'd love to help you strengthen and enrich your marriage.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/BetterMarriagesGA" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#events">Events</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@bettermarriagesga.org">info@bettermarriagesga.org</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Georgia, United States</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Stay updated with our latest news and events.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Better Marriages Georgia. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 