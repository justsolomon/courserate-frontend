import { Alert, AlertIcon } from '@chakra-ui/core';

function ErrorAlert({ errorMessage }) {
  return (
    <Alert status='error' mb='3' borderRadius='md'>
      <AlertIcon />
      {errorMessage}
    </Alert>
  );
}

export default ErrorAlert;
