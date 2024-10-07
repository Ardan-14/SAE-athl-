const { DataTypes } = require('sequelize');
const sequelize = require('../../database'); 

const Contact = sequelize.define('Contact', {
  section: {
    type: DataTypes.STRING,
    allowNull: false
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  link_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  svg_icon_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'contact',
  timestamps: false  
});

module.exports = Contact;
