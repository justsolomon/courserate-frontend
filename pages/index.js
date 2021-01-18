import { useQuery, useReactiveVar } from '@apollo/client';
import { Stack, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LayoutContainer from '../components/global/layout/LayoutContainer';
import SEO from '../components/global/seo/SEO';
import FilterGroupList from '../components/homepage/FilterList/FilterGroupList';
import MobileFilterMenu from '../components/homepage/FilterList/MobileFilterMenu';
import PostCardList from '../components/homepage/PostCard/PostCardList';
import { networkError } from '../graphql/state/global/networkState';
import NetworkError from '../components/global/NetworkError';
import FETCH_COURSES from '../components/homepage/PostCard/coursesQuery';
import { courseDeleted } from '../graphql/state/course/courseState';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobile] = useMediaQuery('(max-width: 750px)');

  useEffect(() => {
    setIsMobile(mobile);
  });

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data, error, refetch } = useQuery(FETCH_COURSES);

  const deleted = useReactiveVar(courseDeleted);
  useEffect(() => {
    //refetch all courses to reflect added/deleted courses
    refetch();
    courseDeleted(false);
  }, [deleted]);

  const netError = useReactiveVar(networkError);

  useEffect(() => {
    if (data) {
      networkError(false);
      setLoading(false);
      setCourses(data.courses);
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

  return (
    <LayoutContainer>
      <SEO prefix='Home' />
      <Stack
        direction={['column', , 'row']}
        pl={['0', , '5%']}
        spacing={['0%', , '15%']}
        align={['flex-end', , 'flex-start']}
        pt={netError && ['4', '0']}
      >
        {netError ? (
          <NetworkError refetchQuery={refetchQuery} />
        ) : (
          <>
            {isMobile ? <MobileFilterMenu /> : <FilterGroupList />}
            <PostCardList
              courses={courses}
              loading={loading}
              refetch={refetch}
            />
          </>
        )}
      </Stack>
    </LayoutContainer>
  );
}
