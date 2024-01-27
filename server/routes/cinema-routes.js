const express = require('express')
const router = express.Router();
const cinemaController = require("../controller/cinema-controller")

router.post('/', cinemaController.newCinema)

module.exports = router