import { gql } from '@apollo/client';

const CREATE_REVIEW = gql`
  mutation CreateReviewMutation(
    $courseId: ID!
    $pros: [String]!
    $cons: [String]!
  ) {
    createReview(courseId: $courseId, pros: $pros, cons: $cons) {
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

export default CREATE_REVIEW;
