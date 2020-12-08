import { makeVar } from '@apollo/client';

export const loggedIn = makeVar(false);
export const username = makeVar('');
export const accessToken = makeVar('');
export const expiryTime = makeVar('');
export const refreshAction = makeVar();
