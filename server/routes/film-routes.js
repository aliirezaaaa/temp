const express = require('express')
const router = express.Router();
const filmController = require("../controller/film-controller")

router.post('/', filmController.newFilm)

module.exports = router