'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Listing.belongsTo(models.Profile, { as: 'seller', foreignKey: 'sellerId' })
      Listing.belongsTo(models.Profile, { as: 'buyer', foreignKey: 'buyerId' })
    }
  }
  Listing.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('Skis', 'Ski Boots', 'Poles', 'Accessories', 'Clothing', 'Snowboards', 'Snowboard Boots', 'Other'),
      defaultValue: 'Skis',
      allowNull:false
    },
    condition: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    },
    buyerId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('For Sale', 'On Hold', 'Sold'),
      allowNull: false,
      defaultValue: 3
    },
    manufacturer: DataTypes.STRING,
    yearManufactured: DataTypes.INTEGER,
    dimensions: DataTypes.STRING,
    material: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Listing',
  });
  return Listing;
};
