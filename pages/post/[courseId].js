import { useQuery, useReactiveVar } from '@apollo/client';
import { Box, Center, HStack, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CoursePost from '../../components/course/CoursePost';
import FETCH_COURSE from '../../components/course/courseQuery';
import LayoutContainer from '../../components/global/layout/LayoutContainer';
import NetworkError from '../../components/global/NetworkError';
import SEO from '../../components/global/seo/SEO';
import { networkError } from '../../graphql/state/global/networkState';
import { sortReviews } from '../../graphql/state/review/reviewActions';
import {
  coursePostId,
  refetchCourse,
} from '../../graphql/state/review/reviewState';

function Post() {
  const [postDetails, setPostDetails] = useState({ skills: [] });
  const [voters, setVoters] = useState([]);
  const [votesNum, setVotesNum] = useState();
  const [loading, setLoading] = useState(true);
  const netError = useReactiveVar(networkError);

  const router = useRouter();
  const { courseId } = router.query;

  const { data, error, refetch } = useQuery(FETCH_COURSE, {
    variables: { courseId },
  });

  //store refetch function in state
  refetchCourse(refetch);

  useEffect(() => {
    if (data) {
      const { course } = data;
      setPostDetails(course);
      setVoters(course.votes.map((user) => user.username));
      setVotesNum(course.voteCount);
      sortReviews('New', course.reviews);
      coursePostId(course.id);
      networkError(false);
      setLoading(false);
    } else if (error) {
      setLoading(false);
      const { message } = error;
      if (message === 'Failed to fetch') networkError(true);
    }
  }, [data, error]);

  const refetchQuery = () => {
    networkError(false);
    setLoading(true);
    refetch();
  };

  const { title, username } = postDetails;

  return (
    <LayoutContainer>
      <SEO
        prefix={title ? `${title} by ${username}` : 'Course Post'}
        description={`Check out reviews on ${title}`}
      />
      {netError ? (
        <Center pt={['4', '0']}>
          <NetworkError refetchQuery={refetchQuery} />
        </Center>
      ) : (
        <>
          {loading ? (
            <Center w='100%'>
              <Spinner mt={['3', '0']} />
            </Center>
          ) : (
            <>
              {/*<HStack
              w='100%'
              justify={['center', , , 'flex-start']}
              align='flex-start'
              spacing={['0', , , '12']}
            > 
               <Box
                borderWidth='1px'
                h='250px'
                w='20%'
                d={['none', , , 'block']}
              ></Box> 
              </HStack> */}
              <Center>
                <CoursePost
                  {...postDetails}
                  voters={voters}
                  votesNum={votesNum}
                  setVotesNum={setVotesNum}
                />
              </Center>
            </>
          )}
        </>
      )}
    </LayoutContainer>
  );
}

export default Post;
