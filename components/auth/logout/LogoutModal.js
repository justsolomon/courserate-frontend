import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

function LogoutModal({ open, closeModal, loading, logout }) {
  return (
    <Modal isOpen={open} onClose={closeModal} size='sm' isCentered>
      <ModalOverlay />
      <ModalContent textAlign='center'>
        <ModalHeader>Log out of CourseRate?</ModalHeader>
        <ModalBody>You can always log back in at any time.</ModalBody>
        <ModalFooter>
          <Button bgColor='grey.500' onClick={closeModal} mr='4'>
            Cancel
          </Button>
          <Button colorScheme='green' onClick={logout} isLoading={loading}>
            Log out
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default LogoutModal;
