import { Box, Divider, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import EditReviewForm from '../EditReview/EditReviewForm';
import ReviewContent from './ReviewContent';
import ReviewHeader from './ReviewHeader';

function CourseReview({ id, username, createdAt, pros, cons, index, length }) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Box w='100%' px={['4', '0']} mb='3'>
        <ReviewHeader
          username={username}
          createdAt={createdAt}
          reviewId={id}
          openEdit={() => setEdit(true)}
        />
        {edit ? (
          <EditReviewForm
            pros={pros}
            cons={cons}
            reviewId={id}
            cancelEdit={() => setEdit(false)}
          />
        ) : (
          <>
            <VStack align='flex-start'>
              <ReviewContent title='Pros' reviews={pros} />
              <ReviewContent title='Cons' reviews={cons} />
            </VStack>
          </>
        )}
      </Box>
      {index + 1 !== length && <Divider my='3' />}
    </>
  );
}

export default CourseReview;
