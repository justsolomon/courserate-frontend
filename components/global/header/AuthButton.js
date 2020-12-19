import { Button, LightMode } from '@chakra-ui/react';

function AuthButton({ goToAuthPage, authText }) {
  const login = authText === 'Login';
  return (
    <LightMode>
      <Button
        onClick={goToAuthPage}
        variant={login && 'outline'}
        d={login && ['block', , 'none']}
        bg={!login && 'green.400'}
        borderColor='green.400'
        color={login ? 'green.400' : 'white'}
        _hover={{ bg: 'green.500', color: 'white' }}
        borderRadius='base'
        w={['100%', '48%', '100%']}
      >
        {authText}
      </Button>
    </LightMode>
  );
}

export default AuthButton;
