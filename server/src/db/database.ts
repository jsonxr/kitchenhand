import { Sequelize } from 'sequelize';
import { sequelizeLogger } from '../lib/logger';

export const sequelize = new Sequelize(process.env.PGURL!, {
  benchmark: true,
  logging: sequelizeLogger(true),
});
