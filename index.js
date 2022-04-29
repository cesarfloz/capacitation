const express = require('express')

// Cargar variables de entorno
require('dotenv').config()

// conectar a DB
require('./config/db')

// Create a new express application instance
const app = express()
app.use(express.json())

app.use('/', require('./hello/routes'))
app.use('/companeros', require('./companeros/routes'))

app.listen(process.env.APP_PORT, () =>
  console.log('Servidor escuchando en el puerto ' + process.env.APP_PORT)
)
module.exports = app
