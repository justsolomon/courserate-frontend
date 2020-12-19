import { Text } from '@chakra-ui/react';
import { username } from '../../graphql/state/auth/authState';

function NoPosts({ title, user }) {
  return (
    <Text ml={['0', '4']} mt={['2', '0']}>
      {`${user === username() ? 'You have' : `${user} has`} no ${title} yet`}
    </Text>
  );
}

export default NoPosts;
