const { INTEGER, STRING, FLOAT, Sequelize } = require('sequelize')
const { connection } = require('../database/connection')

const Sale = connection.define('sales', {
    saleId:  {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    productId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'products'
            }
        }
    },
    costumerId: {
        type: INTEGER,
        references: {
            model: {
                tableName: 'costumers'
            }
        }
    },
    discount: {
        type: Sequelize.FLOAT,
        allowNull: true
    }
},{undescored: true, paranoid: true })

module.exports = { Sale }