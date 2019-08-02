import { NOT_FOUND } from '../http-status';

export const expressNotFoundLogger = (req: any, res: any) =>
  res.status(NOT_FOUND).send({
    message: req.method + ' ' + req.url + ' Not found.',
  });
export default expressNotFoundLogger;
