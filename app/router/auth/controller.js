const User = require('../../models/user')
const sha256 = require('sha256')
const jwt = require('jsonwebtoken')
const config = require('../../../config')
const Roles = require('../../models/role')

const signIn = async (req, res) => {
  const response = await User.findOne({ email: req.body.email })

  if (!response) {
    res.status(400).send('El usuario no existe')
  }
  const matchPassword = await User.comparePassword(req.body.password, response.password)
  //if(!matchPassword) return res.status(401).send('Las contraseñas no son iguales')

  const token = jwt.sign({ id: response._id }, config.keys.SECRET, {
    expiresIn: 86400 // 24 hours
  })

  res.send({ user: response, token: token })
}


const signUp = async (req, res) => {
  try {
    const { name, lastName, dni, email, password, category } = req.body;
    const newUser = new User({
      name,
      lastName,
      dni,
      email,
      password: sha256(password),
      category
    })

    // if (email) {
    //   const userList = await User.find();
    //   await userList.forEach((item) => {
    //     if (item.email === req.body.email) {
    //       return res.send('EL MAIL YA EXISTE')
    //     }
    //   })
    // }
    // if (roles) {
    //   const foundRoles = await Roles.find({ name: roles })
    //   newUser.roles = foundRoles.map(item => item._id)
    // }
    // else {
    //   const role = await roles.findOne({ name: "artesano" })
    //   newUser.roles = [role._id]
    // }
    await newUser.save()
    res.status(200).send('Se ha registrado correctamente')
  }
  catch (error) {
    res.status(404).send('No se pudo registrar');
  }
}

module.exports = {
  signIn,
  signUp,
}