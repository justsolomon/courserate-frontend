import { Alert, AlertIcon } from '@chakra-ui/react';

function ErrorAlert({ errorMessage }) {
  if (errorMessage === 'Failed to fetch')
    errorMessage = 'No internet connection';

  return (
    <Alert status='error' borderRadius='base'>
      <AlertIcon />
      {errorMessage}
    </Alert>
  );
}

export default ErrorAlert;
