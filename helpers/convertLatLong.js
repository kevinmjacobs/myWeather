const request = require('request');
const geocoder = require('geocoder');

const convertLatLong = (location, callback) => {
  geocoder.geocode(location, (err, data) => {
    if (err) {
      console.log('Not a valid city/state', err.message);
    } else {
      if (data.status !== 'ZERO_RESULTS') {
        let coordinates = {
          lat: data.results[0].geometry.location.lat,
          long: data.results[0].geometry.location.lng
        }
        callback(coordinates);
      }
    }
  });
}

module.exports = {
  convertLatLong
}