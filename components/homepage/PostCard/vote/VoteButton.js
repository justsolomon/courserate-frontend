import { useMutation } from '@apollo/client';
import { TriangleUpIcon } from '@chakra-ui/icons';
import { HStack, Button, Text, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { username } from '../../../../graphql/state/auth/authState';
import { errorToast } from '../../../auth/logout/logoutStatus';
import VOTE_COURSE from './voteMutation';

function VoteButton({
  voteCount,
  courseId,
  updateCount,
  voters,
  refetchQuery,
}) {
  const [vote, setVote] = useState(false);
  const [newVoters, setNewVoters] = useState(voters);

  useEffect(() => {
    if (voters.length && !newVoters.length) setNewVoters(voters);
    if (newVoters.length) {
      setVote(newVoters.includes(username()));
    }
  }, [newVoters, voters]);

  const toast = useToast();

  const [voteCourse] = useMutation(VOTE_COURSE, {
    onCompleted(data) {
      refetchQuery();
      let newVoteCount = data.voteCourse.voteCount;

      if (newVoteCount > voteCount) setVote(true);
      else setVote(false);

      updateCount(newVoteCount);

      //update voters list
      const { votes } = data.voteCourse;
      setNewVoters(votes.map((user) => user.username));
    },
    onError({ message }) {
      let errMessage = message;
      if (message === 'Refresh token has expired.')
        errMessage = 'You have to be logged in to vote for a course.';
      toast({ ...errorToast, description: errMessage });
    },
  });

  return (
    <HStack
      as={Button}
      aria-label='Upvote Post'
      variant='ghost'
      role='group'
      padding='0'
      size='sm'
      px='2'
      ml='-2'
      fontSize={['13px', 'sm']}
      color={vote ? 'orange.400' : 'gray.600'}
      onClick={(e) => {
        e.stopPropagation();
        voteCourse({ variables: { courseId } });
      }}
      _hover={{ color: 'orange.400' }}
    >
      <TriangleUpIcon
        color={vote ? 'orange.400' : 'gray.600'}
        boxSize={['14px', '16px']}
        _groupHover={{ color: 'orange.400' }}
      />
      <Text>{voteCount}</Text>
    </HStack>
  );
}

export default VoteButton;
