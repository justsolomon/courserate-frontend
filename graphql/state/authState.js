import { makeVar } from '@apollo/client';

export const loggedIn = makeVar(false);
export const username = makeVar('');
export const accessToken = makeVar('');
export const expiryTime = makeVar('');
export const refreshAction = makeVar();

export const updateStorageStatus = (value, username = '') => {
  localStorage['loggedIn'] = value;
  localStorage['username'] = username;
  loggedIn(value);
};

export const updateAuthState = (username, jwt) => {
  updateStorageStatus(true, username);
  updateJWT(jwt);
};

export const updateJWT = (jwt) => {
  accessToken(jwt.token);
  expiryTime(jwt.expiresIn - new Date().getTime());
};
