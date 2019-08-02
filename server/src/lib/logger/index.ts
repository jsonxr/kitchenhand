import { Debugger } from 'debug';

export { expressNotFoundLogger } from './express-notfound-logger';
export { expressRequestLogger } from './express-request-logger';
export { expressErrorLogger } from './express-error-logger';
export { log } from './log';
import log from './log';

const logSql: Debugger = log.extend('sql');
export const sequelizeLogger = (benchmark: boolean) =>
  benchmark ? (message: string, ms: any) => logSql(`${message} +${ms}ms`) : (message: string) => logSql(message);
