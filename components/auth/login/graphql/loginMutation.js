import { gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      username
    }
  }
`;

export default LOGIN_USER;
