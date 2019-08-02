import { User } from './models';
import { AuthActionTypes, SIGN_IN, SIGN_OUT } from './types';
import api from '../../api';

export const googleSignIn = (token: string) => async (dispatch: any, getState: any) => {
  const loginPayload = {
    provider: 'google',
    token: token,
  };
  const response = await api.post('/login', loginPayload);
  dispatch({
    type: SIGN_IN,
    payload: response.data,
  });
  return response;
};

// export const signIn = (user: User): AuthActionTypes => {
//   console.log(user.token);
//   return { type: SIGN_IN, payload: user };
// };

export const signOut = (): AuthActionTypes => ({ type: SIGN_OUT });
