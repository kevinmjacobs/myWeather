const weather = require('../models/weatherModel');

module.exports = {
  post: ((req, res) => {
    const location = 'Los Angeles';
    const user = 'kjacobs';
    weather.post(user, location, (err, data) => {
      if (err) {
        console.log('POST weather error', err.message);
        res.send().status(404);
      }
      console.log('POST weather successful');
      res.send('Successfully posted weather data').status(200);
    })
  }),
  get: ((req, res) => {
    const location = 'Los Angeles, CA';
    const user = 'kevinmjacobs';
    weather.get(user, location, (err, data) => {
      if (err) {
        console.log('GET weather error', err);
        res.send(err).status(404);
      } else {
        console.log('GET weather successful');
        res.send(data).status(200);
      }
    })
  })
}