import { Box } from '@chakra-ui/react';
import NavLink from './NavLink';

function AppName() {
  return (
    <Box fontWeight='bold' fontSize={['22px', '2xl']}>
      <NavLink path='' text='CourseRate' as='' />
    </Box>
  );
}

export default AppName;
