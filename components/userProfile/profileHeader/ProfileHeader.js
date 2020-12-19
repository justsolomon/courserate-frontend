import { HStack } from '@chakra-ui/react';
import ProfileHeaderLink from './ProfileHeaderLink';

function ProfileHeader({ username, tab }) {
  return (
    <HStack
      spacing={['0', , '4']}
      w='100%'
      justify={['space-between', , 'normal']}
      borderBottomWidth={['1px', '0px']}
    >
      <ProfileHeaderLink
        active={tab !== 'reviews'}
        text='POSTS'
        link={`/user/${username}`}
      />
      <ProfileHeaderLink
        text='REVIEWS'
        active={tab === 'reviews'}
        link={`/user/${username}?tab=reviews`}
      />
    </HStack>
  );
}

export default ProfileHeader;
