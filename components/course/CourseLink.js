import { ExternalLinkIcon } from '@chakra-ui/icons';
import { HStack, Link, Text } from '@chakra-ui/react';

function CourseLink({ courseLink }) {
  return (
    <Link href={courseLink} color='blue.500' target='_blank'>
      <HStack
        align='center'
        spacing='1'
        w={['90%', '80%', '60%', '50%', '40%']}
      >
        <Text w='40%' fontSize='sm' isTruncated>
          {courseLink && courseLink.replace('https://www.', '')}
        </Text>{' '}
        <ExternalLinkIcon boxSize='14px' />
      </HStack>
    </Link>
  );
}

export default CourseLink;
