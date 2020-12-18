import { VStack } from '@chakra-ui/react';
import SkeletonList from '../../homepage/postCard/SkeletonList';
import UserReview from './UserReview';

function UserReviews({ reviews, loading }) {
  return (
    <VStack w='100%'>
      {loading && <SkeletonList />}
      {reviews.map((review) => (
        <UserReview {...review} key={review.id} />
      ))}
    </VStack>
  );
}

export default UserReviews;
