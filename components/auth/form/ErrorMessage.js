import { WarningIcon } from '@chakra-ui/icons';
import { FormErrorMessage, HStack } from '@chakra-ui/react';

function ErrorMessage({ error }) {
  return (
    <FormErrorMessage>
      <WarningIcon color='red' mr='2' />
      {error}
    </FormErrorMessage>
  );
}

export default ErrorMessage;
