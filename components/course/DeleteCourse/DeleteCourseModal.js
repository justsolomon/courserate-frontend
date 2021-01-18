import { useMutation } from '@apollo/client';
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
import { useRouter } from 'next/router';
import { courseDeleted } from '../../../graphql/state/course/courseState';
import { errorToast, successToast } from '../../auth/logout/logoutStatus';
import DELETE_COURSE from './deleteCourseMutation';

function DeleteCourseModal({ open, closeModal, courseId }) {
  const toast = useToast();
  const router = useRouter();

  const [deleteCourse, { loading }] = useMutation(DELETE_COURSE, {
    variables: { courseId },
    onCompleted() {
      toast({
        ...successToast,
        description: 'Course deleted successfully',
      });

      closeModal();
      if (router.pathname === '/') courseDeleted(true);
      else setTimeout(() => router.push('/'), 1000);
    },
    onError({ message }) {
      toast({ ...errorToast, description: message });
    },
  });

  return (
    <Modal isOpen={open} onClose={closeModal} size='sm' isCentered>
      <ModalOverlay />

      <ModalContent textAlign='center' mx={['4', '0']}>
        <ModalHeader>Delete Course?</ModalHeader>
        <ModalBody>
          This action cannot be undone and deleted courses along with their
          reviews can never be recovered.
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal} mr='4'>
            Cancel
          </Button>
          <Button colorScheme='red' onClick={deleteCourse} isLoading={loading}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteCourseModal;
