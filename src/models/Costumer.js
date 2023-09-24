const { INTEGER, STRING, FLOAT } = require('sequelize')
const { connection } = require('../database/connection')

const Costumer = connection.define('costumers', {
    costumerId:  {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    balance: {
        type: FLOAT,
        allowNull: false
    }
},{undescored: true, paranoid: true })

module.exports = { Costumer }