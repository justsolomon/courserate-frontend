import { gql } from '@apollo/client';

const EDIT_COURSE = gql`
  mutation EditCourseMutation(
    $courseId: ID!
    $title: String!
    $link: String!
    $skills: [String]!
    $cost: Int!
    $level: String!
  ) {
    editCourse(
      courseId: $courseId
      title: $title
      link: $link
      skills: $skills
      cost: $cost
      level: $level
    ) {
      id
    }
  }
`;

export default EDIT_COURSE;
