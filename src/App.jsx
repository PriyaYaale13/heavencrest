import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import Rooms from './pages/Rooms';

import './styles/style.css';
import './styles/components.css';
import './styles/animations.css';



const WhatsAppWidget = () => (
  <a 
    href="https://wa.me/919840766636?text=%F0%9F%91%8B%20%2AHello%21%20Welcome%20to%20Heaven%20Crest-127%20Suites%20%26%20Stays%20%F0%9F%8F%A8%2A%0A%0ALooking%20to%20book%20a%20comfortable%20stay%20with%20us%3F%20%E2%9C%A8%0A%0A%F0%9F%93%85%20%2ACheck%20Room%20Availability%2A%0A%F0%9F%9B%8F%EF%B8%8F%20%2AView%20Available%20Rooms%2A%0A%F0%9F%92%B0%20%2AGet%20Room%20Rates%2A%0A%F0%9F%93%8B%20%2AMake%20a%20Room%20Booking%2A%0A%E2%9D%93%20%2AAsk%20About%20Our%20Facilities%2A%0A%0APlease%20share%20your%20%2Acheck-in%20date%2C%20check-out%20date%2C%20and%20number%20of%20guests%2A%2C%20and%20our%20team%20will%20assist%20you%20with%20your%20booking.%0A%0A%F0%9F%92%AC%20%2AChat%20with%20us%20on%20WhatsApp%2A" 
    target="_blank" 
    rel="noreferrer"
    style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'transform 0.3s ease',
      textDecoration: 'none',
      
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      backgroundColor: 'transparent',
        borderRadius: '50%',
        overflow: 'hidden'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    title="Chat with us on WhatsApp"
  >
    <img src="/assets/images/wa-logo-3d.jpg" alt="WhatsApp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </a>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppWidget />
      
    </Router>
  );
}

export default App;
