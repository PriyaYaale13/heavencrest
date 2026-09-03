const fs = require('fs');

function addSeparators() {
  let file = fs.readFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Experiences.jsx', 'utf8');
  
  // Replace <h3>...</h3> with <h3>...</h3>\n<Separator icon="?" />
  file = file.replace(/<h3>(.*?)<\/h3>/g, '<h3></h3>\n              <Separator icon="\u2726" />');
  
  fs.writeFileSync('D:/heavencrestwebpagesforprofessionally/heaven-crest-app/src/pages/Experiences.jsx', file);
}

addSeparators();
