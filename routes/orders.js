const router = require('express').Router();
const models = require('../models');
const Orders = models.Orders;
const User = models.User;
const Products = models.Products;


// router.get('/', (req, res) => {
//   Orders.findAll({include: [{model: OrderProducts, include: [Products]}, User]})
//     .then(orders => 
//       res.send(orders))
//   });

// router.get('/:orderid', (req, res) => {
//   Orders.findByPk(req.params.orderid, ({include: [{model: OrderProducts, include: [Products]}, User]}))
//     .then(order => 
//       res.send(order))
// });

router.post('/', (req, res) => {
  Orders.create(req.body)
    .then(order => {
      res.status(201).send(order);
    })
});

router.put('/:orderid', (req, res) => {
  Orders.update({...req.body}, {where: {id: req.params.orderid}})
    .then(() => {
      Orders.findByPk(req.params.orderid).then(order => res.send(order.dataValues))
    });
});

router.delete('/:orderid', (req, res) => {
  Orders.destroy({where: {id: req.params.orderid}})
    .then(order =>
      res.sendStatus(200))
});

module.exports = router;

