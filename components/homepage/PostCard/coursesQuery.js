const { gql } = require('@apollo/client');

const FETCH_COURSES = gql`
  query FetchCourses {
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
  }
`;

export default FETCH_COURSES;
