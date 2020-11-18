import { Box } from '@chakra-ui/react';
import NavLink from './NavLink';

function AppName() {
  return (
    <Box fontWeight='bold' fontSize='2xl'>
      <NavLink path='' text='CourseRate' />
    </Box>
  );
}

export default AppName;