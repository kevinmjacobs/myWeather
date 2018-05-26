const weather = require('../models/weatherModel');

module.exports = {
  post: ((req, res) => {
    const location = 'Los Angeles';
    const user = 'kjacobs'
    weather.post(user, location, (err, data) => {
      if (err) {
        console.log('POST weather error', err.message);
        res.send().status(404);
      }
      console.log('POST weather successful');
      res.send(data).status(200);
    })
  })
}