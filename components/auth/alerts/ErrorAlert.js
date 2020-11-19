import { Alert, AlertIcon } from '@chakra-ui/react';

function ErrorAlert({ errorMessage }) {
  return (
    <Alert status='error' borderRadius='base'>
      <AlertIcon />
      {errorMessage}
    </Alert>
  );
}

export default ErrorAlert;
