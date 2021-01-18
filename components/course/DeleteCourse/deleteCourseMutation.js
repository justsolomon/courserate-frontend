import { gql } from '@apollo/client';

const DELETE_COURSE = gql`
  mutation DeleteCourseMutation($courseId: ID!) {
    deleteCourse(courseId: $courseId)
  }
`;

export default DELETE_COURSE;
