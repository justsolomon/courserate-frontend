import { useMutation, useReactiveVar } from '@apollo/client';
import { Box, Button, HStack, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { sortReviews } from '../../../graphql/state/review/reviewActions';
import {
  coursePostId,
  refetchCourse,
} from '../../../graphql/state/review/reviewState';
import { errorToast, successToast } from '../../auth/logout/logoutStatus';
import Criterion from '../CreateReview/Criterion';
import SubmitReview from '../CreateReview/SubmitReview';
import EDIT_REVIEW from './editReviewMutation';

function EditReviewForm(props) {
  const { reviewId, cancelEdit } = props;
  const courseId = useReactiveVar(coursePostId);
  const toast = useToast();

  const [pros, setPros] = useState(props.pros.join('\n'));
  const [cons, setCons] = useState(props.cons.join('\n'));

  const [editReview, { loading }] = useMutation(EDIT_REVIEW, {
    variables: {
      courseId,
      reviewId,
      pros: pros.split(/\n/),
      cons: cons.split(/\n/),
    },
    onCompleted(data) {
      refetchCourse()();
      sortReviews('New', data.editReview.reviews);
      cancelEdit();
      toast({ ...successToast, description: 'Changes saved successfully' });
    },
    onError({ message }) {
      toast({ ...errorToast, description: message });
    },
  });

  return (
    <Box
      as='form'
      onSubmit={(e) => {
        e.preventDefault();
        editReview();
      }}
    >
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
      <HStack float='right'>
        <Button
          fontSize={['sm', '15px']}
          borderRadius='base'
          onClick={cancelEdit}
        >
          Cancel
        </Button>
        <SubmitReview
          disabled={cons === '' || pros === ''}
          loading={loading}
          edit
        />
      </HStack>
    </Box>
  );
}

export default EditReviewForm;
