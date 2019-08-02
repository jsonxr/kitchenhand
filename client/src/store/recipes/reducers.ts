import { mapKeys } from 'lodash';
import { RecipesState, RecipeActionTypes, RECIPES_LIST, RECIPE_READ } from './types';
import { Recipe } from './models';

const INITIAL_STATE: RecipesState = { data: [] };

export default (state: RecipesState = INITIAL_STATE, action: RecipeActionTypes): RecipesState => {
  switch (action.type) {
    case RECIPES_LIST:
      return { ...state, ...mapKeys(action.payload, (r: Recipe) => r.id) };
    case RECIPE_READ:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
