import { Stack, Text } from '@chakra-ui/react';
import PostTagList from '../homepage/PostTag/PostTagList';

function CourseSkills({ skills }) {
  return (
    <Stack direction={['column', , 'row']}>
      <Text fontWeight='500'>Skills covered: </Text>
      <PostTagList skills={skills} />
    </Stack>
  );
}

export default CourseSkills;
