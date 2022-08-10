const {URLFactory} = require('./URLFactory')
const express = require("express");
const app = express();

app.use(express.json())

app.get("/",(req,res) => {
    console.log("Request made")
    let city = URLFactory("city","Dallas")
    city.getWeather()
})

app.post("/post",(req,res)=>{
    console.log(res)
    res.end()
})

app.all("*",(req,res)=>{
    res.status(404).send({msg:"Page not found"})
})

app.listen(4040, () => console.log("Server is up & running"))