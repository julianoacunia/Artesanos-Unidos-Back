const Categorie = require('../../models/categorie')

// Get all categorie method
const getAll = (req, res) => {
    Categorie.find({},(err, categories) => {
        if (err) res.send({ msg: 'can`t get the categorie list', error: err })
        res.send(categories)
    })
}

module.exports = {
    getAll
}