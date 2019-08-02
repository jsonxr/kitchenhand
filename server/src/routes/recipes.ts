import Recipe from '../db/Recipe';
import { SequelizeResource } from '../lib/SequelizeResource';

// class RecipeResource extends SequelizeResource<Recipe> {}
const recipes = new SequelizeResource(Recipe);

export default recipes.router;
