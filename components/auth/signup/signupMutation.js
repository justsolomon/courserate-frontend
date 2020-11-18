import { gql } from '@apollo/client';

const REGISTER_USER = gql`
  mutation SignupMutation(
    $username: String!
    $password: String!
    $passwordConfirm: String!
    $email: String!
  ) {
    register(
      registerInput: {
        username: $username
        password: $password
        confirmPassword: $passwordConfirm
        email: $email
      }
    ) {
      email
      jwt {
        token
        expiresIn
      }
      username
      createdAt
    }
  }
`;

export default REGISTER_USER;
