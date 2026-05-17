const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('./textbook/iesc101.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('./textbook/iesc101.txt', data.text);
    console.log("Extracted to textbook/iesc101.txt");
}).catch(err => {
    console.error(err);
});
