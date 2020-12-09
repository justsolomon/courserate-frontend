import { useQuery } from '@apollo/client';
import { Center, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CoursePost from '../../components/course/CoursePost';
import FETCH_COURSE from '../../components/course/courseQuery';
import LayoutContainer from '../../components/global/layout/LayoutContainer';
import SEO from '../../components/global/seo/SEO';
import { allReviews } from '../../graphql/state/review/reviewState';

function Post() {
  const [postDetails, setPostDetails] = useState({ skills: [] });
  const [voters, setVoters] = useState([]);
  const [votesNum, setVotesNum] = useState();

  const router = useRouter();
  const { courseId } = router.query;

  const { loading } = useQuery(FETCH_COURSE, {
    variables: { courseId },
    onCompleted(data) {
      const { course } = data;
      setPostDetails(course);
      setVoters(course.votes.map((user) => user.username));
      setVotesNum(course.voteCount);
      allReviews(course.reviews);
    },
    onError({ message }) {
      console.log(message);
    },
  });

  return (
    <LayoutContainer>
      <SEO prefix={postDetails.title ? postDetails.title : 'Course Post'} />
      {loading ? (
        <Center w='100%'>
          <Spinner mt={['3', '0']} />
        </Center>
      ) : (
        <CoursePost
          {...postDetails}
          voters={voters}
          votesNum={votesNum}
          setVotesNum={setVotesNum}
        />
      )}
    </LayoutContainer>
  );
}

export default Post;
