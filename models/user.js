'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders, {foreignKey: 'uid'});
  };

  // User.create({email:'karine@gmail.com'});
  // User.create({email:'caio@gmail.com'});
  // User.create({email:'lion@gmail.com'});
  // User.create({email:'flora@gmail.com'});
  return User;
};