const { User } = require('../../db/index.js');

module.exports = {
  get: ((callback) => {
    User.findAll()
      .then((contents) => {
        console.log('USER MODEL successfuly queried data');
        callback(contents);
      })
      .catch((err) => {
        console.log('USER MODEL error querying data', err);
      });
  })
}