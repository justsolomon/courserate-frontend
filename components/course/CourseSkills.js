import { Stack, Text } from '@chakra-ui/react';
import PostTagList from '../homepage/PostTag/PostTagList';

function CourseSkills({ skills }) {
  return (
    <Stack direction={['column', , 'row']}>
      <Text fontWeight='medium'>Skills covered: </Text>
      <PostTagList skills={skills} limit={Infinity} />
    </Stack>
  );
}

export default CourseSkills;
