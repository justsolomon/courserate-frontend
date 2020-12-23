import { Text, VStack } from '@chakra-ui/react';
import PostTagList from '../homepage/PostTag/PostTagList';

function CourseSkills({ skills }) {
  return (
    <VStack align='flex-start'>
      <Text fontWeight='medium'>Skills covered: </Text>
      <PostTagList skills={skills} limit={Infinity} />
    </VStack>
  );
}

export default CourseSkills;
