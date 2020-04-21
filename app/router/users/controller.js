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

const signIn = (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    User.findOne(
      { email, password: sha256(password) },
      { password: 0 },
      (err, user) => {
        console.log(user)
        if (err) return res.status(500).send({ msg: 'Server Error', error: err })
        if (!user)
          return res
            .status(404)
            .send({ msg: 'Invalid Email or password', error: err })
        req.user = user
        res.status(200).send({
          messagge: 'you are logged',
          token: functions.createToken(user),
          user
        })
      }
    )
}

//  SignUp user method
const signUp = (req, res) => {
    const user = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: sha256(req.body.password)
    })
    user.save(err => {
      if (err) res.status(500).send({ msg: `Can't save the user: ${err}` })
      res.status(200).json({ token: functions.createToken(user) })
    })
}

//  Remove user method
const removeUser= (req, res) => {
    User.deleteOne({ _id: req.params.id }, err => {
      if (err)
        res.send({ msg: `Cant't delete the user ${req.params.id}`, error: err })
      res.send('User deleted')
    })
}

module.exports = {
    getAll,
    insertUser,
    signIn,
    signUp,
    removeUser
}