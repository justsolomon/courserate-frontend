import { gql } from '@apollo/client';

const VOTE_COURSE = gql`
  mutation VoteMutation($courseId: ID!) {
    voteCourse(courseId: $courseId) {
      voteCount
      votes {
        username
      }
    }
  }
`;

export default VOTE_COURSE;
