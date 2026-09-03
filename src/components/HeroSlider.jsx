import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/assets/images/bedsheetwithpea.jpg',
    position: 'center 75%',
    heading: 'TIMELESS GRANDEUR,',
    subheading: 'Modern Comfort',
    caption: 'Experience unparalleled luxury, where every stay is crafted to perfection.'
  },
  {
    image: '/assets/images/partyphotos.png',
    heading: 'CELEBRATE IN STYLE,',
    subheading: 'Exquisite Dining',
    caption: 'Vibrant social spaces designed for unforgettable moments.'
  },
  {
    image: '/assets/images/room.png',
    heading: 'YOUR PRIVATE SANCTUARY,',
    subheading: 'Serene Tranquility',
    caption: 'A curated space blending modern sophistication with complete comfort.'
  },
  {
    image: '/assets/images/hall.png',
    heading: 'UNRIVALED ELEGANCE,',
    subheading: 'Grand Welcomes',
    caption: 'Step into architectural brilliance that defines international luxury.'
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: slide.position || 'center'
          }}
        >
          <div className="hero-slide-content">
            <h3 className="hero-slide-heading">{slide.heading}</h3>
            <h2 className="hero-slide-subheading">{slide.subheading}</h2>
            <p className="hero-slide-caption">{slide.caption}</p>
          </div>
        </div>
      ))}
      


    </div>
  );
}
