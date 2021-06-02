const jwt = require('jsonwebtoken')
const config = require('../../config')
const User = require('../models/user')
const Role = require('../models/role')

const verifyToken = async (req, res, next) => {
    const token = req.headers['x-access-token']

    if(!token) return res.status(403).send('Not token provided')

    const decoded = jwt.verify(token, config.keys.SECRET)
    req.userId = decoded.id
    const user = await User.findById(req.userId, { password: 0})

    if(!user) return res.status(403).send('User not found')
    next()
}

const isArtesano = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i = 0; i < roles.length ; i ++) {
        if(roles[i].name === 'artesano') {
            next()
            return
        }
    }

    return res.status(403).send('Require artesano role')
}

const isProveedor = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i = 0; i < roles.length ; i ++) {
        if(roles[i].name === 'proveedor') {
            next()
            return
        }
    }

    return res.status(403).send('Require proveedor role')
}

module.exports = {
    verifyToken,
    isArtesano,
    isProveedor,
}