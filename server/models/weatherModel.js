const { City, Forecast } = require('../../db/index.js');
const { getWeatherData } = require('../../helpers/getWeatherData.js');

module.exports = {
  post: ((user, location, callback) => {
    getWeatherData(37.8267,-122.4233, (err, content) => {
      if (err) {
        console.log('POST MODEL error,', err.message);
        callback(err, null);
      } else {
        console.log('POST MODEL successful');
        City.findOne( { where: { name: location} } )
          .then((results) => {
            if (results) {
              //update forecast table for city
              let city_id = results.dataValues.id;
              Forecast.destroy({
                where: { city_id: city_id}
              })
              .then(() => {
                content.forEach((day) => {
                  new Forecast({
                    date: new Date(day.time*1000),
                    high: day.temperatureHigh,
                    low: day.temperatureLow,
                    precipType: day.precipType,
                    precipProb: day.precipProbability,
                    humidity: day.humidity,
                    windSpeed: day.windSpeed,
                    city_id: city_id
                  })
                  .save()
                  .then(() => console.log('forecast generated'))
                  .catch((err) => console.log('error generating forecast',err.message));
                })
              })

            } else {
              //create record in cities for city and user
              new City({
                name: location,
                zip: '90027',
                user_id: user
              })
              .save()
              .then(() => {
                content.forEach((day) => {
                  new Forecast({
                    date: new Date(day.time),
                    high: day.temperatureHigh,
                    low: day.temperatureLow,
                    precipType: day.precipType,
                    precipProb: day.precipProb,
                    humidity: day.humidity,
                    windSpeed: day.windSpeed,
                    city_id: city_id
                  })
                  .save()
                  .then(() => console.log('forecast generated'))
                  .catch((err) => console.log('error generating forecast',err.message));
                })
              })
            }
          })
          .then(() => {
            console.log('Found city from query');
            callback(null, content);
          })
          .catch((err) => {
            console.log('POST ')
            callback(err, null);
          })
      }
    })
  })
}