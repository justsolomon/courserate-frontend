import { VStack } from '@chakra-ui/react';
import PostCard from '../homepage/PostCard/PostCard';
import SkeletonList from '../homepage/PostCard/SkeletonList';
import NoPosts from './NoPosts';

function UserPosts({ posts, refetch, loading, username }) {
  return (
    <VStack
      w='100%'
      mt={['4', '0']}
      spacing={['0', '2']}
      borderBottomWidth={[posts.length && '1px', '0px']}
      align={['center', 'flex-start']}
    >
      {loading && <SkeletonList />}
      {!loading && !posts[0] && <NoPosts user={username} title='posts' />}

      {posts.map((post) => (
        <PostCard refetch={refetch} {...post} skillLimit={7} key={post.id} />
      ))}
    </VStack>
  );
}

export default UserPosts;
