//require("dotenv").config(); 

const express = require("express");
const Pokedex = require("./rutas/pokedex");
const Gif = require("./rutas/gif");
const Weather = require("./rutas/weather");

const app = express();
const PORT = process.env.PORT;

app.use(Weather)
app.use(Pokedex);
app.use(Gif);
app.get("/api", (req, res) => {
  
  res.send("hola");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
