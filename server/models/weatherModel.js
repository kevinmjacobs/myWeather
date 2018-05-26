const { Weather } = require('../../db/index.js');
const { getWeatherData } = require('../../helpers/getWeatherData.js');

module.exports = {
  post: ((data, callback) => {
    getWeatherData(37.8267,-122.4233, (err, content) => {
      if (err) {
        console.log('POST MODEL error,', err.message);
        callback(err, null);
      } else {
        console.log('POST MODEL successful');
        callback(null, content);
      }

    })
  })
}