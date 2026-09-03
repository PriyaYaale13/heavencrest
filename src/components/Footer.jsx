import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 style={{ fontFamily: 'var(--font-heading)' }}>Heaven Crest – 127 Suites & Stays</h4>
            <p>A refined and comfortable stay designed around your needs, near VIT, Kandigai, Chennai.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/experiences">Experiences</Link></li>
              <li><Link to="/contact">Book Now</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li>76A, Kelambakkam - Vandalur Rd, Kandigai, Chennai, Tamil Nadu 600127</li>
              <li>+91-9840766636</li>
              <li>Heavencrest.127@gmail.com</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingBottom: '1.5rem', color: 'var(--color-champagne-gold)', fontSize: '0.9rem' }}>
          Developed by <a href="https://yaaletech.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'underline' }}>yaale technologies</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Heaven Crest – 127 Suites & Stays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
