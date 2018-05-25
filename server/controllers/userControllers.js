const user = require('../models/userModel');

module.exports = {
  get: ((req, res) => {
    user.get((data) => {
      // (err) && (console.log('GET users error', err.message));
      console.log('GET users successful');
      res.send(data).status(200);
    })
  })
}