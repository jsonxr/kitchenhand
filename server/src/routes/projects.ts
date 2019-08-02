import Project from '../db/Project';
import SequelizeResource from '../lib/SequelizeResource';

const projectResource = new SequelizeResource(Project);

export default projectResource.router;
