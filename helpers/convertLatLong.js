const request = require('request');
const geocoder = require('geocoder');

const convertLatLong = (location, callback) => {
  geocoder.geocode(location, (err, data) => {
    if (err) {
      console.log('Not a valid city/state', err.message);
    } else {
      if (data.status !== 'ZERO_RESULTS') {
        console.log(data);
        let coordinates = {
          // lat: data.results[0].geometry.location.lat,
          // long: data.results[0].geometry.location.lng
          lat: 37,
          long: 121
        }
        callback(coordinates);
      }
    }
  });
}

module.exports = {
  convertLatLong
}