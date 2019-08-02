import { Recipe } from './models';

export const RECIPES_LIST = 'RECIPES_LIST';
export const RECIPE_CREATE = 'RECIPES_CREATE';
export const RECIPE_READ = 'RECIPES_READ';
export const RECIPE_UPDATE = 'RECIPES_UPDATE';
export const RECIPE_DESTROY = 'RECIPE_DESTROY';

export interface RecipesState {
  data: Recipe[];
}

export interface RecipeListAction {
  type: typeof RECIPES_LIST;
  payload: any;
}

export interface RecipeCrudAction {
  type: typeof RECIPE_CREATE;
  payload: any;
}

export interface RecipeReadAction {
  type: typeof RECIPE_READ;
  payload: any;
}

export interface RecipeUpdateAction {
  type: typeof RECIPE_UPDATE;
  payload: any;
}

export interface RecipeDeleteAction {
  type: typeof RECIPE_DESTROY;
  payload: any;
}

export type RecipeActionTypes =
  | RecipeListAction
  | RecipeCrudAction
  | RecipeReadAction
  | RecipeUpdateAction
  | RecipeDeleteAction;
