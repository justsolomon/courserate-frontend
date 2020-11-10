import { Stack } from '@chakra-ui/core';

function AuthLayout({ children }) {
  return (
    <Stack
      as='form'
      border='1px'
      borderColor='gray.300'
      p='8'
      borderRadius='lg'
      w='35%'
      mx='auto'
      mt='8'
      spacing='4'
    >
      {children}
    </Stack>
  );
}

export default AuthLayout;
