import { NextFunction, Request, Response, Router } from 'express';
import { CREATED, NOT_FOUND } from 'http-status-codes';

const limit = 3;

export default (model: any, fn?: (router: Router) => void): Router => {
  const router = Router();
  if (fn) {
    fn(router);
  }

  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const obj = await model.create(req.body);
      res.status(CREATED).json(obj);
    } catch (e) {
      e.statusCode = '400';
      next(e);
    }
  });

  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const offset = req.query.offset ? req.query.offset : 0;
      const obj = await model.findAll({ offset, limit });
      res.json(obj);
    } catch (e) {
      next(e);
    }
  });

  router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const obj = await model.findByPk(req.params.id);
      if (obj) {
        res.json(obj);
      } else {
        res.status(NOT_FOUND).send();
      }
    } catch (e) {
      next(e);
    }
  });

  router.put('/:id', async (req, res, next) => {
    try {
      const obj = await model.findByPk(req.params.id);
      if (obj) {
        await obj.update(req.body);
        res.json(obj);
      } else {
        res.status(NOT_FOUND).send();
      }
    } catch (e) {
      next(e);
    }
  });

  return router;
};
