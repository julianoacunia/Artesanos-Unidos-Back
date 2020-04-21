const User = require('../../models/user')
const sha256 = require('sha256')
const functions = require('../../functions')

// Get all user method
const getAll = (req, res) => {
    User.find({}, { password: 0 }, (err, users) => {
      if (err) res.send({ msg: 'can`t get the user list', error: err })
      res.send(users)
    })
}

// Insert user method
const insertUser = (req, res) => {
    const user = new User ({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: sha256(req.body.password)
    })
    user.save(err => {
        if (err) res.send({ msg: 'Cant`t save the user', error: err })
        res.send({ msg: 'account saved' })
    })
}

module.exports = {
    getAll,
    insertUser
}