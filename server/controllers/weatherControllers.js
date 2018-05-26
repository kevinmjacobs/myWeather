const user = require('../models/weatherModel');

module.exports = {
  post: ((req, res) => {
    const location = req.body
    user.post(location, (err, data) => {
      if (err) {
        console.log('POST weather error', err.message);
        res.send().status(404);
      }
      console.log('POST weather successful');
      res.send(data).status(200);
    })
  })
}