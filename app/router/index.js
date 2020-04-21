const express = require('express')
const product = require('./products')
const user = require('./users')
const categorie = require('./categories')

const router = express.Router()

router.use('/products', product)
router.use('/users', user)
router.use('/categories', categorie)

module.exports = router