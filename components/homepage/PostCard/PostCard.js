import { Box, Text, HStack } from '@chakra-ui/react';
import PostTagList from '../PostTag/PostTagList';
import PostCreator from './PostCreator';
import VoteButton from './vote/VoteButton';
import ReviewsButton from './ReviewsButton';
import ShareButton from './ShareButton';
import { useState } from 'react';

function PostCard({
  username,
  title,
  skills,
  voteCount,
  reviewCount,
  createdAt,
  id,
  votes,
}) {
  const [votesNum, setVotesNum] = useState(voteCount);
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
      <HStack mt='2' spacing='0'>
        <VoteButton
          voteCount={votesNum}
          courseId={id}
          updateCount={setVotesNum}
          voters={votes.map((user) => user.username)}
        />
        <ReviewsButton reviewCount={reviewCount} />
        <ShareButton />
      </HStack>
    </Box>
  );
}

export default PostCard;
