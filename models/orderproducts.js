'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Products, {foreignKey: 'productId'});
    OrderProducts.belongsTo(models.Orders, {foreignKey: 'orderId'});
  };

  // sequelize.sync()
  //   .then(() => {
  //     OrderProducts.update({orderId: 1, {where:{id:1}}})
  //   })

  return OrderProducts;
};