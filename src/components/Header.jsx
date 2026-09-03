import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDir && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDir(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      setIsScrolled(scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDir]);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-container">
          <div className="header-top">
            <div className="logo-container">
              <Link to="/">
                <img src="/assets/images/brandedlogowb.png" alt="Heaven Crest - 127 Suites & Stays Logo" className="logo-img" id="brand-logo" />
              </Link>
            </div>

            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              aria-label="Toggle Navigation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>

          <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink></li>
              <li><NavLink to="/rooms" onClick={() => setIsMobileMenuOpen(false)}>Rooms & Suites</NavLink></li>
              <li><NavLink to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</NavLink></li>
              <li><NavLink to="/experiences" onClick={() => setIsMobileMenuOpen(false)}>Experiences</NavLink></li>
              </ul>
            <Link to="/contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Book Now</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
