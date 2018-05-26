const { City, Forecast } = require('../../db/index.js');

module.exports = {
  get: ((location, callback) => {
    Forecast.findAll({
      include: [
        { 
          model: City, 
          required: true , 
          where: { 
            name: location
          }
        }
      ]
    })
    .then((results) => {
      let prettyResults = [];
      results.forEach((result) => {
        prettyResults.push({
          id: result.dataValues.id,
          date: result.dataValues.date,
          high: result.dataValues.high,
          low: result.dataValues.low,
          precipType: result.dataValues.precipType,
          humidity: result.dataValues.humidity,
          windSpeed: result.dataValues.windSpeed
        })
      })
      callback(null, prettyResults);
    })
    .catch((err) => {
      console.log('error querying forecasts,', err.message);
      callback(err, null);
    })
  })
}


