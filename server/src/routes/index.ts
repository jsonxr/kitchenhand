import { Router } from 'express';
import addresses from './addresses';
import login from './login';
import projects from './projects';
import recipes from './recipes';
import users from './users';

const router: Router = Router();

router.use('/users', users);
router.use('/projects', projects);
router.use('/addresses', addresses);
router.use('/recipes', recipes);
router.use('/login', login);

export default router;
