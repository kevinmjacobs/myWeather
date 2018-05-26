const user = require('../models/userModel');

module.exports = {
  get: ((req, res) => {
    user.get((data) => {
      console.log('GET users successful');
      res.send(data).status(200);
    })
  }),
  post: ((req, res) => {
    const username = req.body.params.user;
    user.post(username, (err, data) => {
      if (err) {
        console.log('POST users error:', err.message);
        res.status(404).send();
      } else {
        console.log('POST users successful');
        res.status(201).send();
      }
    });
  })
}