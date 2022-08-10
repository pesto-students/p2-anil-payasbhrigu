const API_key = require('./apikey')

class CityURL {
    constructor(locations) {
        this.url = `http://api.weatherapi.com/v1/current.json?key=${API_key['API_KEY']['key']}&q=${location}&aqi=no`
    }

    getURL() {
        return this.url
    }

}

module.exports = {CityURL}
