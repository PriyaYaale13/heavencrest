import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 'business',
    image: '/assets/images/exp_business.jpg',
    title: 'BUSINESS TRAVELERS',
    heading: 'Seamless Work & Stay',
    description: 'Experience a quiet, productive environment with high-speed internet, ergonomic workspaces, and access to our executive lounge. Focus on your business while we take care of the rest.',
    link: '/experiences'
  },
  {
    id: 'professionals',
    image: '/assets/images/exp_professional.jpg',
    title: 'PROFESSIONALS',
    heading: 'Networking & Relaxation',
    description: 'Unwind after a long day in our elegant lounge areas. Connect with other professionals or simply relax with a premium cocktail in a sophisticated, warmly lit atmosphere.',
    link: '/experiences'
  },
  {
    id: 'students',
    image: '/assets/images/exp_students.jpg',
    title: 'STUDENTS & VISITORS',
    heading: 'Discover the City',
    description: 'Perfectly located for exploring the local area, our comfortable rooms offer a welcoming base camp for students and visitors eager to discover the city\'s best attractions.',
    link: '/experiences'
  },
  {
    id: 'families',
    image: '/assets/images/exp_families.jpg',
    title: 'FAMILIES',
    heading: 'Space for Everyone',
    description: 'Create lasting memories in our spacious family suites. With separate living areas and kid-friendly amenities, everyone can relax and enjoy a stress-free family vacation.',
    link: '/experiences'
  },
  {
    id: 'couples',
    image: '/assets/images/exp_couples.jpg',
    title: 'COUPLES',
    heading: 'Romantic Escapes',
    description: 'Celebrate your special moments in an intimate, luxurious setting. Enjoy private dining, elegant decor, and a serene atmosphere designed for perfect romantic getaways.',
    link: '/experiences'
  },
  {
    id: 'leisure',
    image: '/assets/images/exp_leisure.jpg',
    title: 'LEISURE TRAVELERS',
    heading: 'Breakfast Inclusive Rate',
    description: 'Wake up to a symphony of flavours with our delectable breakfast spread and enjoy seamless internet connectivity and flexible cancellation for that added peace of mind.',
    link: '/experiences'
  }
];

export default function ExperiencesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images for smoother transitions
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="experiences-carousel">
      <div className="carousel-container">

        {/* Slides Track */}
        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide) => (
            <div className="carousel-slide" key={slide.id}>
              <div className="slide-content">
                <div className="slide-image">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <div className="slide-text">
                  <h4 className="slide-category">{slide.title}</h4>
                  <p className="slide-desc">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Dots Indicator (Visual Only) */}
      <div className="carousel-dots" style={{ pointerEvents: 'none' }}>
        {slides.map((_, idx) => (
          <div 
            key={idx} 
            className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
