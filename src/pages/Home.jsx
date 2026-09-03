import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ExperiencesCarousel from '../components/ExperiencesCarousel';
import HeroSlider from '../components/HeroSlider';
import { roomsData } from '../data/rooms';

import Separator from '../components/Separator';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      {/* HERO BANNER */}
      <section className="hero-banner" style={{ height: '100vh', position: 'relative' }}>
        <HeroSlider />
        <div className="home-center-logo">
          <img src="/assets/images/brandedlogowb.png" alt="Heaven Crest Logo" style={{ width: '250px' }} />
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-in-up delay-100">
              <h1 className="heading-large">Welcome to Heaven Crest - 127 Suites & Stays</h1>
              <Separator icon="★" />
              <h2 className="subheading" style={{ marginBottom: '2rem' }}>A refined stay where comfort, elegance, and effortless hospitality come together.</h2>
              <p style={{ fontWeight: '700', color: 'var(--color-champagne-gold)' }}>Welcome to Heaven Crest - 127 Suites & Stays, a thoughtfully designed destination created for guests who value comfort, convenience, privacy, and a warm hospitality experience. Whether you are visiting for business, leisure, education, family travel, or a short getaway, our suites are designed to give you a peaceful and comfortable stay.</p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">Book Now</Link>
                <Link to="/about" className="btn btn-secondary">Explore Our Stay</Link>
              </div>
            </div>
            <div className="hero-image-wrapper fade-in-up delay-300">
              <img src="/assets/images/enterance.png" alt="Entrance of Heaven Crest - 127 Suites & Stays" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section fade-in-up" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container text-center">
