const Categorie = require('../../models/categorie')

// Get all categorie method
const getAll = (req, res) => {
    Categorie.find({},(err, categories) => {
        if (err) res.send({ msg: 'can`t get the categorie list', error: err })
        res.send(categories)
        console.log(categories)
    })
}

// Insert categorie method
const insertCategorie = (req, res) => {
    console.log(req.body)
    const categorie = new Categorie ({
        name: req.body.name,
        description: req.body.description
    })
    categorie.save(err => {
        if (err) res.send({ msg: 'Cant`t save the categorie', error: err })
        res.send({ msg: 'categorie saved', data: categorie })
    })
}

// Remove categorie method
const removeCategorie = (req, res) => {
    Categorie.findOneAndDelete({ _id: req.params.id } ,(err, doc) => {
        if (err) return res.status(500).send(err)
        res.status(200).send(doc)
    })
}


module.exports = {
    getAll,
    insertCategorie,
    removeCategorie
}