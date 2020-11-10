import { Button, LightMode } from '@chakra-ui/core';

function SubmitButton({ text, loading }) {
  return (
    <LightMode>
      <Button
        type='submit'
        w='100%'
        bg='green.400'
        color='white'
        _hover={{ bg: 'green.500' }}
        fontSize='1.05rem'
        letterSpacing='wide'
        isLoading={loading}
      >
        {text}
      </Button>
    </LightMode>
  );
}

export default SubmitButton;
