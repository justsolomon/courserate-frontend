import {
  HStack,
  Icon,
  Text,
  Button,
  useDisclosure,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import DeleteCourseModal from './DeleteCourseModal';

function DeleteCourseButton({ courseId, menu }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const fontColor = useColorModeValue('gray.600', 'white');

  const openModal = (e) => {
    e.stopPropagation();
    onOpen();
  };

  return (
    <>
      {menu ? (
        <MenuItem onClick={openModal}>
          <Icon as={MdDelete} mr='1' boxSize='16px' color='gray.600' />
          <Text fontSize='13px' color={fontColor} fontWeight='medium'>
            Delete
          </Text>
        </MenuItem>
      ) : (
        <HStack
          as={Button}
          size='sm'
          variant='ghost'
          justify='center'
          px='2'
          spacing='1'
          onClick={openModal}
        >
          <Icon as={MdDelete} boxSize='14px' color='gray.600' />
          <Text fontSize='sm' color='gray.600'>
            Delete
          </Text>
        </HStack>
      )}
      <DeleteCourseModal
        open={isOpen}
        closeModal={onClose}
        courseId={courseId}
      />
    </>
  );
}

export default DeleteCourseButton;
