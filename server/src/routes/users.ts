import User from '../db/User';
import { SequelizeResource } from '../lib/SequelizeResource';

class UserResource extends SequelizeResource<User> {}
const users = new UserResource(User);

export default users.router;
