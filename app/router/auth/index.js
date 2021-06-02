const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { signIn, signUp } = controller

router.use(express.json())


router.post('/signIn', signIn)
router.post('/signUp',signUp)

module.exports = router