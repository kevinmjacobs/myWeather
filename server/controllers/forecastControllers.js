const forecast = require('../models/forecastModel');

module.exports = {
  get: ((req, res) => {
    let location = req.query.location;
    forecast.get(location, (err, data) => {
      if (err) {
        console.log('GET forecast error', err.message);
        res.send().status(404);
      }
      console.log('GET forecast successful');
      res.send(data).status(200);
    })
  })
}