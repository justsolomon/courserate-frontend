import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { expiryTime, refreshAction } from '../../../graphql/state/authState';
import REFRESH_TOKEN from './refreshMutation';
import Layout from './Layout';

function LayoutContainer({ children }) {
  const [refreshToken] = useMutation(REFRESH_TOKEN, {
    onCompleted(data) {
      console.log('refresh', data);
    },
    onError({ message }) {
      console.log('refresh error', message);
    },
  });

  const startSilentRefresh = (loggedIn) => {
    if (loggedIn) {
      if (expiryTime()) {
        setTimeout(refreshToken, expiryTime());
      } else refreshToken();
    }
  };

  //store silent refresh function in state
  refreshAction(startSilentRefresh);

  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage['loggedIn']);
    console.log(userLoggedIn);
    startSilentRefresh(userLoggedIn);
  }, []);

  return <Layout>{children}</Layout>;
}

export default LayoutContainer;
