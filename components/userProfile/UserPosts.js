import { VStack } from '@chakra-ui/react';
import PostCard from '../homepage/postCard/PostCard';
import SkeletonList from '../homepage/postCard/SkeletonList';

function UserPosts({ posts, refetch, loading }) {
  return (
    <VStack
      w='100%'
      mt={['4', '0']}
      spacing={['0', '2']}
      borderBottomWidth={['1px', '0px']}
    >
      {loading && <SkeletonList />}
      {posts.map((post) => (
        <PostCard refetch={refetch} {...post} skillLimit={7} />
      ))}
    </VStack>
  );
}

export default UserPosts;
