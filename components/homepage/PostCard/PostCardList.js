import { useQuery } from '@apollo/client';
import { Skeleton, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import FETCH_COURSES from './coursesQuery';
import PostCard from './PostCard';

function PostCardList() {
  const [courses, setCourses] = useState(new Array(4));
  const { loading } = useQuery(FETCH_COURSES, {
    onCompleted(data) {
      setCourses(data.courses);
    },
    onError({ message }) {
      console.log(message);
    },
  });

  return (
    <VStack>
      {courses.map((course, index) => (
        <Skeleton isLoaded={!loading} h='140px' w='100%'>
          <PostCard key={index} {...course} />
        </Skeleton>
      ))}
    </VStack>
  );
}

export default PostCardList;
