import { Alert, AlertIcon } from '@chakra-ui/core';

function SuccessAlert({ text }) {
  return (
    <Alert status='success' mb='3' borderRadius='md'>
      <AlertIcon />
      {text} successfully!
    </Alert>
  );
}

export default SuccessAlert;
