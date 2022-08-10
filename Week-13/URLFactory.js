const {CityWeather} = require('./CityWeather')

const URLFactory = (type, args) => {
  if (type === 'city') {
    return new CityWeather(args);
  }
//   } else if (type === 'multipleCities') {
//     return new MultipleCitiesURL(args);
//   } else if (type === 'forecast') {
//     return new CityURL(args);
//   } else {
//     return new CityURL(args);
//   }
}

module.exports = {URLFactory};