const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./app/router')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan');
const roles = require('./app/libs/initialSetup');

const app = express()
const port = 5000
roles.createRoles()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(cors())

app.get('/', (req, res) => {
  res.json('Bienvenido')
})

// static files
app.use(express.static(path.join(__dirname, './app/upload')))
const AuthToken = require('./app/middleware/authToken')

const mongoDBURL = require('./dbconfig/connectionstring.config')
const { patch } = require('./app/router')

mongoose
  .connect(mongoDBURL.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
  })

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
}

app.use(allowCrossDomain)
app.get('*')
app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
