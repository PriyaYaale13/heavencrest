import React, { useState } from 'react';
import { roomsData } from '../data/rooms';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Separator from '../components/Separator';

// Simple SVG Icons
const IconBed = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/></svg>;
const IconUsers = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const IconWifi = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>;
const IconAC = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20v-5M11 9V4M15 20v-7M15 7V4M7 20v-7M7 7V4"></path><path d="M3 13h18M3 10h18"></path></svg>;
const IconTV = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>;
const IconHotWater = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a5 5 0 0 0 5-5c0-2-5-9-5-9s-5 7-5 9a5 5 0 0 0 5 5z"></path></svg>;
const IconDental = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const IconCoffee = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>;
const IconSofa = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"></path><path d="M2 18h20v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5z"></path><path d="M6 18v2"></path><path d="M18 18v2"></path><path d="M12 13v5"></path></svg>;
const IconBalcony = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="14" width="18" height="8" rx="1" ry="1"></rect><line x1="7" y1="14" x2="7" y2="8"></line><line x1="17" y1="14" x2="17" y2="8"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;



const RoomModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <div className="room-modal-overlay" onClick={onClose}>
      <div className="room-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <img src={room.image} alt={room.name} className="modal-header-img" />
        
        <div className="modal-body">
          <div className="modal-title-row">
            <div>
              <h2>{room.name}</h2>
              <div className="modal-count">{room.count} {room.count === 1 ? 'Room' : 'Rooms'} Available</div>
            </div>
            <div>
              {room.isNonSmoking ? 
                <span className="room-badge badge-gold">&#128685; Non-Smoking</span> : 
                <span className="room-badge">&#128684; Smoking is permitted on the balcony</span>
              }
            </div>
          </div>
          
          <p className="modal-desc">{room.longDescription}</p>
          
          <div className="modal-details-grid">
            <div className="modal-section">
              <h4>Room Features</h4>
              <ul>
                <li>Occupancy: {room.occupancy}</li>
                <li>Bed Configuration: {room.bedConfig}</li>
                {room.extraBedAvailable && <li>Extra bed facility available</li>}
                {room.hasBalcony && <li>Balcony available</li>}
              </ul>
            </div>
            
            <div className="modal-section">
              <h4>Amenities</h4>
              <ul>
                {room.amenities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="modal-footer">
            <a href="/contact" className="btn btn-primary">Book Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  useScrollReveal();

  return (
    <main>
      {/* HEADER SECTION */}
      <section className="page-header fade-in" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/assets/images/roomwithtvwithbed.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '0'
      }}>
        <div className="container">
          <h1 className="heading-large" style={{ color: '#fff' }}>Our Rooms & Suites</h1>
          <Separator icon="&#9733;" color="#c6a15b" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          
          {/* SUMMARY BANNER */}
          <div className="rooms-summary-banner fade-in-up">
            <h2>10 Total Rooms</h2>
            <p style={{ color: '#fff' }}>
              <span>6 Deluxe Rooms</span> &bull;
              <span>3 Suite Rooms</span> &bull;
              <span>1 Family Room</span>
            </p>
          </div>

          {/* ROOMS GRID */}
          <div className="pro-cards-grid">
            {roomsData.map((room, index) => (
              <div className={`room-card fade-in-up delay-${(index + 1) * 100}`} key={room.id}>
                <div className="room-image-wrapper">
                  <div className="room-badges">
                    {room.isNonSmoking ? 
                      <span className="room-badge">&#128685; Non-Smoking</span> : 
                      <span className="room-badge">&#128684; Smoking permitted on balcony</span>
                    }
                  </div>
                  <img src={room.image} alt={room.name} />
                </div>
                
                <div className="room-card-content">
                  <h3>{room.name}</h3>
                  <div className="room-count">{room.count} {room.count === 1 ? "Room" : "Rooms"} Available</div>
                  
                  <p>{room.shortDescription}</p>
                  
                                                      <div className="room-amenities-mini">
                    <span><IconBed /> {room.bedConfig.split('+')[0]}</span>
                    {room.occupancy && <span><IconUsers /> {room.occupancy}</span>}
                    {room.amenities.some(a => a.includes('Wi-Fi')) && <span><IconWifi /> Free Wi-Fi</span>}
                    {room.amenities.some(a => a.includes('Air conditioning')) && <span><IconAC /> Air Conditioned</span>}
                    
                    {/* The 4 shared amenities for deluxe and suite */}
                    {(room.id === 'deluxe' || room.id === 'suite') && <span><IconTV /> 45-inch Smart TV</span>}
                    {(room.id === 'deluxe' || room.id === 'suite') && <span><IconHotWater /> 24/7 Hot Water</span>}
                    {(room.id === 'deluxe' || room.id === 'suite') && <span><IconDental /> Dental Kit</span>}
                    {(room.id === 'deluxe' || room.id === 'suite') && <span><IconCoffee /> Refreshment sachets (tea, milk powder, and coffee)</span>}
                    
                    {/* Specific to Suite */}
                    {room.id === 'suite' && <span><IconSofa /> Sofa-cum-bed</span>}
                    {room.id === 'suite' && <span><IconBalcony /> Balcony available</span>}
                  </div>
                  

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL */}
      {selectedRoom && <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />}
    </main>
  );
}
