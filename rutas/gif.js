const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get("/api/gif/:clave", (req, res) => {
  axios
    .get(
      `${process.env.URL_GIFT}api_key=${process.env.KEY_GIFT}&q=pokemon ${req.params.clave}`
    )
    .then((datos) => {
      res.send(datos.data);
    })
    .catch((err) => {
      console.log(err);
    });
    res.clearCookie("giphy-vpt")
});

module.exports = router;
