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
  // get: ((req, res) => {
  //   console.log(req.query.user);
  //   const location = 'Los Angeles, CA';
  //   const user = req.query.user;
  //   weather.get(user, location, (err, data) => {
  //     if (err) {
  //       console.log('GET weather error', err);
  //       res.send(err).status(404);
  //     } else {
  //       console.log('GET weather successful');
  //       res.send(data).status(200);
  //     }
  //   })
  // })
    get: ((req, res) => {
    const user = req.query.user;
    req.session.user = user;
    console.log(req.session);
    weather.get(user, (err, data) => {
      if (err) {
        console.log('GET weather error', err);
        res.send(err).status(404);
      } else {
        console.log('GET weather successful', data[0]);
        res.send(data).status(200);
      }
    })
  })
}