<h2 className="heading-medium">Stay Somewhere Beautiful. Feel Completely at Home.</h2>
          <Separator icon="★" />
          <p style={{ maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            At Heaven Crest - 127 Suites & Stays, every detail is designed around your comfort. From thoughtfully prepared rooms to essential everyday services, we create a stay that feels effortless, welcoming, and refined.
          </p>
          
          <div className="features-grid pro-cards-grid">
            
            <div className="pro-card fade-in-up delay-100">
              <div className="pro-card-image-wrapper">
                <img src="/assets/images/bedroom.png" alt="Comfort Background" className="pro-bg-img" />
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                  <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                  <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
                </svg>
                <div className="pro-card-icon-wrapper">
                  <img src="/assets/images/comfort_3d_icon.jpg" alt="Comfort" />
                </div>
              </div>
              <div className="pro-card-content">
                <h3>Comfort</h3>
                <Separator icon="★" color="var(--color-champagne-gold)" />
                <p>Relax in thoughtfully designed spaces created for a peaceful stay.</p>
              </div>
            </div>
            
            <div className="pro-card fade-in-up delay-200">
              <div className="pro-card-image-wrapper">
                <img src="/assets/images/receptionwithhall.jpg" alt="Convenience Background" className="pro-bg-img" />
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                  <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                  <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
                </svg>
                <div className="pro-card-icon-wrapper">
                  <img src="/assets/images/convenience_3d_icon.jpg" alt="Convenience" />
                </div>
              </div>
              <div className="pro-card-content">
                <h3>Convenience</h3>
                <Separator icon="★" color="var(--color-champagne-gold)" />
                <p>Enjoy essential services and facilities that make your visit simple and comfortable.</p>
              </div>
            </div>
            
            <div className="pro-card fade-in-up delay-300">
              <div className="pro-card-image-wrapper">
                <img src="/assets/images/teacups.jpg" alt="Hospitality Background" className="pro-bg-img" />
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                  <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                  <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
                </svg>
                <div className="pro-card-icon-wrapper">
                  <img src="/assets/images/hospitality_3d_icon.jpg" alt="Hospitality" />
                </div>
              </div>
              <div className="pro-card-content">
                <h3>Hospitality</h3>
                <Separator icon="★" color="var(--color-champagne-gold)" />
                <p>Experience warm, attentive hospitality throughout your stay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section fade-in-up">
        <div className="container text-center">
<h2 className="heading-medium">Everything You Need for a Comfortable Stay</h2>
          <Separator icon="★" />
          <div className="services-grid pro-cards-grid" style={{ marginTop: '3rem' }}>
            
            <div className="pro-card fade-in-up delay-100">
              <div className="pro-card-image-wrapper">
                <img src="/assets/images/withlaptop.jpg" alt="Wi-Fi Background" className="pro-bg-img" />
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                  <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                  <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
                </svg>
                <div className="pro-card-icon-wrapper">
                  <img src="/assets/images/wifi_3d_icon.jpg" alt="Free Wi-Fi" />
                </div>
              </div>
              <div className="pro-card-content">
                <h3>Free Wi-Fi</h3>
                <Separator icon="★" color="var(--color-champagne-gold)" />
                <p>Stay connected with complimentary Wi-Fi throughout your stay.</p>
              </div>
            </div>
            
            <div className="pro-card fade-in-up delay-200">
              <div className="pro-card-image-wrapper">
                <img src="/assets/images/eatingtable.jpg" alt="Breakfast Background" className="pro-bg-img" />
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                  <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                  <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
                </svg>
                <div className="pro-card-icon-wrapper">
                  <img src="/assets/images/breakfast_3d_icon.jpg" alt="Free Breakfast" />
                </div>
              </div>
              <div className="pro-card-content">
                <h3>Free Breakfast</h3>
                <Separator icon="★" color="var(--color-champagne-gold)" />
                <p>Begin your day with a complimentary breakfast prepared for your convenience.</p>
              </div>
            </div>
            
            <div className="pro-card fade-in-up delay-300">
              <div className="pro-card-image-wrapper">
                <img src="/assets/images/outdoor.png" alt="Parking Background" className="pro-bg-img" />
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                  <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                  <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
                </svg>
                <div className="pro-card-icon-wrapper">
                  <img src="/assets/images/parking_3d_icon.jpg" alt="Free Parking" />
                </div>
              </div>
              <div className="pro-card-content">
                <h3>Free Parking</h3>
                <Separator icon="★" color="var(--color-champagne-gold)" />
                <p>Enjoy convenient parking facilities during your visit.</p>
              </div>
            </div>
            
            <div className="pro-card fade-in-up delay-100">
              <div className="pro-card-image-wrapper">
                <img src="/assets/images/acroomwithtv.jpg" alt="AC Background" className="pro-bg-img" />
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                  <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                  <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
                </svg>
                <div className="pro-card-icon-wrapper">
                  <img src="/assets/images/ac_3d_icon.jpg" alt="Air-Conditioned Rooms" />
                </div>
              </div>
              <div className="pro-card-content">
                <h3>Air-Conditioned Rooms</h3>
                <Separator icon="★" color="var(--color-champagne-gold)" />
                <p>Relax in comfortable, climate-controlled rooms designed for a pleasant stay.</p>
              </div>
            </div>
            
            <div className="pro-card fade-in-up delay-200">
              <div className="pro-card-image-wrapper">
                <img src="/assets/images/washroom.jpg" alt="Laundry Background" className="pro-bg-img" />
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                  <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                  <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
                </svg>
                <div className="pro-card-icon-wrapper">
                  <img src="/assets/images/laundry_3d_icon.jpg" alt="Laundry Service" />
                </div>
              </div>
              <div className="pro-card-content">
                <h3>Laundry Service</h3>
                <Separator icon="★" color="var(--color-champagne-gold)" />
                <p>Convenient laundry assistance to make longer stays easier.</p>
              </div>
            </div>
            
            <div className="pro-card fade-in-up delay-300">
              <div className="pro-card-image-wrapper">
                <img src="/assets/images/kitchen_with_fruits.jpg" alt="Room Service Background" className="pro-bg-img" />
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                  <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                  <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
                </svg>
                <div className="pro-card-icon-wrapper">
                  <img src="/assets/images/room_service_3d_icon.jpg" alt="Room Service" />
                </div>
              </div>
              <div className="pro-card-content">
                <h3>Room Service</h3>
                <Separator icon="★" color="var(--color-champagne-gold)" />
                <p>Enjoy convenient service from the comfort and privacy of your room.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* EXPERIENCES SECTION */}
      <section className="fade-in-up" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
        <div className="container text-center">
<h2 className="heading-medium">An Experience Designed Around You</h2>
          <Separator icon="★" />
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Whether you are here for work, education, business, family, travel, or simply a peaceful break, Heaven Crest - 127 is designed to adapt to your needs. We create comfortable experiences for different types of guests, helping you enjoy your stay without unnecessary stress or complications.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <ExperiencesCarousel />
          </div>

          <div style={{ marginTop: '3rem' }}>
            <Link to="/experiences" className="btn btn-primary" style={{ backgroundColor: 'var(--color-champagne-gold)', borderColor: 'var(--color-champagne-gold)' }}>DISCOVER YOUR EXPERIENCE</Link>
          </div>
        </div>
      </section>

      {/* SANCTUARY PARALLAX SECTION */}
      <section className="parallax-section fade-in-up" style={{ 
          backgroundImage: "url('/assets/images/partyphotos.png')", 
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: '8rem 0',
          position: 'relative'
        }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
              background: 'linear-gradient(135deg, rgba(61, 43, 31, 0.85) 0%, rgba(44, 33, 27, 0.85) 100%)',
              backdropFilter: 'blur(5px)',
              padding: '4rem 2rem',
              borderRadius: '8px',
              border: '1px solid rgba(198, 161, 91, 0.3)',
              color: 'var(--color-warm-ivory)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <h4 style={{ color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: 600 }}>Welcome to Heavencrest</h4>
<h2 className="heading-medium" style={{ color: "#fff", fontSize: "3.5rem", marginBottom: "1.5rem", fontFamily: "var(--font-heading)" }}>A Sanctuary of Elegance</h2>
          <Separator icon="★" />
            <p style={{ color: 'var(--color-warm-ivory)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: 0 }}>
              Nestled in the heart of breathtaking landscapes, Heavencrest offers an unparalleled luxury experience. Our majestic architecture, golden accents, and warm earthy tones create an ambiance of exclusivity and serenity. Step into a world where every detail is meticulously curated to provide an unforgettable stay.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="intro-section fade-in-up">
        <div className="container text-center">
<h2 className="heading-medium">Thoughtful Spaces for Every Guest</h2>
          <Separator icon="★" />
          <p style={{ maxWidth: '800px', margin: '0 auto' }}>From carefully appointed rooms to our dedicated service, everything at Heaven Crest - 127 is focused on providing a welcoming environment. We understand that travel can be demanding, which is why weâ€™ve created spaces where you can truly relax.</p>
        </div>
      </section>

      {/* GALLERY PREVIEW SECTION */}
      <section className="gallery-preview fade-in-up">
        <div className="container text-center">
<h2 className="heading-medium">A Glimpse of Heaven Crest</h2>
          <Separator icon="★" />
          <div className="gallery-grid">
            <div className="gallery-item img-zoom-container fade-in-up delay-100">
              <img src="/assets/images/bedroom.png" alt="Luxury bedroom" />
              <div className="img-overlay"><span className="text-gold">View Image</span></div>
            </div>
            <div className="gallery-item img-zoom-container fade-in-up delay-200">
              <img src="/assets/images/Welcomedistincation.png" alt="Suite interior" />
              <div className="img-overlay"><span className="text-gold">View Image</span></div>
            </div>
            <div className="gallery-item img-zoom-container fade-in-up delay-300">
              <img src="/assets/images/hall.png" alt="Hall common area" />
              <div className="img-overlay"><span className="text-gold">View Image</span></div>
            </div>
            <div className="gallery-item img-zoom-container fade-in-up delay-400">
              <img src="/assets/images/outdoor.png" alt="Outdoor view" />
              <div className="img-overlay"><span className="text-gold">View Image</span></div>
            </div>
          </div>
          <Link to="/gallery" className="btn btn-secondary" style={{ borderColor: 'var(--color-champagne-gold)' }}>View Full Gallery</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section fade-in-up">
        <div className="container">
<h2 className="heading-medium">Your Comfortable Stay Begins Here</h2>
          <Separator icon="★" />
          <p style={{ marginBottom: '2rem' }}>Discover a stay designed with comfort, convenience, and thoughtful hospitality in mind.</p>
          <Link to="/contact" className="btn btn-primary">Book Your Stay</Link>
        </div>
      </section>
    </main>
  );
}

