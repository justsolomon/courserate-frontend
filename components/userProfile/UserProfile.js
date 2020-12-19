import { useQuery } from '@apollo/client';
import { Stack, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ProfileHeader from './profileHeader/ProfileHeader';
import UserInfo from './UserInfo';
import UserError from './UserError';
import UserReviews from './userReviews/UserReviews';
import UserPosts from './UserPosts';
import FETCH_USER from './userQuery';
import NetworkError from '../global/NetworkError';

function UserProfile() {
  const router = useRouter();
  const { tab, username } = router.query;

  const [profile, setProfile] = useState({ courses: [], reviews: [] });
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [networkError, setNetworkError] = useState(false);

  const { data, error, refetch } = useQuery(FETCH_USER, {
    variables: { username },
    errorPolicy: 'all',
  });

  useEffect(() => {
    // console.log(data, error);
    if (data) {
      setLoading(false);
      setProfile(data.user);
      setNetworkError(false);
      setErrorMsg('');
    } else if (error) {
      const { message } = error;
      setLoading(false);
      if (message === 'Failed to fetch') setNetworkError(true);
      setErrorMsg(message);
    }
  }, [data, error]);

  const refetchQuery = () => {
    refetch();
    setNetworkError(false);
    setErrorMsg('');
    setLoading(true);
    console.log('refetching');
  };

  return (
    <Stack
      direction={['column', , 'row']}
      align='flex-start'
      spacing={['4', , '12']}
      pt={['4', '0']}
      pb={['2', '0']}
      w='100%'
    >
      {!networkError ? (
        <>
          <UserInfo
            loading={loading}
            username={username}
            {...profile.user}
            error={errorMsg}
          />
          {!errorMsg ? (
            <VStack
              align='flex-start'
              spacing={['0', '3']}
              w={['100%', , '60%', '50%', '45%']}
            >
              <ProfileHeader username={username} tab={tab} />
              {tab !== 'reviews' ? (
                <UserPosts
                  loading={loading}
                  refetch={refetch}
                  posts={profile.courses}
                  username={username}
                />
              ) : (
                <UserReviews
                  username={username}
                  loading={loading}
                  reviews={profile.reviews}
                />
              )}
            </VStack>
          ) : (
            <UserError error={errorMsg} />
          )}
        </>
      ) : (
        <NetworkError refetchQuery={refetchQuery} />
      )}
    </Stack>
  );
}

export default UserProfile;
