import { User } from './models';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export interface AuthState {
  isSignedIn?: boolean;
  currentUser?: User;
}

export interface GoogleSignInAction {
  type: typeof SIGN_IN;
  payload: User;
}

export interface SignOutAction {
  type: typeof SIGN_OUT;
}

export type AuthActionTypes = GoogleSignInAction | SignOutAction;
