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