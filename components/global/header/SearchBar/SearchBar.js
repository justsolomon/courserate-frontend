import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <InputGroup w={['100%', , , '300px']}>
      <InputLeftElement
        pointerEvents='none'
        color='gray.300'
        children={<Icon as={FaSearch} />}
      />
      <Input placeholder='Search...' size='md' borderRadius='base' />;
    </InputGroup>
  );
}

export default SearchBar;
