import { DataTypes, Model } from 'sequelize';
import { sequelize } from './database';

export default class Project extends Model {
  public id!: number;
  public ownerId!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Project.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER, // you can omit the `new` but this is discouraged
    },
    name: {
      allowNull: false,
      type: new DataTypes.STRING(128),
    },
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    tableName: 'projects',
  },
);
