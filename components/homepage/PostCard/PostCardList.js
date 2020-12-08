import { useQuery } from '@apollo/client';
import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import FETCH_COURSES from './coursesQuery';
import PostCard from './PostCard';
import SkeletonList from './SkeletonList';

function PostCardList() {
  const [courses, setCourses] = useState([]);
  const { loading } = useQuery(FETCH_COURSES, {
    onCompleted(data) {
      setCourses(data.courses);
    },
    onError({ message }) {
      console.log(message);
    },
  });

  return (
    <VStack align='flex-start' mt={['4', '0']} spacing={['0', '2']}>
      {loading && <SkeletonList />}
      {courses.map((course, index) => (
        <PostCard key={index} {...course} />
      ))}
    </VStack>
  );
}

export default PostCardList;
