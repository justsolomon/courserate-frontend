import { gql } from '@apollo/client';

const LOGOUT_USER = gql`
  mutation Logout {
    logout
  }
`;

export default LOGOUT_USER;
