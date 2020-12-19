import { Text } from '@chakra-ui/react';

function PostTitle({ title }) {
  return (
    <Text fontSize={['17px', 'lg']} fontFamily='heading'>
      {title}
    </Text>
  );
}

export default PostTitle;
