import { ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/core';
import NextNProgress from 'nextjs-progressbar';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://courserate.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <ColorModeProvider>
          <NextNProgress
            color='#63B3ED'
            startPosition={0.1}
            stopDelayMs={200}
            height='2'
          />
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
