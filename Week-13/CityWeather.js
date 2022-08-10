const API_key = require('./apikey')
const axios = require('axios')

class CityWeather {
    constructor(location) {
        this.url = `http://api.weatherapi.com/v1/current.json?key=${API_key['API_KEY']['key']}&q=${location}&aqi=no`
    }

    getURL() {
        return this.url
    }

    getWeather(){
        axios.get(this.url)
        .then(response => {
            console.log(`statusCode: ${response.status}`);
            let data = response.data
            console.log(data);
            return res.send(`<h1>It is ${data.current.temp_c} in ${data.location.name} Today</h1>`)
        })
        .catch(error => {
            console.error(error);
        });
    }

}

module.exports = {CityWeather}
