const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT= process.env.NODE_PORT || 3000

const experiencesRoutes = require('./routes/experiences')
app.use('/experiences', experiencesRoutes)

//localhost:5000/experiences/ranking
//localhost:5000/experiences/rate

const bookingRoutes = require('./routes/booking')
app.use('/booking', bookingRoutes)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})