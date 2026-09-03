import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Separator from '../components/Separator';

export default function Contact() {
  useScrollReveal();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: '',
    checkin: '',
    checkout: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'phone') {
      // Allow only numbers and limit to 10 digits
      const onlyNums = value.replace(/[^0-9]/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [id]: onlyNums }));
      return;
    }
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const submitEnquiry = (method) => {
    const form = document.getElementById('enquiryForm');
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    
    const data = `Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ARoom Type: ${formData.roomType}%0ACheck-in: ${formData.checkin}%0ACheck-out: ${formData.checkout}%0AGuests: ${formData.guests}%0AMessage: ${formData.message}`;
    
    if (method === 'email') {
      
      const btn = document.querySelector('.btn-send-email');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'SENDING...';
      btn.disabled = true;
      
      fetch("https://formsubmit.co/ajax/Heavencrest.127@gmail.com", {
          method: "POST",
          headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({
              _subject: "New Website Enquiry from " + formData.name,
              Name: formData.name,
              Phone: formData.phone,
              Email: formData.email,
              RoomType: formData.roomType,
              CheckIn: formData.checkin,
              CheckOut: formData.checkout,
              Guests: formData.guests,
              Message: formData.message
          })
      })
      .then(response => response.json())
      .then(data => {
          setShowModal(true);
          btn.innerHTML = originalText;
          btn.disabled = false;
          setFormData({ name: '', phone: '', email: '', roomType: '', checkin: '', checkout: '', guests: '', message: '' });
      })
      .catch(error => {
          alert("Sorry, there was an error sending your message. Please try again or use WhatsApp.");
          btn.innerHTML = originalText;
          btn.disabled = false;
      });

    } else if (method === 'whatsapp') {
      window.open(`https://wa.me/919840766636?text=${data}`, '_blank');
    }
  };

  return (
    <main style={{ backgroundColor: '#fdfbf7', paddingBottom: '4rem' }}>
      {/* PAGE HERO */}
      <section className="contact-hero fade-in-up">
        <div className="contact-hero-content container contact-hero-mobile-flex">
          <div className="contact-hero-text">
            <h4 className="gold-subtitle">GET IN TOUCH</h4>
            <h1 className="heading-large" style={{ fontSize: '3rem', color: '#fff' }}>We're Here to Help You</h1>
            <Separator icon="★" style={{ margin: '1rem 0' }} />
            <p style={{ color: '#eee', lineHeight: '1.6', maxWidth: '400px' }}>Have a question about your stay or need more information? Our team at Heaven Crest - 127 Suites & Stays is here to make your visit comfortable and convenient.</p>
          </div>

        </div>
      </section>

      {/* CONTACT THREE-COLUMN SECTION */}
      <section className="contact-main-section fade-in-up">
        <div className="container contact-3col-grid">
          
          {/* Col 1: Contact Information */}
          <div className="contact-card dark-card">
            <h3>Contact Information</h3>
            <div className="contact-list">
              <div className="contact-list-item">
                <span className="icon">&#128205;</span>
                <div>
                  <h4>ADDRESS</h4>
                  <p>76A, Kelambakkam - Vandalur Rd,<br/>Kandigai, Chennai, Tamil Nadu 600127</p>
                </div>
              </div>
              <div className="contact-list-item">
                <span className="icon">&#128222;</span>
                <div>
                  <h4>PHONE</h4>
                  <p className="highlight">+91-9840766636</p>
                </div>
              </div>
              <div className="contact-list-item">
                <span className="icon">&#9993;</span>
                <div>
                  <h4>EMAIL</h4>
                  <p>info@heavencrest127.com</p>
                </div>
              </div>
              <div className="contact-list-item">
                <span className="icon">&#128336;</span>
                <div>
                  <h4>HOURS</h4>
                  <p>24/7 – We're Always Here for You</p>
                </div>
              </div>
            </div>
            <div className="contact-card-buttons">
              <a href="tel:+919840766636" className="btn-gold-solid"><span className="icon">&#128222;</span> CALL NOW</a>
              <a href="https://maps.google.com/?q=76A,+Kelambakkam+-+Vandalur+Rd,+Kandigai,+Chennai,+Tamil+Nadu+600127" target="_blank" rel="noopener noreferrer" className="btn-gold-outline"><span className="icon">&#10148;</span> GET DIRECTIONS</a>
            </div>
          </div>

          {/* Col 2: Location Map */}
          <div className="contact-card map-card">
            <h3>Our Location</h3>
            <div className="map-embed-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.919777936183!2d80.13840791482064!3d12.848480390936737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259a04ff76da3%3A0xe5e53d2acf86b812!2sHeaven%20Crest%20127!5e0!3m2!1sen!2sin!4v1684501234567!5m2!1sen!2sin" 
                width="100%" 
                height="280" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Heaven Crest Map"
              ></iframe>
            </div>
          </div>

          {/* Col 3: Enquiry Form */}
          <div className="contact-card form-card">
            <h3>Send an Enquiry</h3>
            <form id="enquiryForm" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <input type="text" id="name" className="c-form-control" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                <input type="tel" id="phone" className="c-form-control" placeholder="Phone Number (10 digits)" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" title="Please enter exactly 10 digits" maxLength="10" required />
              </div>
              <input type="email" id="email" className="c-form-control" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              <select id="roomType" className="c-form-control" value={formData.roomType} onChange={handleChange} required style={{ backgroundColor: 'transparent' }}>
                <option value="" disabled style={{ backgroundColor: '#151311', color: '#c6a15b' }}>Select Room Type</option>
                <option value="Deluxe room" style={{ backgroundColor: '#151311', color: '#fcfbf8' }}>1. Deluxe room</option>
                <option value="Suite room" style={{ backgroundColor: '#151311', color: '#fcfbf8' }}>2. Suite room</option>
                <option value="Family room" style={{ backgroundColor: '#151311', color: '#fcfbf8' }}>3. Family room</option>
              </select>
              <div className="form-row">
                <input type="text" id="checkin" className="c-form-control" placeholder="Check-in Date" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} value={formData.checkin} onChange={handleChange} required />
                <input type="text" id="checkout" className="c-form-control" placeholder="Check-out Date" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} value={formData.checkout} onChange={handleChange} required />
              </div>
              <input type="number" id="guests" className="c-form-control" placeholder="Number of Guests" min="1" value={formData.guests} onChange={handleChange} required />
              <textarea id="message" className="c-form-control" placeholder="Message or Special Requests" value={formData.message} onChange={handleChange}></textarea>
              
              <div className="form-buttons-row">
                <button type="button" className="btn-send-email" onClick={() => submitEnquiry('email')}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'text-bottom'}}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> SEND VIA EMAIL</button>
                <button type="button" className="btn-send-wa" onClick={() => submitEnquiry('whatsapp')}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px', verticalAlign: 'text-bottom'}}><path d="M12.031 0C5.385 0 0 5.385 0 12.03c0 2.122.553 4.148 1.605 5.952L0 24l6.195-1.625A11.972 11.972 0 0 0 12.03 24c6.645 0 12.03-5.386 12.03-12.03S18.677 0 12.031 0zm0 22.016a9.923 9.923 0 0 1-5.06-1.385l-.363-.216-3.765.987.997-3.668-.236-.376A9.914 9.914 0 0 1 2.062 12.03c0-5.5 4.475-9.975 9.97-9.975s9.97 4.475 9.97 9.975-4.475 9.975-9.97 9.975zm5.46-7.464c-.3-.15-1.775-.875-2.05-.975-.275-.1-.475-.15-.675.15s-.775.975-.95 1.175c-.175.2-.35.225-.65.075-.3-.15-1.267-.468-2.413-1.492-.892-.796-1.493-1.78-1.668-2.08-.175-.3-.02-.462.13-.611.135-.134.3-.3.45-.45.15-.15.2-.25.3-.425.1-.175.05-.325-.025-.475-.075-.15-.675-1.625-.925-2.225-.243-.585-.49-.505-.675-.514-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.112 3.225 5.112 4.525.714.31 1.27.495 1.704.633.716.227 1.367.195 1.88.118.577-.086 1.775-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"></path></svg> SEND VIA WHATSAPP</button>
              </div>
              <p className="reply-notice">We typically reply within a few minutes.</p>
            </form>
          </div>
          
        </div>
      </section>

      {/* FOOTER FEATURES */}
      <section className="contact-features fade-in-up" style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 0' }}>
        <div className="container pro-cards-grid pro-cards-grid-4" style={{ marginTop: '2rem' }}>
          
          <div className="pro-card fade-in-up delay-100">
            <div className="pro-card-image-wrapper">
              <img src="/assets/images/receptionwithhall.jpg" alt="Quick Support" className="pro-bg-img" />
              <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
              </svg>
              <div className="pro-card-icon-wrapper">
                <img src="/assets/images/support_3d_icon.jpg" alt="Quick Support Icon" />
              </div>
            </div>
            <div className="pro-card-content">
              <h3>Quick Support</h3>
              <Separator icon="★" color="var(--color-champagne-gold)" />
              <p>We're here to assist you anytime.</p>
            </div>
          </div>
          
          <div className="pro-card fade-in-up delay-200">
            <div className="pro-card-image-wrapper">
              <img src="/assets/images/wholebuilding.png" alt="Trusted & Secure" className="pro-bg-img" />
              <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
              </svg>
              <div className="pro-card-icon-wrapper">
                <img src="/assets/images/secure_3d_icon.jpg" alt="Trusted & Secure Icon" />
              </div>
            </div>
            <div className="pro-card-content">
              <h3>Trusted & Secure</h3>
              <Separator icon="★" color="var(--color-champagne-gold)" />
              <p>Your information is safe with us.</p>
            </div>
          </div>
          
          <div className="pro-card fade-in-up delay-300">
            <div className="pro-card-image-wrapper">
              <img src="/assets/images/roomno.jpg" alt="Easy Booking" className="pro-bg-img" />
              <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
              </svg>
              <div className="pro-card-icon-wrapper">
                <img src="/assets/images/booking_3d_icon.jpg" alt="Easy Booking Icon" />
              </div>
            </div>
            <div className="pro-card-content">
              <h3>Easy Booking</h3>
              <Separator icon="★" color="var(--color-champagne-gold)" />
              <p>Simple steps to book your perfect stay.</p>
            </div>
          </div>
          
          <div className="pro-card fade-in-up delay-400">
            <div className="pro-card-image-wrapper">
              <img src="/assets/images/hero-suite.png" alt="Best Guaranteed" className="pro-bg-img" />
              <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="pro-curve">
                <path d="M0,0 C30,25 70,25 100,0 L100,20 L0,20 Z" fill="#fcfbf8" />
                <path d="M0,0 C30,25 70,25 100,0" fill="none" stroke="#c6a15b" strokeWidth="1" />
              </svg>
              <div className="pro-card-icon-wrapper">
                <img src="/assets/images/starimage.png" alt="Best Guaranteed Icon" />
              </div>
            </div>
            <div className="pro-card-content">
              <h3>Best Guaranteed</h3>
              <Separator icon="★" color="var(--color-champagne-gold)" />
              <p>Get the best rates when you book direct.</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* CUSTOM SUCCESS MODAL */}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', 
          zIndex: 9999, backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            backgroundColor: 'var(--color-deep-mocha)', padding: '3rem', borderRadius: '12px', 
            maxWidth: '500px', width: '90%', textAlign: 'center', color: '#fcfbf8',
            border: '1px solid var(--color-champagne-gold)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(198, 161, 91, 0.1)',
              display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 1.5rem',
              color: 'var(--color-champagne-gold)'
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-champagne-gold)', marginBottom: '1rem' }}>Enquiry Sent!</h2>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>Thank you for reaching out. Your enquiry has been sent successfully, and we will get back to you shortly.</p>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '2rem', textAlign: 'left', borderLeft: '3px solid var(--color-champagne-gold)' }}>
              <strong>Activation Note:</strong> If this is your FIRST time testing, please check the <em>Heavencrest.127@gmail.com</em> inbox for an activation email from <strong>FormSubmit</strong> and click 'Activate'.
            </div>
            <button 
              onClick={() => setShowModal(false)}
              className="btn-gold-solid"
              style={{ width: '100%', border: 'none', cursor: 'pointer' }}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </main>

  );
}
