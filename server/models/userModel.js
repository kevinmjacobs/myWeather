const { User } = require('../../db/index.js');

module.exports = {
  get: ((callback) => {
    User.findAll()
      .then((contents) => {
        console.log('USER MODEL successfuly queried data');
        callback(null, contents);
      })
      .catch((err) => {
        console.log('USER MODEL error querying data', err);
        callback(err, null);
      });
  }),

  post: ((username, callback) => {
    User.findOrCreate({
      where: {username: username}
    })
    .spread((user, created) => {
      console.log(user);
      if (created) {
        console.log('USER MODEL post user results');
      } else {
        user.save
        console.log('USER MODEL user already exists');
      }
      callback(null, user);
    })
    .catch((err) => {
      console.log('USER MODEL post error,', err.message);
      callback(err, null);
    })
  })
}