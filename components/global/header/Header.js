import {
  Box,
  Button,
  Icon,
  LightMode,
  Stack,
  useColorMode,
} from '@chakra-ui/core';
import NavLink from './NavLink';
import { useRouter } from 'next/router';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = { light: 'gray.200', dark: 'gray.600' };
  const router = useRouter();

  return (
    <Stack
      isInline
      px='8'
      py='2'
      borderBottom='1px'
      borderBottomColor={borderColor[colorMode]}
      justify='space-between'
      boxShadow='sm'
      position='sticky'
      align='center'
    >
      <Box fontWeight='bold' fontSize='2xl'>
        <NavLink path='' text='CourseRate' />
      </Box>
      <Stack isInline spacing='1' align='center'>
        <Box>
          <Button
            aria-label='Toggle Dark Mode'
            variant='ghost'
            onClick={toggleColorMode}
          >
            <Icon name={colorMode === 'light' ? 'moon' : 'sun'} size='24px' />
          </Button>
        </Box>
        <Stack isInline align='center' spacing='4'>
          <Box fontWeight='bold' color='grey.500'>
            <NavLink path='login' text='Login' login />
          </Box>
          <Box>
            <LightMode>
              <Button
                onClick={() => router.push('/signup')}
                color='white'
                bg='green.400'
                _hover={{ bg: 'green.500' }}
              >
                Sign Up
              </Button>
            </LightMode>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
