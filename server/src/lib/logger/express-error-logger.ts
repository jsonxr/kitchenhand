import { INTERNAL_SERVER_ERROR } from '../http-status';

export const expressErrorLogger = (err: any, req: any, res: any, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || INTERNAL_SERVER_ERROR).json(res.locals);
};

export default expressErrorLogger;
