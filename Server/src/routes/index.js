const router = require("express").Router()
const { getChardById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { login } = require("../controllers/login");

router.get("/character/:id", (req, res) =>{

    getChardById(req, res)
})

router.get("/login", (req, res) =>{

    login(req, res)
})

router.post("/fav", (req, res) =>{

    postFav(req, res)
})

router.delete("/fav/:id", (req, res) =>{

    deleteFav(req, res)
})

module.exports = router