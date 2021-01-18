import { gql } from '@apollo/client';

const CREATE_COURSE = gql`
  mutation CreateCourseMutation(
    $title: String!
    $link: String!
    $skills: [String]!
    $cost: Int!
    $level: String!
    $pros: [String]!
    $cons: [String]!
  ) {
    createCourse(
      title: $title
      link: $link
      skills: $skills
      cost: $cost
      level: $level
      pros: $pros
      cons: $cons
    ) {
      id
    }
  }
`;

export default CREATE_COURSE;
