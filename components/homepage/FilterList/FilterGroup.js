import { Text, VStack } from '@chakra-ui/react';
import Filter from './Filter';

function FilterGroup({ groupTitle, filters }) {
  return (
    <VStack spacing='2' w='100%' align='flex-start'>
      <Text textTransform='uppercase' fontSize='md' fontWeight='bold'>
        {groupTitle}
      </Text>
      <VStack spacing='2' align='flex-start' justify='flex-start'>
        {filters.map((filter, index) => (
          <Filter filterTitle={filter} key={index} />
        ))}
      </VStack>
    </VStack>
  );
}

export default FilterGroup;
