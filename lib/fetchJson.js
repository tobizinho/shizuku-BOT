 const fetch = require('node-fetch');

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
  fetch(url, options).then(response => response.json()).then(json => {
   resolve(json)
  }).catch(reject);
 });

module.exports = fetchJson;
