import { makeVar } from '@apollo/client';
import { updateStorageStatus } from '../../components/auth/actions/authActions';

export const loggedIn = makeVar(false);
export const profile = makeVar({});
export const accessToken = makeVar('');
export const expiryTime = makeVar('');
export const refreshAction = makeVar();

export const updateAuthState = (data) => {
  const { username, email, createdAt } = data.user;
  updateStorageStatus(true);
  profile({ username, email, joined: createdAt });
  accessToken(data.jwt.token);
  expiryTime(data.jwt.expiresIn - new Date().getTime());
};
