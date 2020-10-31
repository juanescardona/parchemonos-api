const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT= process.env.NODE_PORT || 3000

//mongo connection
require('./connection/mongoConnection')

const experiencesRoutes = require('./routes/experiences')
app.use('/experiences', experiencesRoutes)

const usersRoutes = require('./routes/users')
app.use('/users', usersRoutes)

//localhost:5000/experiences/ranking
//localhost:5000/experiences/rate

const bookingRoutes = require('./routes/booking')
app.use('/booking', bookingRoutes)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})