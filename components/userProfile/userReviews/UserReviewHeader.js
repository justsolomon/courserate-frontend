import { HStack, Text } from '@chakra-ui/react';
import FormattedTime from '../../homepage/PostCard/FormattedTime';

function UserReviewHeader({ createdAt }) {
  return (
    <HStack color='gray.500' fontSize={['xs', '13px']} spacing='1'>
      <Text>Posted</Text>
      <FormattedTime createdAt={createdAt} />
    </HStack>
  );
}

export default UserReviewHeader;
