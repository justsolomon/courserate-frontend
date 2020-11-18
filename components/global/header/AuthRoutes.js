import { Box, Stack } from '@chakra-ui/core';
import { useRouter } from 'next/router';
import NavLink from './NavLink';
import RegisterButton from './RegisterButton';

function AuthRoutes() {
  const router = useRouter();

  return (
    <Stack isInline align='center' spacing='4'>
      <Box fontWeight='bold' color='grey.500'>
        <NavLink path='login' text='Login' login />
      </Box>
      <RegisterButton goToRegisterPage={() => router.push('/signup')} />
    </Stack>
  );
}

export default AuthRoutes;
