import { useReactiveVar } from '@apollo/client';
import { VStack } from '@chakra-ui/react';
import { allReviews } from '../../../graphql/state/review/reviewState';
import CourseReview from './CourseReview';

function CourseReviewList() {
  const reviews = useReactiveVar(allReviews);

  return (
    <VStack align='flex-start' spacing='0' w='100%'>
      {reviews.map((review, index) => (
        <CourseReview
          {...review}
          key={index}
          index={index}
          length={reviews.length}
        />
      ))}
    </VStack>
  );
}

export default CourseReviewList;
