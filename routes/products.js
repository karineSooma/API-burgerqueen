const router = require('express').Router();
const models = require('../models');
const Products = models.Products;

router.get('/', (req, res) => {
  Products.findAll()
    .then(products => 
      res.send(products))
  });

router.get('/:productid', (req, res) => {
  Products.findOne({where: {id:req.params.productid}})
    .then(product => 
      res.send(product))
});

router.post('/', (req, res) => {
  Products.create(req.body)
    .then(order => {
      res.status(201).send(product);
    })
});

router.put('/:productid', (req, res) => {
  Products.update({...req.body}, {where: {id: req.params.productid}})
    .then(() => {
      Products.findByPk(req.params.productid).then(product => res.send(product.dataValues))
    });
});

router.delete('/:productid', (req, res) => {
  Products.destroy({where: {id: req.params.productid}})
    .then(product =>
      res.sendStatus(200))
});

module.exports = router;

