const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { getAll, insertUser, signIn, signUp,removeUser } = controller

router.use(express.json())

router.get('/', getAll)
router.post('/', insertUser)
router.post('/signIn', signIn)
router.post('/signUp', signUp)
router.delete('/:id', removeUser)

module.exports = router