import { VStack } from '@chakra-ui/react';
import { networkError } from '../../../graphql/state/global/networkState';
import PostCard from './PostCard';
import SkeletonList from './SkeletonList';

function PostCardList({ courses, loading, refetch }) {
  return (
    <VStack
      align='flex-start'
      mt={['4', '0']}
      spacing={['0', '2']}
      borderBottomWidth={!networkError() && ['1px', '0px']}
      w={['unset', , , '60%', '47%']}
    >
      {loading && <SkeletonList />}
      {courses.map((course) => (
        <PostCard
          refetch={refetch}
          key={course.id}
          {...course}
          skillLimit={10}
        />
      ))}
    </VStack>
  );
}

export default PostCardList;
