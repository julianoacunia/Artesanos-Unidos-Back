const Categorie = require('../../models/categorie')

// Get all categorie method
const getAll = (req, res) => {
    Categorie.find({},(err, categories) => {
        if (err) res.send({ msg: 'can`t get the categorie list', error: err })
        res.send(categories)
    })
}

// Insert categorie method
const insertCategorie = (req, res) => {
    const categorie = new Categorie ({
        name: req.body.name,
        description: req.body.description
    })
    categorie.save(err => {
        if (err) res.send({ msg: 'Cant`t save the categorie', error: err })
        res.send({ msg: 'categorie saved', data: categorie })
    })
}

module.exports = {
    getAll,
    insertCategorie
}