import { useScrollReveal } from '../hooks/useScrollReveal';
import Separator from '../components/Separator';

export default function Experiences() {
  useScrollReveal();

  return (
    <main>
      {/* EXPERIENCES HERO */}
      <section className="exp-hero fade-in-up">
        <div className="exp-hero-content">
          <h1 className="exp-hero-title">Experiences Designed Around Your Stay</h1>
          <Separator icon="★" color="var(--color-champagne-gold)" />
          <p className="exp-hero-text">
            Every journey is unique, and your stay should be too.<br/>
            At Heaven Crest &ndash; 127, we elevate your experience with<br/>
            unmatched comfort and seamless convenience.
          </p>
        </div>
      </section>

      {/* EXPERIENCES LIST */}
      <section className="fade-in-up">
        <div className="container">
          
          <div className="experience-block fade-in-up">
            <div className="exp-content">
              <h3>For Professionals</h3>
              <Separator icon="★" />
              <p>Elevate your business trip with a stay designed for productivity and relaxation. We offer high-speed internet, ergonomic workspaces, and a quiet environment perfect for remote work or after-hours preparation. Unwind after meetings in our elegant lounges or enjoy seamless connectivity for all your corporate commitments.</p>
            </div>
            <div className="exp-image img-zoom-container">
              <img src="/assets/images/hall.png" alt="Professional Stay" />
            </div>
          </div>

          <div className="experience-block fade-in-up">
            <div className="exp-content">
              <h3>For Students & Visitors</h3>
              <Separator icon="★" />
              <p>Perfectly located near premier educational institutions, our property offers a safe, peaceful, and convenient haven for students and visiting parents. Enjoy a supportive atmosphere where you can focus on campus tours or simply spend quality time with family in a comfortable, stress-free environment.</p>
            </div>
            <div className="exp-image img-zoom-container">
              <img src="/assets/images/outdoor.png" alt="Students and Visitors" />
            </div>
          </div>

          <div className="experience-block fade-in-up">
            <div className="exp-content">
              <h3>For Families</h3>
              <Separator icon="★" />
              <p>Create lasting memories in our spacious, thoughtfully designed suites that cater perfectly to families. From kid-friendly amenities and large comfortable beds to engaging communal areas, we ensure your family vacation is completely relaxed, highly convenient, and filled with joyful moments for everyone.</p>
            </div>
            <div className="exp-image img-zoom-container">
              <img src="/assets/images/roomwithtv.png" alt="Family Stay" />
            </div>
          </div>

          <div className="experience-block fade-in-up">
            <div className="exp-content">
              <h3>For Leisure</h3>
              <Separator icon="★" />
              <p>Escape the everyday rush and immerse yourself in absolute tranquility. Our leisure accommodations are crafted for complete relaxation, featuring plush bedding, elegant decor, and an on-site restaurant serving exquisite culinary delights. Slow down, rejuvenate your senses, and enjoy a deeply comforting and luxurious getaway.</p>
            </div>
            <div className="exp-image img-zoom-container">
              <img src="/assets/images/room2.png" alt="Leisure Stay" />
            </div>
          </div>

          <div className="experience-block fade-in-up">
            <div className="exp-content">
              <h3>For Short & Extended Stays</h3>
              <Separator icon="★" />
              <p>Whether you are dropping in for a quick overnight visit or planning an extended retreat, our flexible hospitality adapts perfectly to your schedule. Enjoy premium in-room facilities and a homely warmth that makes you feel entirely comfortable no matter how long you stay with us.</p>
            </div>
            <div className="exp-image img-zoom-container">
              <img src="/assets/images/room.png" alt="Extended Stay" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
