import { makeVar } from '@apollo/client';
import { updateStorageStatus } from '../../components/auth/actions/authActions';

export const loggedIn = makeVar(false);
export const profile = makeVar({});
export const accessToken = makeVar('');
export const expiryTime = makeVar('');
export const refreshAction = makeVar();

export const updateAuthState = (data) => {
  const { username, email, createdAt, jwt } = data;
  updateStorageStatus(true);
  profile({ username, email, joined: createdAt });
  accessToken(jwt.token);
  expiryTime(jwt.expiresIn - new Date().getTime());
};
