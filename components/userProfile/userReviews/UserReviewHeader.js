import { HStack, Text } from '@chakra-ui/react';
import FormattedTime from '../../homepage/postCard/FormattedTime';

function UserReviewHeader({ createdAt }) {
  return (
    <HStack color='gray.500' fontSize='sm' spacing='1'>
      <Text>Posted</Text>
      <FormattedTime createdAt={createdAt} />
    </HStack>
  );
}

export default UserReviewHeader;
