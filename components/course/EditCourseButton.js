import {
  HStack,
  Icon,
  Text,
  Button,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdEdit } from 'react-icons/md';

function EditCourseButton({ courseId, menu }) {
  const router = useRouter();
  const fontColor = useColorModeValue('gray.600', 'white');

  const goToCourse = (e) => {
    e.stopPropagation();
    router.push(`/edit/${courseId}`);
  };

  return (
    <>
      {menu ? (
        <MenuItem onClick={goToCourse}>
          <Icon as={MdEdit} mr='1' boxSize='16px' color='gray.600' />
          <Text fontSize='13px' color={fontColor} fontWeight='medium'>
            Edit
          </Text>
        </MenuItem>
      ) : (
        <HStack
          as={Button}
          size='sm'
          variant='ghost'
          justify='center'
          px='2'
          onClick={goToCourse}
        >
          <Icon as={MdEdit} boxSize='14px' color='gray.600' />
          <Text fontSize='sm' color='gray.600'>
            Edit
          </Text>
        </HStack>
      )}
    </>
  );
}

export default EditCourseButton;
