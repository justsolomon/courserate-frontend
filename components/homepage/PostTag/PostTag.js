import { Tag, useMediaQuery } from '@chakra-ui/react';

function PostTag({ title }) {
  const [mobile] = useMediaQuery('(max-width: 30em)');

  return (
    <Tag _hover={{ bg: 'gray.300' }} size={mobile ? 'sm' : 'md'} mr='2' mb='2'>
      {title}
    </Tag>
  );
}

export default PostTag;
