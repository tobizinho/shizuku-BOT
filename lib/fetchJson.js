const fetch = require('node-fetch');
const axios = require('axios');

module.exports = {
 fetchJson: (url, options) => new Promise(async (resolve, reject) => {
  fetch(url, options).then(response => response.json()).then(json => {
   resolve(json)
  }).catch(reject);
 }),
 getBuffer: (url, options) => new Promise(async (resolve, reject) => {
  options ? options: {}
  await axios({
   method: "get", url, headers: {
    'DNT': 1, 'Upgrade-Insecure-Request': 1
   }, ...options, responseType: 'arraybuffer'
  }).then((res) => {
   resolve(res.data)
  }).catch(reject);
 })
};