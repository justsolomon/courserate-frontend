import { useReactiveVar } from '@apollo/client';
import { Box, Center, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { refetchCourse } from '../../graphql/state/review/reviewState';
import PostCreator from '../homepage/PostCard/PostCreator';
import PostTitle from '../homepage/PostCard/PostTitle';
import ReviewsButton from '../homepage/PostCard/ReviewsButton';
import ShareMenu from '../homepage/PostCard/share/ShareMenu';
import VoteButton from '../homepage/PostCard/vote/VoteButton';
import CourseLink from './CourseLink';
import CoursePrice from './CoursePrice';
import CourseReviewList from './CourseReview/CourseReviewList';
import CourseSkills from './CourseSkills';
import ReviewForm from './CreateReview/ReviewForm';
import PlatformLink from './PlatformLink';
import SortMenu from './SortMenu';

function CoursePost({
  id,
  title,
  createdAt,
  username,
  link,
  website,
  cost,
  skills,
  reviewCount,
  loading,
  level,
  votesNum,
  setVotesNum,
  voters,
}) {
  const [review, setReview] = useState(false);
  const refetch = useReactiveVar(refetchCourse);

  return (
    <VStack
      w={['100%', '95%', '85%', '60%', '50%']}
      align='flex-start'
      borderWidth={['0px', '1px']}
      px={['0', '4']}
      py='2'
      spacing='1'
      borderRadius={['sm', 'base']}
    >
      <VStack
        align='flex-start'
        fontSize={['15px', 'md']}
        px={['4', '0']}
        w='100%'
        spacing='1'
      >
        <PostCreator createdAt={createdAt} username={username} />
        <Box w='100%'>
          <PostTitle title={title} />
          <CourseLink courseLink={link} />
        </Box>
        <CoursePrice price={cost} />
        <HStack>
          <Text fontWeight='medium'>Level:</Text>
          <Text fontSize='15px'>{level}</Text>
        </HStack>
        <PlatformLink website={website} />
        <CourseSkills skills={skills} />
        <HStack spacing='0' align='flex-end' mb='3'>
          <VoteButton
            voteCount={votesNum}
            courseId={id}
            updateCount={setVotesNum}
            voters={voters}
            refetchQuery={refetch}
          />
          <ReviewsButton
            reviewCount={reviewCount}
            openReview={() => setReview(!review)}
          />
          <ShareMenu
            link={`https://courserate.netlify.app/post/${id}`}
            title={title}
          />
        </HStack>
      </VStack>
      {review && <ReviewForm courseId={id} />}
      <Center w='100%' mb='3'>
        <Divider />
      </Center>
      <SortMenu />
      <CourseReviewList />
    </VStack>
  );
}

export default CoursePost;
