import { AuthState, AuthActionTypes, SIGN_IN, SIGN_OUT } from './types';

const INITIAL_STATE: AuthState = {};

export default (state: AuthState = INITIAL_STATE, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, currentUser: action.payload };
    case SIGN_OUT:
      return { isSignedIn: false };
    default:
      return state;
  }
};
