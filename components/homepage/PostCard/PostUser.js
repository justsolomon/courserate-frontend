import { Text, Link as PrimaryLink } from '@chakra-ui/react';
import Link from 'next/link';
import FormattedTime from './FormattedTime';

function PostUser({ username, createdAt }) {
  return (
    <Text color='gray.500' fontSize='sm'>
      Posted by{' '}
      <Link href={`/${username}`}>
        <PrimaryLink href={`/${username}`}>{username}</PrimaryLink>
      </Link>{' '}
      <FormattedTime createdAt={createdAt} />
    </Text>
  );
}

export default PostUser;
