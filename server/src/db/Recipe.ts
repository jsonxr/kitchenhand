import Sequelize from 'sequelize';
import { sequelize } from './database';

export default class Recipe extends Sequelize.Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public title!: string;
  public imageUrl!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Recipe.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      unique: true,
      type: Sequelize.DataTypes.STRING(255),
    },
    picture: {
      allowNull: true,
      type: Sequelize.DataTypes.STRING(255),
    },
  },
  {
    sequelize, // this bit is important
    tableName: 'recipes',
  },
);
