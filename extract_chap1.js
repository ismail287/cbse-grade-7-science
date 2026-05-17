// Temporary script to extract text
const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('C:/Users/kstar/Desktop/iesc1dd/iesc1dd/iesc101.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('C:/Users/kstar/Desktop/iesc1dd/iesc1dd/iesc101_extracted.txt', data.text);
    console.log("Extraction complete.");
}).catch(err => console.error("Error:", err));
