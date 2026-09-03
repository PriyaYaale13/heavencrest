import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Anita Sharma',
    time: '2 days ago',
    initial: 'A',
    text: 'Excellent food, amazing ambience and wonderful hospitality. Highly recommended!',
    bgColor: '#4a5568'
  },
  {
    id: 2,
    name: 'Ravi Verma',
    time: '5 days ago',
    initial: 'R',
    text: 'Perfect place for family dinner. The service was top-notch and the staff was very polite.',
    bgColor: '#ed8936'
  },
  {
    id: 3,
    name: 'Sneha Patil',
    time: '1 week ago',
    initial: 'S',
    text: 'We had a great time celebrating our anniversary. Thank you Heaven Crest 127 for making it special!',
    bgColor: '#38b2ac'
  }
];

export default function GoogleReviews() {
  const googleReviewLink = "https://www.google.com/travel/search?q=heaven%20crest%20127&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121608706%2C121738283%2C121762713&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaRwopEicyJTB4M2E1MjU5YTA0ZmY3NmRhMzoweGU1ZTUzZDJhY2Y4NmI4MTISGhIUCgcI6g8QCBgSEgcI6g8QCBgTGAEyAhAA&qs=CAEyFENnc0lrdkNhX0t5bHpfTGxBUkFCOAJCCQkSuIbPKj3l5UIJCRK4hs8qPeXl&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwigsYzyuqmWAxUAAAAAHQAAAAAQAw";

  return (
    <div className="google-reviews-wrapper">
      <h2 className="heading-medium text-center" style={{ marginBottom: '2rem' }}>What Our Guests Say</h2>
      
      <div className="reviews-layout">
        {/* Left Stats Section */}
        <div className="reviews-stats">
          <h3 className="rating-score">4.7</h3>
          <div className="stars">
            &#9733; &#9733; &#9733; &#9733; &#9733;
          </div>
          <p className="review-count">Based on reviews</p>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
            alt="Google Logo" 
            className="google-logo" 
          />
          <a href={googleReviewLink} target="_blank" rel="noopener noreferrer" className="btn-write-review">
            Write a review
          </a>
        </div>

        {/* Right Cards Section */}
        <div className="reviews-carousel">
          <div className="nav-arrow left-arrow">&#10094;</div>
          <div className="reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="reviewer-header">
                  <div className="reviewer-avatar" style={{ backgroundColor: review.bgColor }}>
                    {review.initial}
                  </div>
                  <div className="reviewer-info">
                    <h4>{review.name}</h4>
                    <span>{review.time}</span>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="small-g-logo" />
                </div>
                <div className="card-stars">
                  &#9733; &#9733; &#9733; &#9733; &#9733;
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="nav-arrow right-arrow">&#10095;</div>
        </div>
      </div>

      <div className="reviews-footer text-center">
        <a href={googleReviewLink} target="_blank" rel="noopener noreferrer" className="btn-view-all">
          View all reviews on Google
        </a>
      </div>
    </div>
  );
}
