const API_key = require('./apikey')
const axios = require('axios')

async function getCityForecast(url){
    let response = await axios.get(url)
    return response
}

class Forecast {
    constructor(location,days) {
        this.url = `http://api.weatherapi.com/v1/forecast.json?key=${API_key['API_KEY']['key']}&q=${location}&days=${days}&aqi=no&alerts=no`
    }

    getURL() {
        return this.url
    }

    async getForecast(){
        const result = await getCityForecast(this.url);
        return result.data
    }

}

module.exports = {Forecast}
