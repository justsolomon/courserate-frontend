import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import {
  accessToken,
  expiryTime,
  refreshAction,
} from '../../../graphql/state/auth/authState';
import REFRESH_TOKEN from './refreshMutation';
import Layout from './Layout';
import {
  updateJWT,
  updateStorageStatus,
} from '../../../graphql/state/auth/authActions';

function LayoutContainer({ children }) {
  const [refreshToken] = useMutation(REFRESH_TOKEN, {
    onCompleted(data) {
      startSilentRefresh(true);
      updateJWT(data.refreshToken);
    },
    onError({ message }) {
      if (message === 'Refresh token has expired.') updateStorageStatus(false);
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
    }
  }, []);

  return <Layout>{children}</Layout>;
}

export default LayoutContainer;
