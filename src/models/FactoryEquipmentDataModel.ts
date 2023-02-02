import { DataTypes } from 'sequelize';
import {sequelizeconnection}from '../util/sequilizeconnection';

const FactoryEquipmentData = sequelizeconnection.define('factoryequipementdata', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mean_speed: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  mean_torque: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  mean_temp: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  icon_library: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  icon_name : {
    type : DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName : true
});

export default FactoryEquipmentData