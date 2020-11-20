import { ChatIcon } from '@chakra-ui/icons';
import { Button, HStack, Text } from '@chakra-ui/react';

function ReviewsButton({ reviewCount }) {
  return (
    <HStack
      as={Button}
      size='sm'
      variant='ghost'
      spacing='2'
      align='center'
      justify='center'
    >
      <ChatIcon boxSize='14px' color='gray.600' />
      <Text fontSize='sm' color='gray.600'>
        {reviewCount} Review{reviewCount === 1 ? '' : 's'}
      </Text>
    </HStack>
  );
}

export default ReviewsButton;
