import { useQuery } from '@apollo/client';
import { Spinner, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import FETCH_COURSES from './coursesQuery';
import PostCard from './PostCard';

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
    <VStack>
      {loading ? (
        <Spinner />
      ) : (
        courses.map((course, index) => <PostCard key={index} {...course} />)
      )}
    </VStack>
  );
}

export default PostCardList;
