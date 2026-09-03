import { Link } from 'react-router-dom';


const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);


const IconHome = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IconInfo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const IconImage = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const IconStar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-champagne-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

export default function Footer() {

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 style={{ fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/assets/images/brandedlogowb.png" alt="Heaven Crest Logo" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              Heaven Crest — 127 Suites & Stays
            </h4>
            <p>A refined and comfortable stay designed around your needs, near VIT, Kandigai, Chennai.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconHome /> <Link to="/">Home</Link></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconInfo /> <Link to="/about">About Us</Link></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconImage /> <Link to="/gallery">Gallery</Link></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconStar /> <Link to="/experiences">Experiences</Link></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><IconCalendar /> <Link to="/contact">Book Now</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}><IconMapPin /> <span>76A, Kelambakkam - Vandalur Rd, Kandigai, Chennai, Tamil Nadu 600127</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><IconPhone /> <span>+91-9840766636</span></li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><IconMail /> <span>Heavencrest.127@gmail.com</span></li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', paddingBottom: '1.5rem', color: '#fcfbf8', fontSize: '0.9rem' }}>
          <strong>Developed by</strong> <a href="https://yaaletech.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-champagne-gold)', textDecoration: 'none', fontWeight: 'bold' }}>yaale technologies</a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Heaven Crest – 127 Suites & Stays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
