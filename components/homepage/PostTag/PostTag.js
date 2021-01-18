import { Tag, useMediaQuery } from '@chakra-ui/react';

function PostTag({ title }) {
  const [mobile] = useMediaQuery('(max-width: 30em)');

  return (
    <Tag
      size={mobile ? 'sm' : 'md'}
      fontSize={['xs', '13px']}
      mr='2'
      mb='2'
      borderRadius='base'
    >
      {title}
    </Tag>
  );
}

export default PostTag;
