import { Button, LightMode } from '@chakra-ui/core';

function SubmitButton({ text }) {
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
      >
        {text}
      </Button>
    </LightMode>
  );
}

export default SubmitButton;
