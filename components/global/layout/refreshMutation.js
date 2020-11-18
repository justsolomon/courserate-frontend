import { gql } from '@apollo/client';

const REFRESH_TOKEN = gql`
  mutation RefreshMutation {
    refreshToken {
      token
      expiresIn
    }
  }
`;

export default REFRESH_TOKEN;
