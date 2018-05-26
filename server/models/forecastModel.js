const { City, Forecast } = require('../../db/index.js');

get: ((location, callback) => {
    City.findOne({
      where: { name: location },
      include: [
        { model: User, required: true , where: { username: user }}
      ]
    })
    .then((results) => {
      if (results) {
        console.log('successfully got user city');
        console.log(results);
        let user_id = results.dataValues.id;
        Forecast.findAll({
          include: [
            { 
              model: City, 
              required: true , 
              where: { 
                name: location, 
                user_id: user_id 
              }
            },
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
      } else {
        callback(null, null);
      }
    })
  })