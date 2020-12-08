import { accessToken, expiryTime, loggedIn, username } from './authState';

export const updateStorageStatus = (value, user = '') => {
  localStorage['loggedIn'] = value;
  localStorage['username'] = user;
  loggedIn(value);
  username(user);
};

export const updateAuthState = (username, jwt) => {
  updateStorageStatus(true, username);
  updateJWT(jwt);
};

export const updateJWT = (jwt) => {
  accessToken(jwt.token);
  expiryTime(jwt.expiresIn - new Date().getTime());
};
