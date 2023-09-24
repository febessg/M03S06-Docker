const { INTEGER, STRING, FLOAT, DATE } = require('sequelize')
const { connection } = require('../database/connection');
const { Costumer } = require('./Costumer');
const { Sale } = require('./Sale');

const Product = connection.define('products', {
    productId:  {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    price: {
        type: FLOAT,
        allowNull: false
    },
    expirationDate: {
        type: DATE,
        allowNull: false
    }
},{undescored: true, paranoid: true });

Product.belongsToMany(Costumer, {through: Sale, foreignKey: 'productId', as: 'costumers'});
Costumer.hasMany(Product, {through: Sale, foreignKey: 'costumerId', as: 'products'});


module.exports = { Product }