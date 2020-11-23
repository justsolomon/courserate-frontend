import { Tag } from '@chakra-ui/react';

function PostTag({ title }) {
  return (
    <Tag _hover={{ bg: 'gray.300' }} size='md' mr='2' mb='2'>
      {title}
    </Tag>
  );
}

export default PostTag;
