import Address from '../db/Address';
import SequelizeResource from '../lib/SequelizeResource';

const addressResource = new SequelizeResource(Address);

export default addressResource.router;
