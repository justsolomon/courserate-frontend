import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import withApollo from 'next-with-apollo';
import { onError } from '@apollo/client/link/error';
import { accessToken } from '../graphql/state/auth/authState';
import { networkError as netError } from '../graphql/state/global/networkState';

const httpLink = createHttpLink({
  uri: 'https://courserate.herokuapp.com/graphql',
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  const authToken = accessToken();
  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : '',
    },
  };
});

const errorLink = onError(({ networkError }) => {
  if (networkError.message === 'Failed to fetch') netError(true);
});

export default withApollo(
  (props) => {
    return new ApolloClient({
      link: errorLink.concat(authLink.concat(httpLink)),
      cache: new InMemoryCache({
        dataIdFromObject: (o) => o.id,
        typePolicies: {
          Course: {
            fields: {
              votes: {
                merge: false,
              },
            },
          },
        },
      }).restore(props.initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
