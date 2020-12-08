import { Text } from '@chakra-ui/react';

function PostTitle({ title }) {
  return (
    <Text fontSize='lg' fontWeight='bold'>
      {title}
    </Text>
  );
}

export default PostTitle;
