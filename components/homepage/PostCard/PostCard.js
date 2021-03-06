import { Box, HStack } from '@chakra-ui/react';
import PostTagList from '../PostTag/PostTagList';
import PostCreator from './PostCreator';
import VoteButton from './vote/VoteButton';
import ReviewsButton from './ReviewsButton';
import { useState } from 'react';
import ShareMenu from './share/ShareMenu';
import { useRouter } from 'next/router';
import PostTitle from './PostTitle';
import CourseActionMenu from '../../course/CourseActionMenu';
import { username as user } from '../../../graphql/state/auth/authState';

function PostCard({
  username,
  title,
  skills,
  voteCount,
  reviewCount,
  createdAt,
  id,
  votes,
  skillLimit,
  refetch,
}) {
  const [votesNum, setVotesNum] = useState(voteCount);
  const router = useRouter();

  return (
    <Box
      borderWidth={['1px 0px 0px 0px', '1px']}
      px='4'
      py='2'
      cursor='pointer'
      borderRadius={['none', 'md']}
      w='100%'
      _hover={{ borderColor: ['none', 'gray.600'] }}
      tabIndex='0'
      onClick={() => router.push(`/post/${id}`)}
    >
      <PostCreator createdAt={createdAt} username={username} />
      <PostTitle title={title} />
      <PostTagList skills={skills} limit={skillLimit} />
      <HStack spacing='0'>
        <VoteButton
          voteCount={votesNum}
          courseId={id}
          updateCount={setVotesNum}
          voters={votes.map((user) => user.username)}
          refetchQuery={refetch}
        />
        <ReviewsButton reviewCount={reviewCount} home />
        <ShareMenu
          link={`https://courserate.netlify.app/post/${id}`}
          title={title}
        />
        {user() === username && <CourseActionMenu courseId={id} />}
      </HStack>
    </Box>
  );
}

export default PostCard;
