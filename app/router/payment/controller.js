// SDK de Mercado Pago
const mercadopago = require('mercadopago');

const insertPayment = (req, res) => {
  // Agrega credenciales
  mercadopago.configure({
    sandbox: true,
    access_token: 'TEST-1925298792352152-101623-b03572eaabd837c0f105f2a4e0a279b4-255297630'
  });
  // Crea un objeto de preferencia
  let preference = {
    items: req.body.items.map(item => {
      return {
        title: item.tittle,
        unit_price: item.price,
        quantity: item.count,
      }
    })
  }
  mercadopago.preferences.create(preference)
    .then(function (response) {
      console.log('RESPONSE', response);
      res.send({ id: response.body.id })
    })
    .catch(function (error) {
      console.log(error);
    });

}
module.exports = {
  insertPayment
}