import { Box, Divider, VStack } from '@chakra-ui/react';
import ReviewContent from './ReviewContent';
import ReviewHeader from './ReviewHeader';

function CourseReview({ username, createdAt, pros, cons, index, length }) {
  return (
    <>
      <Box w='100%' px={['4', '0']} mb='3'>
        <ReviewHeader username={username} createdAt={createdAt} />
        <VStack align='flex-start'>
          <ReviewContent title='Pros' reviews={pros} />
          <ReviewContent title='Cons' reviews={cons} />
        </VStack>
      </Box>
      {index + 1 !== length && <Divider my='3' />}
    </>
  );
}

export default CourseReview;
