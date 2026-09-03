const fs = require('fs');
let file = fs.readFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Contact.jsx', 'utf8');

file = file.replace(
  /<span className="icon">.*?<\/span>\s*<h4>Quick Support<\/h4>/,
  '<div className="feature-icon"><img src="/assets/images/support_3d_icon.jpg" alt="Quick Support" style={{width: "60px", height: "60px", objectFit: "contain", marginBottom: "0.5rem", borderRadius: "8px"}} /></div>\n            <h4>Quick Support</h4>'
);

file = file.replace(
  /<span className="icon">.*?<\/span>\s*<h4>Trusted & Secure<\/h4>/,
  '<div className="feature-icon"><img src="/assets/images/secure_3d_icon.jpg" alt="Trusted & Secure" style={{width: "60px", height: "60px", objectFit: "contain", marginBottom: "0.5rem", borderRadius: "8px"}} /></div>\n            <h4>Trusted & Secure</h4>'
);

file = file.replace(
  /<span className="icon">.*?<\/span>\s*<h4>Easy Booking<\/h4>/,
  '<div className="feature-icon"><img src="/assets/images/booking_3d_icon.jpg" alt="Easy Booking" style={{width: "60px", height: "60px", objectFit: "contain", marginBottom: "0.5rem", borderRadius: "8px"}} /></div>\n            <h4>Easy Booking</h4>'
);

fs.writeFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Contact.jsx', file);
