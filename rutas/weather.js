const {Router} = require('express');
const axios = require("axios");
const router = Router();

const def ={
  "coord":{
  "lon":-0.1257,
  "lat":51.5085
  },
  "weather":[
  {
  "id":803,
  "main":"Clouds",
  "description":"broken clouds",
  "icon":"04n"
  }
  ],
  "base":"stations",
  "main":{
  "temp":285.83,
  "feels_like":285.29,
  "temp_min":284.82,
  "temp_max":286.63,
  "pressure":1004,
  "humidity":82
  },
  "visibility":10000,
  "wind":{
  "speed":5.14,
  "deg":230
  },
  "clouds":{
  "all":74
  },
  "dt":1665873848,
  "sys":{
  "type":2,
  "id":2075535,
  "country":"GB",
  "sunrise":1665815038,
  "sunset":1665853700
  },
  "timezone":3600,
  "id":2643743,
  "name":"?????",
  "cod":200
  }

router.get('/api/weather/:lugar', (req, res) => {
    axios.get(`${process.env.URL_WEATHER}q=${req.params.lugar}&APPID=${
        process.env.KEY_WEATHER
      }`)
    .then((datos) => {
      res.send(datos.data);
    }).catch((err) => res.send(def));
})

module.exports = router;