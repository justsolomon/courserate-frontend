import { ChakraProvider } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import 'focus-visible/dist/focus-visible';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider } from '@apollo/client';
import { accessToken, loggedIn } from '../graphql/state/authState';
import { useEffect } from 'react';

const httpLink = createHttpLink({
  uri: 'https://courserate.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local state
  const authToken = accessToken();
  console.log(authToken);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let userLoggedIn = localStorage['loggedIn'];
    if (userLoggedIn) userLoggedIn = JSON.parse(userLoggedIn);
    loggedIn(userLoggedIn);
  }, []);

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default MyApp;
