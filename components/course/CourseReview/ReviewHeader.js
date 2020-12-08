import { HStack, Link as ChakraLink, Circle, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';
import FormattedTime from '../../homepage/PostCard/FormattedTime';

function ReviewHeader({ username, createdAt }) {
  return (
    <HStack align='center' fontSize='sm'>
      <Link href={`/user/${username}`}>
        <ChakraLink
          href={`/user/${username}`}
          fontWeight={['medium', 'normal']}
        >
          {username}
        </ChakraLink>
      </Link>
      <Icon as={FaCircle} boxSize='3px' color='gray.600' />
      <FormattedTime createdAt={createdAt} />
    </HStack>
  );
}

export default ReviewHeader;
