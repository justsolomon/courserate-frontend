import { useMutation } from '@apollo/client';
import { Box, Text, useToast, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { username } from '../../../graphql/state/auth/authState';
import { sortReviews } from '../../../graphql/state/review/reviewActions';
import { refetchCourse } from '../../../graphql/state/review/reviewState';
import BlueLink from '../../auth/form/BlueLink';
import { errorToast, successToast } from '../../auth/logout/logoutStatus';
import CREATE_REVIEW from './createReviewMutation';
import Criterion from './Criterion';
import SubmitReview from './SubmitReview';

function ReviewForm({ courseId }) {
  const user = username();
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const toast = useToast();

  const [createReview, { loading }] = useMutation(CREATE_REVIEW, {
    variables: { courseId, pros: pros.split(/\n/), cons: cons.split(/\n/) },
    onCompleted(data) {
      refetchCourse()();
      sortReviews('New', data.createReview.reviews);
      toast({ ...successToast, description: 'Review created successfully' });
      setPros('');
      setCons('');
    },
    onError({ message }) {
      toast({ ...errorToast, description: message });
    },
  });

  return (
    <Box
      as='form'
      w='100%'
      mb='4'
      px={['4', '0']}
      onSubmit={(e) => {
        e.preventDefault();
        createReview();
      }}
    >
      <Text fontSize='14px'>
        Add review as <BlueLink href={`/user/${user}`} linkText={user} />
      </Text>
      <VStack mb='1'>
        <Criterion
          label='Pros'
          content={pros}
          setContent={setPros}
          placeholder='Share some of the best reasons to learn this course'
        />
        <Criterion
          label='Cons'
          content={cons}
          setContent={setCons}
          placeholder='Share some of the downsides of learning this course'
        />
      </VStack>
      <SubmitReview disabled={cons === '' || pros === ''} loading={loading} />
    </Box>
  );
}

export default ReviewForm;
