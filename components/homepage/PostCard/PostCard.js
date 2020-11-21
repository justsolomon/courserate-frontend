import { Box, Text, HStack } from '@chakra-ui/react';
import PostTagList from '../postTag/PostTagList';
import PostCreator from './PostCreator';
import UpvoteButton from './UpvoteButton';
import ReviewsButton from './ReviewsButton';

function PostCard({
  username,
  title,
  skills,
  voteCount,
  reviewCount,
  createdAt,
}) {
  return (
    <Box
      borderWidth='1px'
      px='4'
      py='2'
      cursor='pointer'
      borderRadius='md'
      _hover={{ borderColor: 'gray.600' }}
      tabIndex='0'
    >
      <PostCreator createdAt={createdAt} username={username} />
      <Text fontSize='lg' fontWeight='bold'>
        {title}
      </Text>
      <PostTagList skills={skills} />
      <HStack mt='2' spacing='3'>
        <UpvoteButton voteCount={voteCount} />
        <ReviewsButton reviewCount={reviewCount} />
      </HStack>
    </Box>
  );
}

export default PostCard;
