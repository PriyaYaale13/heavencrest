import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GoogleReviews from '../components/GoogleReviews';
import Separator from '../components/Separator';

export default function About() {
  useScrollReveal();

  return (
    <main>
      {/* PAGE HERO BANNER */}
      <section 
        className="page-hero fade-in-up" 
        style={{ 
          background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/images/more_professionally.png") center/cover no-repeat', 
          height: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}
      >
        <div className="container text-center">
          <h1 className="heading-large" style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.6)', marginBottom: 0 }}>About Heaven Crest - 127</h1>
          <Separator icon="★" />
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="fade-in-up" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="about-content" style={{ marginTop: '2rem' }}>
            <div className="fade-in-up delay-100">
              <p className="heading-medium" style={{ color: "var(--color-champagne-gold)" }}>A Welcoming Destination</p>
              <Separator icon="★" />
              <p>Heaven Crest - 127 Suites & Stays is a welcoming hospitality destination created for guests looking for comfort, convenience, and a refined stay experience. With thoughtfully designed spaces and essential guest services, we aim to make every visit relaxed, comfortable, and memorable.</p>
              
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Approach</h3>
              <p>For years, we have focused on creating a comfortable stay experience where guests can settle in without unnecessary worries. Whether your visit is for business, education, family, travel, or leisure, our goal is to provide a dependable and welcoming environment.</p>
            </div>
            <div className="about-image fade-in-up delay-300">
              <img src="/assets/images/collageimages.png" alt="Heaven Crest Interior Collage" />
            </div>
          </div>

          {/* RESTAURANT SECTION */}
          <div className="about-content" style={{ marginTop: '6rem' }}>
            <div className="about-image fade-in-up delay-100">
              <img src="/assets/images/exquisite_dining_collage.jpg" alt="Exquisite Dining Collage" />
            </div>
            <div className="fade-in-up delay-200">
              <p className="heading-medium" style={{ color: "var(--color-champagne-gold)" }}>Exquisite Dining Experience</p>
              <Separator icon="★" />
              <p>Indulge your senses at our on-site restaurant, where culinary excellence meets elegant ambiance. We serve a diverse menu of local delicacies and international favorites, thoughtfully prepared by our expert chefs using the freshest ingredients.</p>
              
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Perfect for Every Occasion</h3>
              <p>Whether you're starting your day with our complimentary breakfast, hosting a business lunch, or enjoying a romantic dinner, our dining spaces are designed to provide the perfect setting. Unwind and savor unforgettable flavors during your stay at Heaven Crest.</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="location-card fade-in-up delay-300">
            <h2 className="heading-medium text-center" style={{ marginBottom: '2rem' }}>Our Location</h2>
            <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 2rem auto' }}>Conveniently located near VIT, Kandigai, Chennai, our property offers easy access to educational institutions, business hubs, and transport routes.</p>
            <div style={{ textAlign: 'center' }}>
              <a href="https://maps.google.com/?q=76A,+Kelambakkam+-+Vandalur+Rd,+Kandigai,+Chennai,+Tamil+Nadu+600127" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ borderColor: 'var(--color-champagne-gold)' }}>Get Directions on Map</a>
            </div>
          </div>

          <GoogleReviews />

        </div>
      </section>
    </main>
  );
}

