const { gql } = require('@apollo/client');

const FETCH_COURSES = gql`
  query FetchCourses {
    courses {
      title
      username
      skills
      voteCount
      reviewCount
      createdAt
    }
  }
`;

export default FETCH_COURSES;
