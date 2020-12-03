import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import { loggedIn } from '../graphql/state/authState';
import { useEffect } from 'react';
import withApollo from '../lib/withApollo';
import 'focus-visible/dist/focus-visible';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //store loggedIn status in state
    let userLoggedIn = localStorage['loggedIn'];
    if (userLoggedIn) userLoggedIn = JSON.parse(userLoggedIn);
    loggedIn(userLoggedIn);
  }, []);

  return (
    <ChakraProvider>
      <NextNProgress
        color='#63B3ED'
        startPosition={0.1}
        stopDelayMs={200}
        height='2'
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default withApollo(MyApp);
