const request = require('request');
const { API_KEY } = require('../darksky.config');

const getWeatherData = (lat, long, callback) => {
  request(`https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`, (err, res, body) => {
    if (err) {
      console.log('Error handling API request', err.message);
      callback(err, null);
    }
    console.log('API request successful,', res.statusCode);
    console.log('API request body:', body);
    callback(null, body);
  })
}

module.exports.getWeatherData = getWeatherData;