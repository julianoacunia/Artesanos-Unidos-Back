const express = require('express')
const controller = require('./controller')

const router = express.Router()
const { getAll, insertCategorie, removeCategorie } = controller

router.use(express.json())

router.get('/', getAll)
router.post('/',insertCategorie)
router.delete('/:id',removeCategorie)

module.exports = router