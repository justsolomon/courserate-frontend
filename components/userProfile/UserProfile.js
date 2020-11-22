import { useQuery } from '@apollo/client';
import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import FETCH_USER from './userQuery';

function UserProfile({ username }) {
  const [profile, setProfile] = useState({});
  const { loading } = useQuery(FETCH_USER, {
    variables: { username },
    onCompleted(data) {
      console.log(data);
      setProfile(data.user);
    },
    onError({ message }) {
      console.log(message);
    },
  });

  const { email, createdAt } = profile;
  return (
    <Box>
      <Text>Username: {username}</Text>
      <Text>Email: {email}</Text>
      <Text>Joined: {new Date(createdAt).toLocaleDateString()}</Text>
    </Box>
  );
}

export default UserProfile;
