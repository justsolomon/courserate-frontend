import { Button, LightMode } from '@chakra-ui/react';

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
        borderRadius='base'
      >
        {text}
      </Button>
    </LightMode>
  );
}

export default SubmitButton;
