import { ChatIcon } from '@chakra-ui/icons';
import { Button, HStack, Text, useToast } from '@chakra-ui/react';
import { loggedIn } from '../../../graphql/state/auth/authState';
import { errorToast } from '../../auth/logout/logoutStatus';

function ReviewsButton({ reviewCount, openReview, home }) {
  const toast = useToast();

  return (
    <HStack
      as={Button}
      size='sm'
      variant='ghost'
      justify='center'
      px='2'
      onClick={() => {
        if (!home) {
          if (!loggedIn())
            toast({
              ...errorToast,
              description: 'Log in or sign up to leave a comment',
            });
          else openReview();
        }
      }}
    >
      <ChatIcon boxSize={['12px', '14px']} color='gray.600' />
      <Text fontSize={['13px', 'sm']} color='gray.600'>
        {reviewCount} Review{reviewCount === 1 ? '' : 's'}
      </Text>
    </HStack>
  );
}

export default ReviewsButton;
