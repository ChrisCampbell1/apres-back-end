'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.ENUM('Skis', 'Ski Boots', 'Poles', 'Accessories', 'Clothing', 'Snowboards', 'Snowboard Boots', 'Other'),
        defaultValue: 'Skis',
        allowNull: false
      },
      condition: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5
        }
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
        model: 'Profiles',
        key: 'id'
        }
      },
      buyerId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
        model: 'Profiles',
        key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('For Sale', 'On Hold', 'Sold'),
        allowNull: false,
        defaultValue: 'For Sale'
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      yearManufactured: {
        type: Sequelize.INTEGER
      },
      dimensions: {
        type: Sequelize.STRING
      },
      material: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Listings');
  }
};
