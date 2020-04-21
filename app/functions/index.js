const jwtSimple = require('jwt-simple')
const moment = require('moment')
const config = require('../../dbconfig/connectionstring.config')

//Create Token
function createToken(user) {
    const payload = {
      uid: user.id,
      ct: moment().unix(),
      wt: moment()
        .add(2, 'hours')
        .unix()
    }
    return jwtSimple.encode(payload, config.token_key)
}

module.exports = {
    createToken
}