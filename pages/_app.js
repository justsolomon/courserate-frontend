import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { loggedIn, username } from '../graphql/state/auth/authState';
import { useEffect, useState } from 'react';
import withApollo from '../lib/withApollo';
import 'focus-visible/dist/focus-visible';
import '../styles/globals.css';
import customTheme from '../components/global/customTheme';
import { networkError } from '../graphql/state/global/networkState';

function MyApp({ Component, pageProps }) {
  const [window, setWindow] = useState(false);

  useEffect(() => {
    if (localStorage) setWindow(true);
    //store loggedIn status in state
    let userLoggedIn = localStorage['loggedIn'];
    if (userLoggedIn) {
      userLoggedIn = JSON.parse(userLoggedIn);
      username(localStorage['username']);
    }
    loggedIn(userLoggedIn);

    //clear network error
    // networkError(false);
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <NextNProgress
        color='#63B3ED'
        startPosition={0.1}
        stopDelayMs={200}
        height='2'
        options={{ showSpinner: false }}
      />
      {window && <Component {...pageProps} />}
    </ChakraProvider>
  );
}

export default withApollo(MyApp);
