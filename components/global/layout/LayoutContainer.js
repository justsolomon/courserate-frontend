import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import {
  accessToken,
  expiryTime,
  refreshAction,
  updateJWT,
} from '../../../graphql/state/authState';
import REFRESH_TOKEN from './refreshMutation';
import Layout from './Layout';

function LayoutContainer({ children }) {
  const [refreshToken] = useMutation(REFRESH_TOKEN, {
    onCompleted(data) {
      updateJWT(data.refreshToken);
    },
    onError({ message }) {
      console.log('refresh error', message);
      updateStorageStatus(false);
    },
  });

  const startSilentRefresh = (loggedIn) => {
    if (loggedIn) {
      //start countdown to silent refresh after login/signup
      if (expiryTime()) {
        setTimeout(() => {
          refreshToken();
        }, expiryTime());
      } else refreshToken();
    }
  };

  //store silent refresh function in state
  refreshAction(startSilentRefresh);

  useEffect(() => {
    //run silent refresh after page load if jwt isn't in memory
    if (!accessToken()) {
      let userLoggedIn = localStorage['loggedIn'];
      if (userLoggedIn) userLoggedIn = JSON.parse(userLoggedIn);
      startSilentRefresh(userLoggedIn);
    } else console.log('already refreshed lol');
  }, []);

  return <Layout>{children}</Layout>;
}

export default LayoutContainer;
