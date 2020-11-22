import { useMutation } from '@apollo/client';
import { TriangleUpIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { errorToast } from '../../../auth/logout/logoutStatus';
import VOTE_COURSE from './voteMutation';

function VoteButton({ voteCount, courseId, updateCount, voters }) {
  //check if logged in user already voted the course
  const alreadyVoted = voters.includes(localStorage['username']);
  const [vote, setVote] = useState(alreadyVoted);

  const toast = useToast();

  const [voteCourse] = useMutation(VOTE_COURSE, {
    onCompleted(data) {
      let newVoteCount = data.voteCourse.voteCount;

      if (newVoteCount > voteCount) setVote(true);
      else setVote(false);

      updateCount(newVoteCount);
    },
    onError({ message }) {
      toast({ ...errorToast, description: message });
    },
  });

  return (
    <HStack spacing='0' mr='2' pb='0.07rem'>
      <IconButton
        aria-label='Upvote post'
        variant='ghost'
        role='group'
        padding='0'
        size='sm'
        icon={
          <TriangleUpIcon
            color={vote ? 'orange.400' : 'gray.600'}
            boxSize='16px'
            _groupHover={{ color: 'orange.400' }}
          />
        }
        onClick={() => voteCourse({ variables: { courseId } })}
      />

      <Text fontSize='sm' fontWeight='600' color='gray.600'>
        {voteCount}
      </Text>
    </HStack>
  );
}

export default VoteButton;
