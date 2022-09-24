const API_key = require('./apikey')
const axios = require('axios')

async function getCityData(url){
    let response = await axios.get(url)
    return response
}

class CityWeather {
    constructor(locations) {
        this.urls = []
        this.data = []
        locations.forEach(location => {
            this.urls.push(`http://api.weatherapi.com/v1/current.json?key=${API_key['API_KEY']['key']}&q=${location}&aqi=no`)
        });
    }

    getURL() {
        return this.urls
    }

    async getWeather(){
       
        for (let i = 0; i < this.urls.length; i++) {
            const result = await getCityData(this.urls[i]);
            this.data.push(result.data)
        }
        
        return this.data
    }

}

module.exports = {CityWeather}
