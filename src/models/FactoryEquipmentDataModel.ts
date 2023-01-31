import { Sequelize, DataTypes } from 'sequelize';
import {sequelizeconnection}from '../util/sequilizeconnection';
export interface FactoryDataAttributes {
  id: number;
  name: string;
  mean_speed : number;
  mean_torgue : number;
  mean_temp : number;
  icon_library : string;
  icon_name : string;
}

const FactoryEquipmentData = sequelizeconnection.define('factoryequipmentdata', {
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
});

export default FactoryEquipmentData