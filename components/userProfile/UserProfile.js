import { useQuery } from '@apollo/client';
import { Stack, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ProfileHeader from './profileHeader/ProfileHeader';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';
import FETCH_USER from './userQuery';
import UserReviews from './userReviews/UserReviews';

function UserProfile() {
  const router = useRouter();
  const { tab, username } = router.query;

  const [profile, setProfile] = useState({ courses: [], reviews: [] });

  const { loading, refetch } = useQuery(FETCH_USER, {
    variables: { username },
    onCompleted(data) {
      console.log(data);
      setProfile(data.user);
    },
    onError({ message }) {
      console.log(message);
    },
  });

  return (
    <Stack
      direction={['column', , 'row']}
      align='flex-start'
      spacing={['4', , '12']}
      pt={['4', '0']}
      pb={['2', '0']}
      w='100%'
    >
      <UserInfo loading={loading} username={username} {...profile.user} />
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
          />
        ) : (
          <UserReviews loading={loading} reviews={profile.reviews} />
        )}
      </VStack>
    </Stack>
  );
}

export default UserProfile;
