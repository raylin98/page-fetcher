const request = require('request');
const fs = require('fs');

const localSave = process.argv[3];
const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(`error:`, error);
  }
  fs.writeFile(`${localSave}`, body, function(error) {
    if (error) {
      console.log(`error: `, error);
    } else {
      console.log(`Downloaded URL and saved ${response.headers['content-length']} bytes to ${localSave}`);
    }
  });
});