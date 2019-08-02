// import { Recipe } from './models';
import api from '../../api';
import { Dispatch } from 'redux';
import { RECIPES_LIST, RECIPE_CREATE, RECIPE_READ, RECIPE_UPDATE, RECIPE_DESTROY } from './types';

export const listRecipes = () => async (dispatch: Dispatch) => {
  const response = await api.get('/recipes');
  const payload = response.data;
  console.log(payload);
  dispatch({
    type: RECIPES_LIST,
    payload: payload,
  });
  return response;
};

export const create = (values: any) => async (dispatch: Dispatch, getState: any) => {
  const { userId } = getState().auth;
  const response = await api.post('/recipes', { ...values, userId });
  dispatch({
    type: RECIPE_CREATE,
    payload: response.data,
  });
  return response;
};

export const read = (id: string) => async (dispatch: Dispatch) => {
  const response = await api.get(`/recipes/${id}`);
  dispatch({
    type: RECIPE_READ,
    payload: response.data,
  });
  return response;
};

export const update = (id: string, values: any) => async (dispatch: Dispatch) => {
  const response = await api.patch(`/recipes/${id}`, values);
  const payload = response.data;
  console.log(payload);
  dispatch({
    type: RECIPE_UPDATE,
    payload: payload,
  });
  return response;
};

export const destroy = (id: string) => async (dispatch: Dispatch) => {
  const response = await api.delete(`/recipes/${id}`);
  dispatch({
    type: RECIPE_DESTROY,
    payload: id,
  });
  return response;
};
