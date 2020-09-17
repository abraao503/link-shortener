const fs = require('fs');
const { resolve } = require('path');

function compare(a, b) {
  const hitA = a.hits;
  const hitB = b.hits;

  let comparison = 0;
  if (hitA > hitB) {
    comparison = 1;
  } else if (hitA < hitB) {
    comparison = -1;
  }
  return comparison * -1;
}

function getArrayFromJson(limit = 0){
  let rawdata = fs.readFileSync(resolve(__dirname, 'urls.json'));
  let urls = JSON.parse(rawdata);
  urls.sort(compare);

  if(limit){
    return urls.slice(0, limit);
  }

  return urls;
}

module.exports = getArrayFromJson;