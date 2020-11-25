import { Button, LightMode } from '@chakra-ui/react';

function RegisterButton({ goToRegisterPage }) {
  return (
    <LightMode>
      <Button
        onClick={goToRegisterPage}
        color='white'
        bg='green.400'
        _hover={{ bg: 'green.500' }}
        borderRadius='base'
      >
        Sign Up
      </Button>
    </LightMode>
  );
}

export default RegisterButton;
