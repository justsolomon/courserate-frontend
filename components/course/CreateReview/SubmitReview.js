import { Button } from '@chakra-ui/react';

function SubmitReview({ disabled, loading, edit }) {
  return (
    <Button
      type='submit'
      bg='green.400'
      colorScheme='green'
      float='right'
      fontSize={['sm', '15px']}
      fontWeight='medium'
      borderRadius='base'
      _hover={{ bg: 'green.500' }}
      isDisabled={disabled}
      isLoading={loading}
    >
      {edit ? 'Save Changes' : 'Submit Review'}
    </Button>
  );
}

export default SubmitReview;
