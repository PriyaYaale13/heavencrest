import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Separator from '../components/Separator';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  useScrollReveal([filter]);

  const galleryItems = [
    { id: 1, category: 'rooms', src: '/assets/images/acroomwithtv.jpg', alt: 'Acroomwithtv' },
    { id: 2, category: 'rooms', src: '/assets/images/bathroomshower.jpg', alt: 'Bathroomshower' },
    { id: 3, category: 'rooms', src: '/assets/images/beds.jpg', alt: 'Beds' },
    { id: 4, category: 'rooms', src: '/assets/images/bedsheet.jpg', alt: 'Bedsheet' },
    { id: 5, category: 'rooms', src: '/assets/images/bedsheetwithpea.jpg', alt: 'Bedsheetwithpea' },
    { id: 6, category: 'rooms', src: '/assets/images/bedsheetwithwalldesign.jpg', alt: 'Bedsheetwithwalldesign' },
    { id: 7, category: 'rooms', src: '/assets/images/cleanmyroom.jpg', alt: 'Cleanmyroom' },
    { id: 8, category: 'hall', src: '/assets/images/corrider.jpg', alt: 'Corrider' },
    { id: 9, category: 'suites', src: '/assets/images/customise.jpg', alt: 'Customise' },
    { id: 10, category: 'dining', src: '/assets/images/eatingtable.jpg', alt: 'Eatingtable' },
    { id: 11, category: 'hall', src: '/assets/images/enterance.png', alt: 'Enterance' },
    { id: 12, category: 'hall', src: '/assets/images/halltvwithkitchen.jpg', alt: 'Halltvwithkitchen' },
    { id: 13, category: 'suites', src: '/assets/images/Heaven_Crest_127_Tour.gif', alt: 'Heaven Crest 127 Tour' },
    { id: 14, category: 'suites', src: '/assets/images/hero-suite.png', alt: 'Hero-Suite' },
    { id: 15, category: 'suites', src: '/assets/images/highclassstyle.jpg', alt: 'Highclassstyle' },
    { id: 16, category: 'dining', src: '/assets/images/kitchen.jpg', alt: 'Kitchen' },
    { id: 17, category: 'dining', src: '/assets/images/kitchenwithdining.jpg', alt: 'Kitchenwithdining' },
    { id: 18, category: 'hall', src: '/assets/images/outdoor.png', alt: 'Outdoor' },
    { id: 19, category: 'suites', src: '/assets/images/partyphotos.png', alt: 'Partyphotos' },
    { id: 20, category: 'rooms', src: '/assets/images/peacockwithbed.jpg', alt: 'Peacockwithbed' },
    { id: 21, category: 'suites', src: '/assets/images/peacockwithcloth.jpg', alt: 'Peacockwithcloth' },
    { id: 22, category: 'suites', src: '/assets/images/pleasedonotdisturbme.jpg', alt: 'Pleasedonotdisturbme' },
    { id: 23, category: 'hall', src: '/assets/images/receptionwithhall.jpg', alt: 'Receptionwithhall' },
    { id: 24, category: 'rooms', src: '/assets/images/room1.jpg', alt: 'Room1' },
    { id: 25, category: 'rooms', src: '/assets/images/roomno.jpg', alt: 'Roomno' },
    { id: 26, category: 'rooms', src: '/assets/images/roomwithsmallfridge.jpg', alt: 'Roomwithsmallfridge' },
    { id: 27, category: 'rooms', src: '/assets/images/roomwithtvwithbed.jpg', alt: 'Roomwithtvwithbed' },
    { id: 28, category: 'suites', src: '/assets/images/shelfs.jpg', alt: 'Shelfs' },
    { id: 29, category: 'hall', src: '/assets/images/sidekitchenwithhall.jpg', alt: 'Sidekitchenwithhall' },
    { id: 30, category: 'suites', src: '/assets/images/slopewithkithchen.jpg', alt: 'Slopewithkithchen' },
    { id: 31, category: 'suites', src: '/assets/images/spaceablewith.jpg', alt: 'Spaceablewith' },
    { id: 32, category: 'dining', src: '/assets/images/teacups.jpg', alt: 'Teacups' },
    { id: 33, category: 'hall', src: '/assets/images/waitinghall.jpg', alt: 'Waitinghall' },
    { id: 34, category: 'rooms', src: '/assets/images/washroom.jpg', alt: 'Washroom' },
    { id: 35, category: 'hall', src: '/assets/images/wholebuilding.png', alt: 'Wholebuilding' },
    { id: 36, category: 'rooms', src: '/assets/images/withduckinbed.jpg', alt: 'Withduckinbed' },
    { id: 37, category: 'suites', src: '/assets/images/withlaptop.jpg', alt: 'Withlaptop' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <main>
      {/* LUXURY PARALLAX HERO */}
      <section className="parallax-gallery-hero fade-in-up">
        
        {/* Sticky Editorial Panel */}
        <div className="parallax-editorial">
          <div className="parallax-subtitle">VISUAL JOURNEY</div>
          <h1 className="parallax-title-primary">The</h1>
          <h2 className="parallax-title-secondary">Gallery</h2>
          <p className="parallax-caption">Captivating moments at Heaven Crest.</p>
          <a href="#gallery-grid" className="parallax-btn" onClick={(e) => {
            e.preventDefault();
            document.getElementById('gallery-grid').scrollIntoView({ behavior: 'smooth' });
          }}>VIEW THE COLLECTION &rarr;</a>
        </div>

        {/* Dual-Direction Scrolling Columns */}
        <div className="parallax-columns-container">
          
          {/* Column 1: Scrolls Up */}
          <div className="p-col scroll-up">
            {[...galleryItems.slice(0, 6), ...galleryItems.slice(0, 6)].map((item, idx) => (
              <img key={`col1-${idx}`} src={item.src} alt={item.alt} />
            ))}
          </div>

          {/* Column 2: Scrolls Down */}
          <div className="p-col scroll-down" style={{ marginTop: '-20%' }}>
            {[...galleryItems.slice(6, 12), ...galleryItems.slice(6, 12)].map((item, idx) => (
              <img key={`col2-${idx}`} src={item.src} alt={item.alt} />
            ))}
          </div>

          {/* Column 3: Scrolls Up */}
          <div className="p-col scroll-up" style={{ marginTop: '10%' }}>
            {[...galleryItems.slice(2, 8), ...galleryItems.slice(2, 8)].map((item, idx) => (
              <img key={`col3-${idx}`} src={item.src} alt={item.alt} />
            ))}
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery-grid" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#fdfbf7' }}>
        <div className="container">

          {/* Intro Text */}
          <div className="gallery-intro fade-in-up" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            <h2 className="heading-large" style={{ marginBottom: '1.5rem', color: '#1a1a1a' }}>Discover Every Detail</h2>
            <Separator icon="★" color="#1a1a1a" />
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Step into the world of Heaven Crest - 127 Suites & Stays. Browse through our curated visual collection showcasing everything we have to offer. From our meticulously designed premium suites and cozy bedrooms to our vibrant communal halls and fully-equipped kitchen and dining spaces, every corner has been thoughtfully created to surround you with comfort, elegance, and international-standard luxury. 
            </p>
          </div>
          
          {/* Filters */}
          <div className="filter-menu fade-in-up delay-100">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'rooms' ? 'active' : ''}`} onClick={() => setFilter('rooms')}>Rooms</button>
            <button className={`filter-btn ${filter === 'suites' ? 'active' : ''}`} onClick={() => setFilter('suites')}>Suites</button>
            <button className={`filter-btn ${filter === 'hall' ? 'active' : ''}`} onClick={() => setFilter('hall')}>Hall & Common</button>
            <button className={`filter-btn ${filter === 'dining' ? 'active' : ''}`} onClick={() => setFilter('dining')}>Dining & Kitchen</button>
          </div>

          {/* Masonry Grid */}
          <div className="gallery-masonry">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="gallery-item fade-in-up" style={{ animationDelay: `${(index % 3 + 1) * 100}ms` }}>
                <img src={item.src} alt={item.alt} />
                <div className="gallery-overlay"><span className="zoom-icon">🔍</span></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      <div className={`lightbox ${selectedImage ? 'active' : ''}`} onClick={() => setSelectedImage(null)}>
        {selectedImage && (
          <>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
            <img src={selectedImage} alt="Enlarged view" className="lightbox-content" onClick={(e) => e.stopPropagation()} />
          </>
        )}
      </div>
    </main>

  );
}
