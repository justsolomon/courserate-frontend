import { Box, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NavLink from './NavLink';
import AuthButton from './AuthButton';

function AuthRoutes() {
  const router = useRouter();

  return (
    <Stack
      align='center'
      spacing={['2', '0', '4']}
      justify='space-between'
      mt={['2', '4', '0']}
      direction={['column', 'row', 'row']}
    >
      <Box fontWeight='bold' d={['none', , 'block']}>
        <NavLink
          path={`login/?returnPath=${router.asPath}`}
          as='login'
          text='Login'
          hoverable
        />
      </Box>
      <AuthButton
        goToAuthPage={() =>
          router.push(`/login/?returnPath=${router.asPath}`, 'login')
        }
        authText='Login'
      />
      <AuthButton
        goToAuthPage={() =>
          router.push(`/signup/?returnPath=${router.asPath}`, 'signup')
        }
        authText='Sign Up'
      />
    </Stack>
  );
}

export default AuthRoutes;
