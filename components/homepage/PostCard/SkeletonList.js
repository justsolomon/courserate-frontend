import { Skeleton, VStack } from '@chakra-ui/react';
import React from 'react';

function SkeletonList() {
  return (
    <VStack>
      <Skeleton h='140px' w='500px' />
      <Skeleton h='140px' w='500px' />
      <Skeleton h='140px' w='500px' />
      <Skeleton h='140px' w='500px' />
    </VStack>
  );
}

export default SkeletonList;
