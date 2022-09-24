const express = require("express");
const { CityWeather } = require("./CityWeather");
const { Forecast } = require("./Forecast");
const app = express();

app.use(express.json())

app.get("/",(req,res) => {
    console.log("Request made") 
})

app.post("/weather",async (req,res)=>{
    let cities = req.query.cities.split(',')
    let url = new CityWeather(cities)
    let response = await url.getWeather()
    response = JSON.stringify(response)
    res.send(response)
})

app.post("/forecast",async (req,res)=>{
    let city = req.query.city
    let days = req.query.days
    let forecast = new Forecast(city,days)
    let response = await forecast.getForecast()
    response = JSON.stringify(response)
    res.send(response)
})

app.all("*",(req,res)=>{
    res.status(404).send({msg:"Page not found"})
})

app.listen(4040, () => console.log("Server is up & running"))