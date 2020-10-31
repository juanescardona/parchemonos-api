const mongoose = require('mongoose')

const url = 'mongodb://' + process.env.DB_HOST +':' + process.env.DB_PORT + '/' + process.env.DB_NAME
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useCreateIndex', true)
const db= mongoose.connection

db.on('error', () => console.error('Error en la conexión'))
db.once('open', () => console.log('Conexión establecida'))

module.exports = db