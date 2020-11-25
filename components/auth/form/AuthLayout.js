import { Stack } from '@chakra-ui/react';

function AuthLayout({ children, submitForm }) {
  return (
    <Stack
      as='form'
      border='1px'
      borderColor='gray.300'
      px={['4', '8']}
      py='8'
      borderRadius={['md', 'lg']}
      w={['90%', '75%', '50%', '35%']}
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
