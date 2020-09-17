require('dotenv').config();

const shortid = require('shortid');

function createShortUrl(){
  return process.env.APP_URL + '/' + shortid.generate();
}

module.exports = createShortUrl;