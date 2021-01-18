import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Icon,
  Box,
} from '@chakra-ui/react';
import { FaEllipsisH } from 'react-icons/fa';
import DeleteCourseButton from './DeleteCourse/DeleteCourseButton';
import EditCourseButton from './EditCourseButton';

function CourseActionMenu({ courseId }) {
  return (
    <>
      <Menu autoSelect={false}>
        <MenuButton
          as={IconButton}
          icon={<Icon as={FaEllipsisH} color='gray.600' />}
          size='sm'
          display={['block', , 'none']}
          variant='ghost'
          onClick={(e) => e.stopPropagation()}
        />
        <MenuList minW='50px' w='150px'>
          <EditCourseButton menu courseId={courseId} />
          <MenuDivider my='1' />
          <DeleteCourseButton menu courseId={courseId} />
        </MenuList>
      </Menu>
      <Box display={['none', , 'flex']}>
        <EditCourseButton courseId={courseId} />
        <DeleteCourseButton courseId={courseId} />
      </Box>
    </>
  );
}

export default CourseActionMenu;
