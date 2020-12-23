import { gql } from '@apollo/client';

const DELETE_REVIEW = gql`
  mutation CreateReviewMutation($courseId: ID!, $reviewId: ID!) {
    deleteReview(courseId: $courseId, reviewId: $reviewId) {
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

export default DELETE_REVIEW;
