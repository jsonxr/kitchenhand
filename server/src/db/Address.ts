import { DataTypes, Model } from 'sequelize';
import { sequelize } from './database';

export default class Address extends Model {
  public userId!: number;
  public line1!: string;
  public line2!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Address.init(
  {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    line1: {
      allowNull: false,
      type: new DataTypes.STRING(128),
    },
    line2: {
      allowNull: true,
      type: new DataTypes.STRING(128),
    },
  },
  {
    sequelize, // this bit is important
    tableName: 'addresses',
  },
);
