import {
  Box,
  Text,
  Link as PrimaryLink,
  HStack,
  Stack,
  IconButton,
  Button,
} from '@chakra-ui/react';
import PostTagList from '../PostTag/PostTagList';
import Link from 'next/link';
import { ChatIcon, TriangleUpIcon } from '@chakra-ui/icons';
import FormattedTime from './FormattedTime';
import PostUser from './PostUser';
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
      <PostUser createdAt={createdAt} username={username} />
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
