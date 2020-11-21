import { TriangleUpIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Text } from '@chakra-ui/react';

function UpvoteButton({ voteCount }) {
  return (
    <HStack spacing='0'>
      <IconButton
        aria-label='Upvote post'
        variant='ghost'
        role='group'
        padding='0'
        size='sm'
        icon={
          <TriangleUpIcon
            color='gray.600'
            boxSize='16px'
            _groupHover={{ color: 'orange.400' }}
          />
        }
      />

      <Text fontSize='sm' fontWeight='600' color='gray.600'>
        {voteCount}
      </Text>
    </HStack>
  );
}

export default UpvoteButton;
