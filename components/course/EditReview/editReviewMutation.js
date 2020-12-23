import { gql } from '@apollo/client';

const EDIT_REVIEW = gql`
  mutation CreateReviewMutation(
    $courseId: ID!
    $reviewId: ID!
    $pros: [String]!
    $cons: [String]!
  ) {
    editReview(
      courseId: $courseId
      reviewId: $reviewId
      pros: $pros
      cons: $cons
    ) {
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

export default EDIT_REVIEW;
