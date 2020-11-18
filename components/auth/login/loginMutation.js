import { gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      jwt {
        token
        expiresIn
      }
      username
      email
      createdAt
    }
  }
`;

export default LOGIN_USER;
