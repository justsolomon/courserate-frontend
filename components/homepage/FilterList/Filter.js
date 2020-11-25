import { Checkbox } from '@chakra-ui/react';

function Filter({ filterTitle }) {
  return <Checkbox w='100%'>{filterTitle}</Checkbox>;
}

export default Filter;
