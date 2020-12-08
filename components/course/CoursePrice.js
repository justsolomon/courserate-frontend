import { HStack, Text } from '@chakra-ui/react';

function CoursePrice({ price }) {
  return (
    <HStack>
      <Text fontWeight='medium'>Cost:</Text>
      <Text>{Number(price) ? 'Paid' : 'Free'}</Text>
    </HStack>
  );
}

export default CoursePrice;
