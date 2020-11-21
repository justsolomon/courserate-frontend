import { gql } from '@apollo/client';

const FETCH_USER = gql`
  query FetchUserQuery($username: String!) {
    user(username: $username) {
      email
      username
      createdAt
    }
  }
`;

export default FETCH_USER;
