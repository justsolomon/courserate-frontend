import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import FETCH_COURSE from '../../components/course/courseQuery';
import EditCourseContainer from '../../components/edit/EditCourseContainer';
import { networkError } from '../../graphql/state/global/networkState';
import LayoutContainer from '../../components/global/layout/LayoutContainer';
import SEO from '../../components/global/seo/SEO';
import { useQuery, useReactiveVar } from '@apollo/client';
import { Center, Spinner } from '@chakra-ui/react';
import NetworkError from '../../components/global/NetworkError';

function EditPost() {
  const [postDetails, setPostDetails] = useState({});
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const netError = useReactiveVar(networkError);

  const router = useRouter();
  const { courseId } = router.query;

  const { data, error, refetch } = useQuery(FETCH_COURSE, {
    variables: { courseId },
  });

  useEffect(() => {
    if (data) {
      const { course } = data;
      setPostDetails(course);
      setSkills(course.skills);
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

  const { title } = postDetails;

  return (
    <LayoutContainer>
      <SEO
        prefix={title ? `Edit ${title}` : 'Edit Post'}
        description={`Make changes to ${title}`}
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
            <EditCourseContainer {...postDetails} skills={skills} />
          )}
        </>
      )}
    </LayoutContainer>
  );
}

export default EditPost;
