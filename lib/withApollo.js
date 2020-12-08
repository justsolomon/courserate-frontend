import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import withApollo from 'next-with-apollo';
import { accessToken } from '../graphql/state/auth/authState';

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

export default withApollo(
  (props) => {
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache({
        dataIdFromObject: (o) => o.id,
        typePolicies: {
          Course: {
            fields: {
              votes: {
                // merge(existing, incoming) {
                //   console.log(existing, incoming);
                //   return { ...existing, ...incoming };
                // },
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
