const { City, Forecast, User } = require('../../db/index.js');
const { getWeatherData } = require('../../helpers/getWeatherData.js');
const { convertLatLong } = require('../../helpers/convertLatLong.js');

module.exports = {
  post: ((user, location, callback) => {
    convertLatLong(location, (results) => {
      let lat = results.lat;
      let long = results.long;
      getWeatherData(lat, long, (err, content) => {
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
    });
  }),
  // get: ((user, location, callback) => {
  //   City.findOne({
  //     where: { name: location },
  //     include: [
  //       { model: User, required: true , where: { username: user }}
  //     ]
  //   })
  //   .then((results) => {
  //     if (results) {
  //       console.log('successfully got user city');
  //       console.log(results);
  //       let user_id = results.dataValues.id;
  //       Forecast.findAll({
  //         include: [
  //           { 
  //             model: City, 
  //             required: true , 
  //             where: { 
  //               name: location, 
  //               user_id: user_id 
  //             }
  //           },
  //         ]
  //       })
  //       .then((results) => {
  //         let prettyResults = [];
  //         results.forEach((result) => {
  //           prettyResults.push({
  //             id: result.dataValues.id,
  //             date: result.dataValues.date,
  //             high: result.dataValues.high,
  //             low: result.dataValues.low,
  //             precipType: result.dataValues.precipType,
  //             humidity: result.dataValues.humidity,
  //             windSpeed: result.dataValues.windSpeed
  //           })
  //         })
  //         callback(null, prettyResults);
  //       })
  //       .catch((err) => {
  //         console.log('error querying forecasts,', err.message);
  //         callback(err, null);
  //       })
  //     } else {
  //       callback(null, null);
  //     }
  //   })
  // })
  get: ((user, callback) => {
      City.findAll({
        include: [
          { model: User, required: true , where: { username: user }}
        ]
      })
      .then((results) => {
        console.log('got all user cities');
        let prettyResults = [];
        results.forEach((result) => {
          prettyResults.push(result.dataValues.name);
        })
        console.log(prettyResults);
        callback(null, prettyResults);
      })
      .catch((err) => {
        console.log('error querying forecasts,', err.message);
        callback(err, null);
      });
    })
}

