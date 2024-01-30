const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const cinemaRoute = require('../routes/cinema-routes')
const filmRoute = require('../routes/film-routes')

const app = express()
app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

// app.post('/AddCinema', (req, res) => {
//     res.send(`New cinema added successfuly.`)
// })

app.use('/AddCinema', cinemaRoute)
app.use('/AddFilm', filmRoute)

app.listen(process.env.PORT || 8081)