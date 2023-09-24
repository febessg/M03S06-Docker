'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('sales', { 
    sale_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'product_id'
      }
    },
    costumer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'costumers',
        key: 'costumer_id'
      }
    },
    discount: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    deleted_at: {
      type: Sequelize.DATE
    }
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
