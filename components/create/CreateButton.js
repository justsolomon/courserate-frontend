import { Button } from '@chakra-ui/react';

function CreateButton({ loading, text }) {
  return (
    <Button
      type='submit'
      w={['100%', 'unset']}
      bg='green.400'
      colorScheme='green'
      color='white'
      _hover={{ bg: 'green.500' }}
      borderRadius='base'
      isLoading={loading}
    >
      {text}
    </Button>
  );
}

export default CreateButton;
