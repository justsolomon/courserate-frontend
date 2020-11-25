import { Stack } from '@chakra-ui/react';

function AuthLayout({ children, submitForm }) {
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
      onSubmit={submitForm}
    >
      {children}
    </Stack>
  );
}

export default AuthLayout;
