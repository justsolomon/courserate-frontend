import { gql } from '@apollo/client';

const VOTE_COURSE = gql`
  mutation VoteMutation($courseId: ID!) {
    voteCourse(courseId: $courseId) {
      voteCount
    }
  }
`;

export default VOTE_COURSE;
