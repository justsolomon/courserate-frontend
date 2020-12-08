import { ExternalLinkIcon } from '@chakra-ui/icons';
import { HStack, Link, Text } from '@chakra-ui/react';

function PlatformLink({ website }) {
  return (
    <HStack>
      <Text fontWeight='medium'>Platform:</Text>
      <Link href={`https://${website}`} color='blue.500' target='_blank'>
        <HStack align='center' spacing='1'>
          <Text fontSize='sm' isTruncated>
            {website}
          </Text>{' '}
          <ExternalLinkIcon boxSize='14px' />
        </HStack>
      </Link>
    </HStack>
  );
}

export default PlatformLink;
