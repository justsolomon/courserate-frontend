import { Text, Link as PrimaryLink } from '@chakra-ui/react';
import Link from 'next/link';
import FormattedTime from './FormattedTime';

function PostCreator({ username, createdAt }) {
  return (
    <Text color='gray.500' fontSize='sm'>
      Posted by{' '}
      <Link href={`/user/${username}`}>
        <PrimaryLink href={`/user/${username}`}>{username}</PrimaryLink>
      </Link>{' '}
      <FormattedTime createdAt={createdAt} />
    </Text>
  );
}

export default PostCreator;
