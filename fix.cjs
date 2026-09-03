const fs = require('fs');

function restoreHome() {
  let file = fs.readFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Home.jsx', 'utf8');
  let originalHeadings = [
    '<h2 className="heading-medium">Stay Somewhere Beautiful. Feel Completely at Home.</h2>',
    '<h2 className="heading-medium">Everything You Need for a Comfortable Stay</h2>',
    '<h2 className="heading-medium">An Experience Designed Around You</h2>',
    '<h2 className="heading-medium" style={{ color: \"#fff\", fontSize: \"3.5rem\", marginBottom: \"1.5rem\", fontFamily: \"var(--font-heading)\" }}>A Sanctuary of Elegance</h2>',
    '<h2 className="heading-medium">Thoughtful Spaces for Every Guest</h2>',
    '<h2 className="heading-medium">A Glimpse of Heaven Crest</h2>',
    '<h2 className="heading-medium">Your Comfortable Stay Begins Here</h2>'
  ];
  let i = 0;
  file = file.replace(/<Separator icon="\?" \/>/g, () => {
    return originalHeadings[i++] + '\n          <Separator icon="?" />';
  });
  
  // also fix the weird encoding ones
  file = file.replace(/<Separator icon="T>" \/>/g, '<Separator icon="?" />');
  fs.writeFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Home.jsx', file);
}

function restoreAbout() {
  let file = fs.readFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/About.jsx', 'utf8');
  let originalHeadings = [
    '<p className="heading-medium" style={{ color: "var(--color-champagne-gold)" }}>A Welcoming Destination</p>',
    '<p className="heading-medium" style={{ color: "var(--color-champagne-gold)" }}>Exquisite Dining Experience</p>',
    '<h2 className="heading-medium text-center" style={{ marginBottom: "2rem" }}>Our Location</h2>'
  ];
  let i = 0;
  file = file.replace(/<Separator icon="\?" \/>/g, () => {
    return originalHeadings[i++] + '\n              <Separator icon="?" />';
  });
  fs.writeFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/About.jsx', file);
}

restoreHome();
restoreAbout();
