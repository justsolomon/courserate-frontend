import { gql } from '@apollo/client';

const FETCH_USER = gql`
  query FetchUserQuery($username: String!) {
    user(username: $username) {
      user {
        email
        username
        createdAt
      }
      courses {
        id
        title
        username
        skills
        voteCount
        reviewCount
        createdAt
        votes {
          username
        }
      }
      reviews {
        id
        pros
        cons
        username
        createdAt
      }
    }
  }
`;

export default FETCH_USER;
