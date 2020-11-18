import { expiryTime, loggedIn } from '../../../graphql/state/authState';

export const updateStorageStatus = (value) => {
  console.log(value);
  localStorage['loggedIn'] = value;
  loggedIn(value);
  console.log(loggedIn);
};
