import { VStack } from '@chakra-ui/react';
import FilterGroup from './FilterGroup';
import filterGroups from './filterGroups';

function FilterGroupList() {
  return (
    <VStack spacing='4' mt='10' position='sticky' top='127px'>
      {filterGroups.map((filterGroup, index) => (
        <FilterGroup {...filterGroup} key={index} />
      ))}
    </VStack>
  );
}

export default FilterGroupList;
