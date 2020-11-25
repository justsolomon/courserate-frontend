import { HStack } from '@chakra-ui/react';
import PostTag from './PostTag';

function PostTagList({ skills }) {
  return (
    <HStack mt='3'>
      {skills.map((skill, index) => {
        if (index < 5) return <PostTag title={skill} key={index} />;
      })}
    </HStack>
  );
}

export default PostTagList;
