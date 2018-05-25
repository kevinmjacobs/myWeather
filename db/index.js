const Sequelize = require('sequelize');

const sequelize = new Sequelize('weather','root','',{
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('user', {
  username: { type: Sequelize.STRING, unique: true}
})

const City = sequelize.define('city', {
  name: Sequelize.STRING,
  zip: Sequelize.INTEGER
});

const Forecast = sequelize.define('forecast', {
  date:  Sequelize.DATE,
  high:  Sequelize.DOUBLE,
  low: Sequelize.DOUBLE,
  precipType:  Sequelize.STRING,
  precipProb: Sequelize.DOUBLE,
  humidity: Sequelize.DOUBLE,
  windSpeed: Sequelize.DOUBLE
});

User.hasMany(City, {foreignKey: 'user_id'});
City.belongsTo(User, {foreignKey: 'user_id'});

City.hasMany(Forecast, {foreignKey: 'city_id'});
Forecast.belongsTo(City, {foreignKey: 'city_id'});

sequelize.sync()
  .then(() => {
    console.log('database synced');
    // User
    //   .build( { username: 'thismax' } )
    //   .save()
    //   .then(() => console.log('user generated on sync'))
    //   .catch((err) => console.log('error generating user',err.message));
  });

  
module.exports.User = User;
module.exports.City = City;
module.exports.Forecast = Forecast;