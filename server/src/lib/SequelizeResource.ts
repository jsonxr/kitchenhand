import { NextFunction, Request, RequestHandler, Response, Router } from 'express';
import { Model } from 'sequelize';
import { CREATED } from './http-status';

interface Route {
  method: string;
  path: string;
  fn: RequestHandler;
}

/**
 * @Endpiont('GET', '/')
 * myList(req, res, next) {}
 *
 * @param method
 * @param path
 */
export const Endpoint = (method: string, path: string) => {
  return (target: any, key: string, descriptor: PropertyDescriptor): void => {
    const resource: any = target.constructor;
    resource.route(method, path, target[key]);
  };
};

/**
 * @POST('/') is sugar for @Endpoint('POST', '/')
 * @param path
 */
export const POST = (path: string) => Endpoint('POST', path);

/**
 * @PUT('/:id') is sugar for @Endpoint('PUT', '/:id')
 * @param path
 */
export const PUT = (path: string) => Endpoint('PUT', path);

/**
 * @PATCH('/:id') is sugar for @Endpoint('PATCH', '/:id')
 * @param path
 */
export const PATCH = (path: string) => Endpoint('PATCH', path);

/**
 * @GET('/:id') is sugar for @Endpoint('GET', '/:id')
 * @param path
 */
export const GET = (path: string) => Endpoint('GET', path);

/**
 * @DELETE('/:id') is sugar for @Endpoint('DELETE', '/:id')
 * @param path
 */
export const DELETE = (path: string) => Endpoint('DELETE', path);

/**
 * @OPTIONS('/:id') is sugar for @Endpoint('OPTIONS', '/:id')
 * @param path
 */
export const OPTIONS = (path: string) => Endpoint('OPTIONS', path);

/**
 * This is a controller that publishes a set of routes that are intended
 * to be resource oriented rest.  Provides the basic List + CRUD. It also
 * handles errors when dealing with async methods.  Do not use this class
 * unless you are certain you want the full resource oriented rest treatment.
 *
 * I didn't try compiling the following but this is basically how you use it.
 * <pre><code>
 * import express from 'express';
 * import { User } from './models/User';
 * import { Account } from './models/Account';
 * import { GET, SequelizeResource } from '@jsonxr/sequelize-resource';
 *
 * // User Resource
 * const users = new SequelizeResource(User);
 *
 * // Account Resource
 * class AccountResource extends SequelizeResource {
 *   @GET('/active')
 *   public async login(req, res, next) {
 *     res.json({ method: 'active accounts...' });
 *   }
 * }
 * const accounts = new AccountResource(User);
 *
 * cont app = express();
 * app.use('/users', users.router);
 * app.use('/accounts', accounts.router)
 * </code></pre>
 *
 * Examples:
 *
 * GET /users
 * POST /users
 * GET /users/:id
 * PUT /users/:id
 * DELETE /users/:id
 *
 * GET /accounts
 * POST /accounts
 * GET /accounts/:id
 * PUT /accounts/:id
 * DELETE /accounts/:id
 * GET /accounts/active
 */
export class SequelizeResource<T extends Model> {
  public static endpoints = new Map<string, Route>();

  public static route(method: string, path: string, fn: RequestHandler) {
    this.endpoints.set(`${method} ${path}`, { method, path, fn });
  }

  public router: Router;

  // https://www.typescriptlang.org/docs/handbook/generics.html
  // See: Using Class Types in Generics to understand
  //      (new () => T)
  // This is simply a reference to the constructor of the Model
  public modelClass: (new () => T) & typeof Model;

  constructor(modelClass: (new () => T) & typeof Model) {
    this.modelClass = modelClass;
    this.router = Router();
    const endpoints: Map<string, Route> = (this.constructor as any).endpoints;
    endpoints.forEach(route => {
      // This translates to calls like this...
      //
      //     router.get('/', obj.fn.bind(obj));
      //
      // The bind allows us to call the instance method with a proper "this".
      //
      (this.router as any)[route.method.toLowerCase()](route.path, route.fn.bind(this));
    });
  }

  /**
   * list
   * @param req
   * @param res
   * @param next
   */
  @GET('/')
  public async list(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await this.modelClass.findAll();
      res.json(results);
    } catch (e) {
      next(e);
    }
  }

  /**
   * create
   * @param req
   * @param res
   * @param next
   */
  @POST('/')
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const obj = await this.modelClass.create(req.body);
      res.status(CREATED).json(obj);
    } catch (e) {
      next(e);
    }
  }

  /**
   * read
   * @param req
   * @param res
   * @param next
   */
  @GET('/:id')
  public async read(req: Request, res: Response, next: NextFunction) {
    try {
      const obj = await this.modelClass.findByPk(req.params.id);
      res.json(obj);
    } catch (e) {
      next(e);
    }
  }

  /**
   * update
   * @param req
   * @param res
   * @param next
   */
  @PUT('/:id')
  public async update(req: Request, res: Response, next: NextFunction) {
    try {
      const obj: T | null = await this.modelClass.findByPk(req.params.id);
      if (obj) {
        obj.update(req.body);
        res.json(obj);
      } else {
        res.status(404).send();
      }
    } catch (e) {
      next(e);
    }
  }

  /**
   * delete
   * @param req
   * @param res
   * @param next
   */
  @DELETE('/:id')
  public async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const obj: T | null = await this.modelClass.findByPk(req.params.id);
      if (obj) {
        obj.destroy();
        res.json(obj);
      } else {
        res.status(404).send();
      }
    } catch (e) {
      next(e);
    }
  }
}

export default SequelizeResource;
