import { Box } from '@chakra-ui/react';
import ReviewContent from '../../course/CourseReview/ReviewContent';
import UserReviewHeader from './UserReviewHeader';

function UserReview({ pros, cons, createdAt }) {
  return (
    <Box
      borderWidth={['1px 0px 0px 0px', '1px']}
      px='4'
      py='2'
      cursor='pointer'
      borderRadius={['none', 'md']}
      w='100%'
      _hover={{ borderColor: ['none', 'gray.600'] }}
      tabIndex='0'
      //   onClick={() => router.push(`/post/${id}`)}
    >
      <UserReviewHeader createdAt={createdAt} />
      <ReviewContent title='Pros' reviews={pros} />
      <ReviewContent title='Cons' reviews={cons} />
    </Box>
  );
}

export default UserReview;
