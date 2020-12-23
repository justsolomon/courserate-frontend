import { gql } from '@apollo/client';

const FETCH_COURSE = gql`
  query FetchCourseQuery($courseId: ID!) {
    course(courseId: $courseId) {
      id
      title
      createdAt
      username
      link
      website
      cost
      level
      skills
      reviewCount
      voteCount
      reviews {
        id
        pros
        cons
        username
        createdAt
      }
      votes {
        username
      }
    }
  }
`;

export default FETCH_COURSE;
