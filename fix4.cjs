const fs = require('fs');

function fixExperiences() {
  let file = fs.readFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Experiences.jsx', 'utf8');
  
  let headings = [
    'For Professionals',
    'For Students & Visitors',
    'For Families',
    'For Leisure',
    'For Short & Extended Stays'
  ];
  let i = 0;
  
  file = file.replace(/<h3><\/h3>/g, () => {
    return '<h3>' + headings[i++] + '</h3>';
  });
  
  // Fix the encoding
  file = file.replace(/<Separator icon="o" \/>/g, '<Separator icon="\u2726" />');
  // There may be instances of the weird char from previous get-content
  file = file.replace(/<Separator icon="[^"]*" \/>/g, '<Separator icon="\u2726" />');
  
  fs.writeFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Experiences.jsx', file);
}

fixExperiences();
