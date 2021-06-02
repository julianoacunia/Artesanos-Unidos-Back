const Roles = require('../models/role')

const createRoles = async () => {
   try {
      const count =  await Roles.estimatedDocumentCount()
      if( count > 0) return;

      const values = await Promise.all([
         new Roles({name: 'artesano'}).save(),
         new Roles({name: 'proveedor'}).save(),
      ])
   }
   catch (error) {
      console.error(error);
   }
}

module.exports = {
   createRoles,
}