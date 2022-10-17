const {Router} = require('express');
const axios = require("axios");
const router = Router();

const def ={
  name:"?????",
  id:"???",
  base_experience:"????",
  weight:"????"
}

router.get('/api/pokedex/:clave', (req, res) => {
    axios.get(`${process.env.URL_POKEMON}${req.params.clave}`)
    .then((datos) => {
      res.send(datos.data);
    }).catch((err) => res.send(def));
})

module.exports = router;