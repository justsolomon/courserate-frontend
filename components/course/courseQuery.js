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
      skills
      reviewCount
      voteCount
      reviews {
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
