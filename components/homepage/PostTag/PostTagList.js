import { HStack } from '@chakra-ui/react';
import PostTag from './PostTag';

function PostTagList({ skills, limit }) {
  return (
    <HStack mt='3' wrap='wrap' spacing='0'>
      {skills.map((skill, index) => {
        if (index < limit) return <PostTag title={skill} key={index} />;
      })}
    </HStack>
  );
}

export default PostTagList;
