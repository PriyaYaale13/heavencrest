const fs = require('fs');
let file = fs.readFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Home.jsx', 'utf8');

const replacements = [
  { h3: 'Comfort', file: 'comfort_3d_icon.jpg' },
  { h3: 'Convenience', file: 'convenience_3d_icon.jpg' },
  { h3: 'Hospitality', file: 'hospitality_3d_icon.jpg' },
  { h3: 'Free Wi-Fi', file: 'wifi_3d_icon.jpg' },
  { h3: 'Free Breakfast', file: 'breakfast_3d_icon.jpg' },
  { h3: 'Free Parking', file: 'parking_3d_icon.jpg' },
  { h3: 'Air-Conditioned Rooms', file: 'ac_3d_icon.jpg' },
  { h3: 'Laundry Service', file: 'laundry_3d_icon.jpg' },
  { h3: 'Room Service', file: 'room_service_3d_icon.jpg' }
];

replacements.forEach(rep => {
  let searchTarget = '<h3>' + rep.h3 + '</h3>';
  let split = file.split(searchTarget);
  if (split.length > 1) {
    // Find the last <div className="feature-icon"> before the h3
    let before = split[0];
    let iconTagIndex = before.lastIndexOf('<div className="feature-icon">');
    if (iconTagIndex !== -1) {
      let part1 = before.substring(0, iconTagIndex);
      // The new inserted content
      let newContent = '<div className="feature-icon"><img src="/assets/images/' + rep.file + '" alt="' + rep.h3 + '" /></div>\n                <h3>' + rep.h3 + '</h3>';
      
      file = part1 + newContent + split.slice(1).join(searchTarget);
    }
  }
});

fs.writeFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Home.jsx', file);
