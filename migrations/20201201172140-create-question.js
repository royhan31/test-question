'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      uuid: {
        allowNull: false,
        type: Sequelize.UUID
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      updatedBy: {
        allowNull: true,
        type: Sequelize.STRING(20)
      },
      isActive: {
        allowNull: false,
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
};
