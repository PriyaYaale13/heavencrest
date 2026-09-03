const fs = require('fs');

function fixIcons(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<Separator icon="\?" \/>/g, '<Separator icon="\u2726" />');
  fs.writeFileSync(file, content);
}

fixIcons('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Home.jsx');
fixIcons('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/About.jsx');
