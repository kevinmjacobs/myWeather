const request = require('request');
const { API_KEY } = require('../config/darksky.config');

const getWeatherData = (lat, long, callback) => {
  request(`https://api.darksky.net/forecast/${API_KEY}/${lat},${long}`, (err, res, body) => {
    if (err) {
      console.log('Error handling API request', err.message);
      callback(err, null);
    }
    callback(null, JSON.parse(body).daily.data);
  })
}

module.exports.getWeatherData = getWeatherData;