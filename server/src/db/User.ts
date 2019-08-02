import Sequelize from 'sequelize';
import Address from './Address';
import { sequelize } from './database';
import Project from './Project';

export default class User extends Sequelize.Model {
  public static associations: {
    projects: Sequelize.Association<User, Project>;
  };

  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public googleId!: string | null;
  public name!: string;
  public givenName!: string | null; // for nullable fields
  public familyName!: string | null; // for nullable fields
  public picture!: string | null;
  public locale!: string | null;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.

  public getProjects!: Sequelize.HasManyGetAssociationsMixin<Project>; // Note the null assertions!
  public addProject!: Sequelize.HasManyAddAssociationMixin<Project, number>;
  public hasProject!: Sequelize.HasManyHasAssociationMixin<Project, number>;
  public countProjects!: Sequelize.HasManyCountAssociationsMixin;
  public createProject!: Sequelize.HasManyCreateAssociationMixin<Project>;

  public createAddress!: Sequelize.HasOneCreateAssociationMixin<Address>;
  public getAddress!: Sequelize.HasOneGetAssociationMixin<Address>;
  public setAddress!: Sequelize.HasOneSetAssociationMixin<Address, number>;

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.

  // Note this is optional since it's only populated when explicitly requested in code
  public readonly projects?: Project[];
}

User.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER,
    },
    googleId: {
      allowNull: false,
      unique: true,
      type: Sequelize.DataTypes.STRING(32),
    },
    picture: {
      allowNull: true,
      type: Sequelize.DataTypes.STRING(255),
    },
    givenName: {
      allowNull: true,
      type: Sequelize.DataTypes.STRING(128),
    },
    familyName: {
      allowNull: true,
      type: Sequelize.DataTypes.STRING(128),
    },
    name: {
      allowNull: false,
      type: Sequelize.DataTypes.STRING(128),
    },
    locale: {
      allowNull: true,
      type: Sequelize.DataTypes.STRING(2),
    },
  },
  {
    sequelize, // this bit is important
    tableName: 'users',
  },
);

User.hasMany(Project, {
  as: 'projects', // this determines the name in `associations`!
  foreignKey: 'ownerId',
  sourceKey: 'id',
});

User.hasOne(Address, { sourceKey: 'id', foreignKey: 'userId' });
