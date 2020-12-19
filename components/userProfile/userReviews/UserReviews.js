import { VStack } from '@chakra-ui/react';
import SkeletonList from '../../homepage/postCard/SkeletonList';
import NoPosts from '../NoPosts';
import UserReview from './UserReview';

function UserReviews({ reviews, loading, username }) {
  return (
    <VStack w='100%' align={['center', 'flex-start']}>
      {loading && <SkeletonList />}
      {!loading && !reviews[0] && <NoPosts user={username} title='reviews' />}
      {reviews.map((review) => (
        <UserReview {...review} key={review.id} />
      ))}
    </VStack>
  );
}

export default UserReviews;
