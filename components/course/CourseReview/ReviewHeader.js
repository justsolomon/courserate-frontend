import { HStack, Link as ChakraLink, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { FaCircle } from 'react-icons/fa';
import FormattedTime from '../../homepage/PostCard/FormattedTime';
import { username as user } from '../../../graphql/state/auth/authState';
import ReviewActionMenu from './ReviewActionMenu';

function ReviewHeader({ username, createdAt, reviewId, openEdit }) {
  return (
    <HStack align='center' fontSize='sm' h='21px'>
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
      {user() === username && (
        <ReviewActionMenu reviewId={reviewId} openEdit={openEdit} />
      )}
    </HStack>
  );
}

export default ReviewHeader;
