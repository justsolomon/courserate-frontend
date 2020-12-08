import { Text, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import FormattedTime from './FormattedTime';

function PostCreator({ username, createdAt }) {
  return (
    <Text color='gray.500' fontSize='sm'>
      Posted by{' '}
      <Link href={`/user/${username}`}>
        <ChakraLink
          href={`/user/${username}`}
          onClick={(e) => e.stopPropagation()}
        >
          {username}
        </ChakraLink>
      </Link>{' '}
      <FormattedTime createdAt={createdAt} />
    </Text>
  );
}

export default PostCreator;
