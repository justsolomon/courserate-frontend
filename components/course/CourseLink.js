import { ExternalLinkIcon } from '@chakra-ui/icons';
import { HStack, Link, Text } from '@chakra-ui/react';

function CourseLink({ courseLink }) {
  return (
    <Link
      href={courseLink}
      color='blue.500'
      target='_blank'
      display='block'
      w={['40%', , '30%', , '25%']}
    >
      <HStack align='center' spacing='1'>
        <Text maxW='90%' fontSize='sm' isTruncated>
          {courseLink && courseLink.replace('https://www.', '')}
        </Text>{' '}
        <ExternalLinkIcon boxSize='14px' />
      </HStack>
    </Link>
  );
}

export default CourseLink;
