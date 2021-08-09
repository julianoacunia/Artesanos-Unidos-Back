const Order = require('../../models/order');

const getOrders = (req, res) => {
  Order.find({}, (err, orders) => {
    if (err) res.send({ msg: 'cant get the order list', error: err });
    res.send(orders);
  }).populate('client')
}

const getOrderById = (req, res) => {
  Order.find({ client: req.params.id }, (err, orders) => {
    if (err)
      res.send({ msg: `Cant't get the order ${req.params.id}`, error: err })
    res.send(orders)
  }).populate('client')
}

const postOrder = async (req, res) => {
  const order = new Order({
    client: req.body.client,
    total: req.body.total,
    products: req.body.products,
    date: req.body.date,
  })

  order.save(err => {
    if (err) res.send({ msg: 'Cant save the order', error: err })
    res.send({ msg: 'order saved', data: order })
  })
}

const cancelOrder = async (req, res) => {
  const response = await Order.findByIdAndUpdate(
    { _id: req.params.id },
    { status: 'CANCELADA' },
    { new: true }
  );
  if (!response) {
    res.send({ msg: 'Order not found' });
  }

  res.send({ msg: 'Order updated', data: response })
}

module.exports = {
  getOrders,
  postOrder,
  getOrderById,
  cancelOrder,
};