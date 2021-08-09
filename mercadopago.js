const mercadopago = require('mercadopago')

const configureMercadoPago = () => {
    try {
        mercadopago.configure({
            client_id: "CLIENT_ID",
            client_secret: "CLIENT_SECRET"
        })
    }
    catch (error) {
        console.log(error)
    }
}
configureMercadoPago()

module.exports = async (req, res) => {
    const { items, payer } = JSON.parse(req.body)
    mercadopago.preferences.create({ items, payer })
        .then(response => {
            console.log('RESPONSE', response);
            res.send({ preferenceId: response.body.init_point.split('pref_id=')[1] })
        })
        .catch(error => {
            console.log(error)
            res.status(403).send(error)
        })
}