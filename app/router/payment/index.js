const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { insertPayment } = controller

router.use(express.json())

router.post('/', insertPayment)

module.exports = router