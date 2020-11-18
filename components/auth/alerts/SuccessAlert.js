import { Alert, AlertIcon } from '@chakra-ui/react';

function SuccessAlert({ text }) {
  return (
    <Alert status='success' borderRadius='base'>
      <AlertIcon />
      {text} successfully!
    </Alert>
  );
}

export default SuccessAlert;
