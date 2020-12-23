import { useMutation, useReactiveVar } from '@apollo/client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { sortReviews } from '../../../graphql/state/review/reviewActions';
import {
  coursePostId,
  refetchCourse,
} from '../../../graphql/state/review/reviewState';
import { errorToast, successToast } from '../../auth/logout/logoutStatus';
import DELETE_REVIEW from './deleteReviewMutation';

function DeleteReviewModal({ open, closeModal, reviewId }) {
  const courseId = useReactiveVar(coursePostId);
  const toast = useToast();

  const [deleteReview, { loading }] = useMutation(DELETE_REVIEW, {
    variables: { courseId, reviewId },
    onCompleted(data) {
      refetchCourse()();
      sortReviews('New', data.deleteReview.reviews);
      toast({ ...successToast, description: 'Review deleted successfully' });
      closeModal();
    },
    onError({ message }) {
      toast({ ...errorToast, description: message });
    },
  });

  return (
    <Modal isOpen={open} onClose={closeModal} size='sm' isCentered>
      <ModalOverlay />

      <ModalContent textAlign='center' mx={['4', '0']}>
        <ModalHeader>Delete Review?</ModalHeader>
        <ModalBody>
          This action cannot be undone and deleted reviews can never be
          recovered.
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal} mr='4'>
            Cancel
          </Button>
          <Button colorScheme='red' onClick={deleteReview} isLoading={loading}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteReviewModal;
